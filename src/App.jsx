import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import StarsBackground from './components/StarsBackground';
import SettingsScreen from './components/SettingsScreen';
import APSetupScreen from './components/APSetupScreen';
import HandoffScreen from './components/HandoffScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import { BANK, TEAM_COLORS } from './data/questions';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  // Settings
  const [mode, setMode] = useState('single');
  const [teamCount, setTeamCount] = useState(2);
  const [teamNames, setTeamNames] = useState(['Team 1', 'Team 2', 'Team 3', 'Team 4']);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedDiff, setSelectedDiff] = useState('easy');
  const [selectedCount, setSelectedCount] = useState(10);
  const [warnMsg, setWarnMsg] = useState('');

  // Game
  const [screen, setScreen] = useState('settings');
  const [questions, setQuestions] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [teams, setTeams] = useState([]);
  const [teamIdx, setTeamIdx] = useState(0);
  const [answeredIdx, setAnsweredIdx] = useState(null);
  const [apSession, setApSession] = useState(null);

  function handleStart() {
    let pool = [];
    selectedTopics.forEach(t => {
      const bank = BANK[t];
      if (selectedDiff === 'mixed') {
        ['easy', 'medium', 'hard'].forEach(d => pool.push(...bank[d]));
      } else {
        pool.push(...bank[selectedDiff]);
      }
    });

    pool = shuffle(pool);
    const count = Math.min(selectedCount, pool.length);

    if (pool.length === 0) {
      setWarnMsg('No questions available for this selection.');
      return;
    }
    setWarnMsg(pool.length < selectedCount ? `Only ${count} questions available — starting with those.` : '');

    const qs = pool.slice(0, count);
    setQuestions(qs);
    setQIdx(0);
    setScore(0);
    setAnsweredIdx(null);

    if (mode === 'teams') {
      const newTeams = Array.from({ length: teamCount }, (_, i) => ({
        name: teamNames[i]?.trim() || `Team ${i + 1}`,
        score: 0,
        color: TEAM_COLORS[i],
      }));
      setTeams(newTeams);
      setTeamIdx(0);
      setScreen('handoff');
    } else {
      setScreen('quiz');
    }
  }

  const handleAnswer = useCallback((selected) => {
    if (answeredIdx !== null) return;
    setAnsweredIdx(selected);
    const correct = selected === questions[qIdx].a;
    if (correct) {
      if (mode === 'teams') {
        setTeams(prev => {
          const next = [...prev];
          next[teamIdx] = { ...next[teamIdx], score: next[teamIdx].score + 1 };
          return next;
        });
      } else {
        setScore(s => s + 1);
      }
    }
  }, [answeredIdx, questions, qIdx, mode, teamIdx]);

  const handleNext = useCallback(() => {
    const nextIdx = qIdx + 1;
    if (nextIdx >= questions.length) {
      setScreen('results');
      return;
    }
    setQIdx(nextIdx);
    setAnsweredIdx(null);
    if (mode === 'teams') {
      const nextTeamIdx = nextIdx % teams.length;
      setTeamIdx(nextTeamIdx);
      setScreen('handoff');
    }
  }, [qIdx, questions.length, mode, teams.length]);

  function handlePlayAgain() {
    setScreen('settings');
    setWarnMsg('');
    setApSession(null);
  }

  function handleApStart(setup) {
    let pool = [];
    setup.units.forEach(u => {
      if (setup.diff === 'mixed') {
        ['easy', 'medium', 'hard'].forEach(d => pool.push(...u[d]));
      } else {
        pool.push(...u[setup.diff]);
      }
    });
    pool = shuffle(pool);
    if (pool.length === 0) {
      setWarnMsg('No questions available for this selection.');
      return;
    }
    const count = Math.min(setup.count, pool.length);
    setWarnMsg(pool.length < setup.count ? `Only ${count} questions available — starting with those.` : '');

    setQuestions(pool.slice(0, count));
    setQIdx(0);
    setScore(0);
    setAnsweredIdx(null);
    setMode(setup.mode);
    setApSession({
      subjectName: setup.subjectName,
      unitNames: setup.units.map(u => u.name),
    });

    if (setup.mode === 'teams') {
      const newTeams = Array.from({ length: setup.teamCount }, (_, i) => ({
        name: setup.teamNames[i]?.trim() || `Team ${i + 1}`,
        score: 0,
        color: TEAM_COLORS[i],
      }));
      setTeams(newTeams);
      setTeamIdx(0);
      setScreen('handoff');
    } else {
      setScreen('quiz');
    }
  }

  const currentTeam = mode === 'teams' ? teams[teamIdx] : null;

  return (
    <Box sx={{ minHeight: '100vh', background: '#07071a', overflowX: 'hidden' }}>
      <StarsBackground />
      <Container
        maxWidth="sm"
        sx={{ position: 'relative', zIndex: 1, py: { xs: '1.5rem', sm: '2rem' }, pb: '4rem' }}
      >
        {screen === 'settings' && (
          <SettingsScreen
            mode={mode} setMode={setMode}
            teamCount={teamCount} setTeamCount={setTeamCount}
            teamNames={teamNames} setTeamNames={setTeamNames}
            selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics}
            selectedDiff={selectedDiff} setSelectedDiff={setSelectedDiff}
            selectedCount={selectedCount} setSelectedCount={setSelectedCount}
            onStart={handleStart}
            onApMode={() => { setWarnMsg(''); setScreen('ap-setup'); }}
            warnMsg={warnMsg}
          />
        )}

        {screen === 'ap-setup' && (
          <APSetupScreen
            onStart={handleApStart}
            onBack={() => { setWarnMsg(''); setScreen('settings'); }}
            warnMsg={warnMsg}
          />
        )}

        {screen === 'handoff' && currentTeam && (
          <HandoffScreen
            key={`handoff-${qIdx}`}
            team={currentTeam}
            qIdx={qIdx}
            total={questions.length}
            onReady={() => setScreen('quiz')}
          />
        )}

        {screen === 'quiz' && questions[qIdx] && (
          <QuizScreen
            key={`quiz-${qIdx}`}
            question={questions[qIdx]}
            qIdx={qIdx}
            total={questions.length}
            score={score}
            mode={mode}
            currentTeam={currentTeam}
            answeredIdx={answeredIdx}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}

        {screen === 'results' && (
          <ResultsScreen
            mode={mode}
            score={score}
            total={questions.length}
            teams={teams}
            apSession={apSession}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </Container>
    </Box>
  );
}

import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H, stars;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function mkStars() {
      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        vy: Math.random() * 0.12 + 0.03,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.018 + 0.006,
        hue: Math.random() < 0.12 ? 'purple' : Math.random() < 0.14 ? 'cyan' : 'white',
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      stars.forEach(s => {
        s.phase += s.speed;
        const alpha = 0.25 + 0.7 * (Math.sin(s.phase) * 0.5 + 0.5);
        const color =
          s.hue === 'purple' ? `rgba(167,139,250,${alpha})`
          : s.hue === 'cyan' ? `rgba(103,232,249,${alpha})`
          : `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        s.y -= s.vy;
        if (s.y < -4) { s.y = H + 4; s.x = Math.random() * W; }
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    mkStars();
    draw();

    const onResize = () => { resize(); mkStars(); };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <Box
        component="canvas"
        ref={canvasRef}
        sx={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      />
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 15% 60%, rgba(139,92,246,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 85% 15%, rgba(6,182,212,0.09) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 65% 90%, rgba(249,115,22,0.07) 0%, transparent 65%)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </>
  );
}

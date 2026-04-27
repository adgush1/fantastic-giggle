// AP Physics 1 question bank — pilot (8 units × 3 difficulties × 5 questions).
// Aligned to the 2024+ College Board AP Physics 1 CED, which added Fluids as Unit 8.
// Sources consulted (concepts/topics only — items are paraphrased, not copied):
//   • College Board AP Physics 1 Course and Exam Description (2024+)
//   • College Board released AP Physics 1 MCQ samples
//   • Khan Academy AP Physics 1 question bank (concept coverage)
//   • Princeton Review / Barron's AP Physics 1 reference (topical scope)
// Use g = 9.8 m/s² unless a problem specifies otherwise.
// Question shape matches existing BANK: { q, c: [4 strings], a: index }.

export const PHYSICS1 = {
  name: 'AP Physics 1',
  icon: '⚛️',
  units: [
    {
      id: 'kin',
      name: 'Unit 1: Kinematics',
      icon: '🚀',
      easy: [
        { q: "Which quantity is a vector?", c: ["Speed","Distance","Velocity","Time"], a: 2 },
        { q: "An object moving at constant velocity has acceleration of:", c: ["Zero","9.8 m/s²","Equal to its velocity","Increasing with time"], a: 0 },
        { q: "Which kinematic equation gives final velocity from initial velocity, acceleration, and time?", c: ["v = u + at","x = ½at²","v² = u² + 2ax","x = vt"], a: 0 },
        { q: "On Earth, neglecting air resistance, the acceleration of a freely falling object is approximately:", c: ["0 m/s²","9.8 m/s² downward","9.8 m/s² upward","Depends on the object's mass"], a: 1 },
        { q: "The slope of a position-vs-time graph represents:", c: ["Acceleration","Velocity","Displacement","Force"], a: 1 },
      ],
      medium: [
        { q: "A car accelerates uniformly from rest at 3 m/s² for 4 s. How far does it travel?", c: ["6 m","12 m","24 m","48 m"], a: 2 },
        { q: "A ball is thrown straight up at 20 m/s. Approximately how high does it rise (g = 10 m/s²)?", c: ["10 m","20 m","30 m","40 m"], a: 1 },
        { q: "A projectile is launched horizontally from a 45 m cliff at 10 m/s. How long until it lands? (g = 10 m/s²)", c: ["1 s","2 s","3 s","4.5 s"], a: 2 },
        { q: "An object's velocity-time graph is a straight horizontal line above zero. Its motion is best described as:", c: ["At rest","Constant velocity","Constant acceleration","Decelerating"], a: 1 },
        { q: "If an object's velocity and acceleration point in opposite directions, the object is:", c: ["Speeding up","Slowing down","At rest","Moving in a circle"], a: 1 },
      ],
      hard: [
        { q: "Two cars start from rest at the same point. Car A accelerates at 2 m/s² for 5 s; Car B accelerates at 4 m/s² for 5 s. The ratio of distances (B : A) is:", c: ["2 : 1","4 : 1","√2 : 1","1 : 2"], a: 0 },
        { q: "A projectile is launched at 30° above horizontal with speed 20 m/s. Its initial vertical velocity component is approximately:", c: ["10 m/s","17.3 m/s","20 m/s","5 m/s"], a: 0 },
        { q: "A ball dropped from rest falls 19.6 m. Approximately how long does it take? (g = 9.8 m/s²)", c: ["1 s","2 s","3 s","4 s"], a: 1 },
        { q: "On a position-vs-time graph, a curve that is concave up indicates:", c: ["Negative acceleration","Zero acceleration","Positive acceleration","Constant velocity"], a: 2 },
        { q: "A train passes a station at 30 m/s and then decelerates at 1.5 m/s². How far does it travel before stopping?", c: ["100 m","200 m","300 m","450 m"], a: 2 },
      ],
    },
    {
      id: 'dyn',
      name: 'Unit 2: Force and Translational Dynamics',
      icon: '💪',
      easy: [
        { q: "Newton's second law is most commonly written as:", c: ["F = ma","F = mv","p = mv","W = mg"], a: 0 },
        { q: "An object's weight on Earth equals:", c: ["mg","ma","½mv²","mv"], a: 0 },
        { q: "Newton's third law states that:", c: ["Forces always cause acceleration","For every action there is an equal and opposite reaction","Force equals mass times acceleration","Inertia depends on velocity"], a: 1 },
        { q: "The force opposing motion between two surfaces in contact is:", c: ["Tension","Normal force","Friction","Weight"], a: 2 },
        { q: "A 2 kg object experiences a net force of 10 N. Its acceleration is:", c: ["2 m/s²","5 m/s²","10 m/s²","20 m/s²"], a: 1 },
      ],
      medium: [
        { q: "A 5 kg block on a frictionless table is pulled by a 20 N horizontal force. Its acceleration is:", c: ["1 m/s²","2 m/s²","4 m/s²","5 m/s²"], a: 2 },
        { q: "A box rests on a horizontal floor. The normal force on the box equals:", c: ["The weight of the box","Always zero","The applied force","The frictional force"], a: 0 },
        { q: "If kinetic friction coefficient is 0.2 between a 10 kg block and the floor, the friction force as it slides is approximately:", c: ["2 N","20 N","98 N","19.6 N"], a: 3 },
        { q: "On a frictionless inclined plane at angle θ, the acceleration of a sliding block is:", c: ["g","g sin θ","g cos θ","g tan θ"], a: 1 },
        { q: "Which best describes inertia?", c: ["The tendency of an object to remain at rest or in uniform motion","The amount of friction","Force divided by mass","Acceleration multiplied by mass"], a: 0 },
      ],
      hard: [
        { q: "Two blocks (3 kg and 5 kg) are connected by a string over a frictionless pulley (Atwood machine). The acceleration of the system is approximately:", c: ["2.45 m/s²","4.9 m/s²","9.8 m/s²","1.0 m/s²"], a: 0 },
        { q: "A 10 kg block slides down a 30° frictionless incline. The acceleration is approximately:", c: ["4.9 m/s²","8.5 m/s²","9.8 m/s²","2.5 m/s²"], a: 0 },
        { q: "An elevator accelerates upward at 2 m/s². A 60 kg person inside reads what apparent weight on a scale? (g = 9.8 m/s²)", c: ["468 N","588 N","708 N","720 N"], a: 2 },
        { q: "Two boxes in contact (3 kg and 2 kg) are pushed across a frictionless surface by a 10 N force on the 3 kg box. The contact force between them is:", c: ["2 N","4 N","6 N","10 N"], a: 1 },
        { q: "A car moves in a circle on a flat road. The centripetal force is provided by:", c: ["The car's weight","Static friction between tires and road","The normal force","The engine's thrust"], a: 1 },
      ],
    },
    {
      id: 'wep',
      name: 'Unit 3: Work, Energy, and Power',
      icon: '⚡',
      easy: [
        { q: "The SI unit of work and energy is the:", c: ["Watt","Newton","Joule","Pascal"], a: 2 },
        { q: "Kinetic energy is given by:", c: ["mv","½mv²","mgh","½kx²"], a: 1 },
        { q: "Gravitational potential energy near Earth's surface is approximately:", c: ["½mv²","mgh","½kx²","mg/h"], a: 1 },
        { q: "Power is best defined as:", c: ["Work per unit time","Force times distance","Energy times time","Mass times acceleration"], a: 0 },
        { q: "Work done by a constant force is:", c: ["F · d (force times displacement along the force)","Fm","½Fd²","F/d"], a: 0 },
      ],
      medium: [
        { q: "A 2 kg object moves at 3 m/s. Its kinetic energy is:", c: ["3 J","6 J","9 J","18 J"], a: 2 },
        { q: "A 5 kg object is lifted 4 m. The work done against gravity is approximately:", c: ["20 J","49 J","100 J","196 J"], a: 3 },
        { q: "A spring with k = 200 N/m is compressed 0.10 m. The energy stored is:", c: ["1 J","2 J","10 J","20 J"], a: 0 },
        { q: "An engine provides 1000 J of work in 5 s. Its power output is:", c: ["50 W","200 W","1000 W","5000 W"], a: 1 },
        { q: "If you double the speed of a moving object, its kinetic energy:", c: ["Doubles","Quadruples","Halves","Stays the same"], a: 1 },
      ],
      hard: [
        { q: "A 1 kg ball dropped from 10 m hits the ground with speed (no air resistance, g = 10 m/s²):", c: ["10 m/s","14.1 m/s","20 m/s","100 m/s"], a: 1 },
        { q: "A 2 kg block slides 5 m across a floor with friction coefficient 0.3. The work done by friction is approximately:", c: ["−3 J","−15 J","−29.4 J","−98 J"], a: 2 },
        { q: "A roller coaster car of mass m starts from rest at height h. Ignoring friction, its speed at the bottom is:", c: ["√(gh)","√(2gh)","2√(gh)","gh"], a: 1 },
        { q: "If a 0.5 kg ball is launched from a spring (k = 400 N/m) compressed 0.2 m, its launch speed (no friction) is:", c: ["2 m/s","4 m/s","5.7 m/s","8 m/s"], a: 2 },
        { q: "Work-energy theorem states that:", c: ["Net work equals change in kinetic energy","Work equals momentum change","Energy is always conserved in a closed system","Power equals force times velocity squared"], a: 0 },
      ],
    },
    {
      id: 'mom',
      name: 'Unit 4: Linear Momentum',
      icon: '🎱',
      easy: [
        { q: "Linear momentum is given by:", c: ["mv","mv²","½mv²","ma"], a: 0 },
        { q: "Impulse is defined as:", c: ["Force times time","Mass times velocity","Force times distance","Mass times acceleration"], a: 0 },
        { q: "The SI unit of momentum is:", c: ["N","J","kg·m/s","W"], a: 2 },
        { q: "In an isolated system, total momentum is:", c: ["Always increasing","Always decreasing","Conserved","Equal to total energy"], a: 2 },
        { q: "An elastic collision conserves:", c: ["Only momentum","Only kinetic energy","Both momentum and kinetic energy","Neither"], a: 2 },
      ],
      medium: [
        { q: "A 2 kg object moving at 3 m/s has momentum:", c: ["3 kg·m/s","5 kg·m/s","6 kg·m/s","12 kg·m/s"], a: 2 },
        { q: "A 0.1 kg ball reverses from +20 m/s to −20 m/s on a wall. The impulse on the ball is:", c: ["+2 N·s","−2 N·s","−4 N·s","0"], a: 2 },
        { q: "In a perfectly inelastic collision, the colliding objects:", c: ["Stick together","Bounce off elastically","Lose all momentum","Gain kinetic energy"], a: 0 },
        { q: "A 4 kg cart at 2 m/s collides and sticks to a 2 kg cart at rest. The combined velocity is approximately:", c: ["1.0 m/s","1.33 m/s","2.0 m/s","3.0 m/s"], a: 1 },
        { q: "A 0.5 kg ball is hit by a 10 N force for 0.2 s. Its change in velocity is:", c: ["1 m/s","2 m/s","4 m/s","5 m/s"], a: 2 },
      ],
      hard: [
        { q: "A 1500 kg car moving at 20 m/s collides head-on and sticks to a 1000 kg car moving at 10 m/s in the opposite direction. The combined velocity is:", c: ["8 m/s in the heavier car's original direction","12 m/s","6 m/s in the lighter car's original direction","Zero"], a: 0 },
        { q: "Which is true of a collision in which kinetic energy decreases?", c: ["Momentum is not conserved","Some KE is converted to other forms but momentum is conserved","Both KE and momentum are lost","KE increases instead"], a: 1 },
        { q: "Why do airbags reduce injury in a car crash?", c: ["They reduce the change in momentum","They increase the time of impact, lowering the average force","They convert momentum into heat","They increase the force on the passenger"], a: 1 },
        { q: "A 60 kg ice skater pushes off a 40 kg skater. If the 40 kg skater moves at 3 m/s, the 60 kg skater moves at:", c: ["1 m/s","2 m/s","3 m/s","4.5 m/s"], a: 1 },
        { q: "A force vs time graph shows the area under the curve representing:", c: ["Work done","Impulse delivered","Energy gained","Acceleration"], a: 1 },
      ],
    },
    {
      id: 'rot',
      name: 'Unit 5: Torque and Rotational Dynamics',
      icon: '🌀',
      easy: [
        { q: "Torque is best defined as:", c: ["Force times perpendicular lever arm","Force times time","Mass times angular velocity","Moment of inertia times angular velocity"], a: 0 },
        { q: "The rotational analog of mass is:", c: ["Angular velocity","Moment of inertia","Torque","Angular momentum"], a: 1 },
        { q: "The rotational form of Newton's second law is:", c: ["F = ma","τ = Iα","p = mv","KE = ½mv²"], a: 1 },
        { q: "The SI unit of torque is:", c: ["N·m","J","kg·m²","N/s"], a: 0 },
        { q: "An object in rotational equilibrium has:", c: ["Zero net force","Zero net torque","Zero angular momentum","Maximum kinetic energy"], a: 1 },
      ],
      medium: [
        { q: "A force of 10 N applied perpendicular at 0.5 m from a pivot produces a torque of:", c: ["2 N·m","5 N·m","10 N·m","20 N·m"], a: 1 },
        { q: "A wheel with I = 2 kg·m² has α = 3 rad/s². The torque on it is:", c: ["1.5 N·m","2 N·m","6 N·m","9 N·m"], a: 2 },
        { q: "Doubling the distance from the pivot (with the same perpendicular force) changes the torque by a factor of:", c: ["½","1","2","4"], a: 2 },
        { q: "Which has the greatest moment of inertia about its center for the same mass and radius?", c: ["Solid sphere","Solid cylinder","Hoop (thin ring)","Disk"], a: 2 },
        { q: "A meter stick is pivoted at one end. Where should a force be applied perpendicular to the stick to produce maximum torque about the pivot?", c: ["At the pivot","Halfway along","At the far end","Anywhere — the location doesn't matter"], a: 2 },
      ],
      hard: [
        { q: "Two children sit on a seesaw. A 30 kg child sits 2 m from the pivot. To balance, a 40 kg child must sit at:", c: ["1 m","1.5 m","2 m","2.5 m"], a: 1 },
        { q: "A uniform 4 m beam of weight 100 N is supported at its ends. A 200 N weight rests 1 m from the left support. The force on the right support is:", c: ["50 N","75 N","100 N","150 N"], a: 2 },
        { q: "A door is most easily opened when a force is applied:", c: ["At the hinge along the door","Perpendicular to the door at the handle (far from the hinge)","Parallel to the door","Toward the hinge from the handle"], a: 1 },
        { q: "A wheel starts at rest with constant angular acceleration α = 2 rad/s². After 5 s its angular velocity is:", c: ["5 rad/s","10 rad/s","20 rad/s","25 rad/s"], a: 1 },
        { q: "Which best describes the relationship between linear and angular quantities for a point at radius r on a rigid rotating body?", c: ["v = ωr; a_t = αr","v = ω/r","a_t = ω²/r","ω = vr"], a: 0 },
      ],
    },
    {
      id: 'rote',
      name: 'Unit 6: Energy and Momentum of Rotating Systems',
      icon: '🎡',
      easy: [
        { q: "Rotational kinetic energy is given by:", c: ["½mv²","½Iω²","Iω","mgh"], a: 1 },
        { q: "Angular momentum L is given by:", c: ["Iω","Iα","mv","½Iω²"], a: 0 },
        { q: "The SI unit of angular momentum is:", c: ["N·m","kg·m²/s","J·s/rad","Both kg·m²/s and J·s are valid"], a: 3 },
        { q: "Angular momentum of an isolated system is:", c: ["Always increasing","Always decreasing","Conserved when no external torque acts","Equal to its kinetic energy"], a: 2 },
        { q: "If a rotating skater pulls in her arms, her angular velocity:", c: ["Decreases","Stays the same","Increases","Becomes zero"], a: 2 },
      ],
      medium: [
        { q: "A wheel with I = 4 kg·m² spins at 3 rad/s. Its rotational kinetic energy is:", c: ["6 J","12 J","18 J","36 J"], a: 2 },
        { q: "A figure skater pulls in her arms, halving her moment of inertia. Her angular velocity:", c: ["Halves","Doubles","Stays the same","Quadruples"], a: 1 },
        { q: "When the skater in the previous question pulls in her arms, her rotational kinetic energy:", c: ["Halves","Doubles","Stays the same","Becomes zero"], a: 1 },
        { q: "A solid disk (I = ½mr²) of mass 2 kg and radius 0.5 m rolls without slipping at 4 m/s. Its total kinetic energy is:", c: ["8 J","16 J","24 J","32 J"], a: 2 },
        { q: "Angular impulse equals:", c: ["Torque times time","Force times distance","Moment of inertia times angular velocity","Force times angular velocity"], a: 0 },
      ],
      hard: [
        { q: "A solid sphere and a hoop of equal mass and radius roll without slipping down the same incline from rest. Which reaches the bottom first?", c: ["The sphere","The hoop","They tie","Cannot be determined without friction"], a: 0 },
        { q: "A 1 kg point mass moves in a circle of radius 2 m at 3 m/s. Its angular momentum about the center is:", c: ["3 kg·m²/s","6 kg·m²/s","12 kg·m²/s","18 kg·m²/s"], a: 1 },
        { q: "When a planet moves in an elliptical orbit, which is conserved?", c: ["Linear momentum and kinetic energy","Angular momentum (about the focus) and total mechanical energy","Speed only","Angular velocity"], a: 1 },
        { q: "Two disks (I₁ = 2 kg·m², I₂ = 4 kg·m²) rotate independently at 6 rad/s and 0 rad/s. They couple. The final angular velocity is:", c: ["1 rad/s","2 rad/s","3 rad/s","4 rad/s"], a: 1 },
        { q: "For an object rolling without slipping, the relation between linear speed v and angular speed ω about the center of mass is:", c: ["v = ω","v = ωr","v = ω²r","v = r/ω"], a: 1 },
      ],
    },
    {
      id: 'osc',
      name: 'Unit 7: Oscillations',
      icon: '🪀',
      easy: [
        { q: "Simple harmonic motion (SHM) requires a restoring force that is:", c: ["Constant","Proportional to displacement, opposite in direction","Proportional to velocity","Independent of position"], a: 1 },
        { q: "The period T of a mass-spring system is given by:", c: ["2π√(m/k)","2π√(k/m)","2π√(L/g)","2π/(mω)"], a: 0 },
        { q: "The period of a simple pendulum (small angle) is:", c: ["2π√(m/k)","2π√(L/g)","2π√(g/L)","2π/(mω)"], a: 1 },
        { q: "Frequency f and period T are related by:", c: ["f = T","f = 1/T","f = 2πT","f = T²"], a: 1 },
        { q: "Which doubles when amplitude doubles in simple harmonic motion?", c: ["Period","Frequency","Maximum speed","Mass"], a: 2 },
      ],
      medium: [
        { q: "A 0.5 kg mass on a spring (k = 200 N/m) oscillates. Its angular frequency ω is:", c: ["10 rad/s","14.1 rad/s","20 rad/s","100 rad/s"], a: 2 },
        { q: "A pendulum of length 1 m on Earth has period approximately:", c: ["0.5 s","1 s","2 s","4 s"], a: 2 },
        { q: "If the length of a simple pendulum is quadrupled, its period:", c: ["Halves","Stays the same","Doubles","Quadruples"], a: 2 },
        { q: "Maximum speed of a SHM oscillator with amplitude A and angular frequency ω is:", c: ["ωA","ω²A","A/ω","ω/A"], a: 0 },
        { q: "Which combination changes the period of a mass-spring system?", c: ["Changing the amplitude","Changing the spring constant","Changing the gravitational field","Changing the surface friction"], a: 1 },
      ],
      hard: [
        { q: "Total mechanical energy of a mass-spring SHM system with amplitude A is:", c: ["½kA","½kA²","kA²","2kA²"], a: 1 },
        { q: "At what point in a SHM cycle is kinetic energy maximum?", c: ["At maximum displacement","At equilibrium (zero displacement)","At one-quarter of the period","Halfway between equilibrium and amplitude"], a: 1 },
        { q: "If you double the mass of a mass-spring oscillator, the period changes by a factor of:", c: ["½","1/√2","√2","2"], a: 2 },
        { q: "A pendulum is taken to a planet where gravity is one-quarter that of Earth. Its period (vs. on Earth):", c: ["Halves","Stays the same","Doubles","Quadruples"], a: 2 },
        { q: "Which is NOT generally true of damped oscillations?", c: ["Amplitude decreases over time","Energy decreases over time","Period equals the undamped period exactly","Mechanical energy is converted to other forms"], a: 2 },
      ],
    },
    {
      id: 'flu',
      name: 'Unit 8: Fluids',
      icon: '💧',
      easy: [
        { q: "Density is defined as:", c: ["Mass per unit volume","Force per unit area","Weight per unit length","Volume per unit mass"], a: 0 },
        { q: "Pressure is defined as:", c: ["Force per unit area","Mass per unit volume","Energy per unit mass","Force times distance"], a: 0 },
        { q: "The buoyant force on a submerged object equals:", c: ["The weight of the object","The weight of the fluid displaced","The mass of the object","The volume of the fluid"], a: 1 },
        { q: "The SI unit of pressure is the:", c: ["Newton","Joule","Pascal","Watt"], a: 2 },
        { q: "Atmospheric pressure at sea level is approximately:", c: ["1 Pa","100 Pa","1000 Pa","10⁵ Pa"], a: 3 },
      ],
      medium: [
        { q: "A 2 m³ object has a mass of 600 kg. Its density is:", c: ["200 kg/m³","300 kg/m³","600 kg/m³","1200 kg/m³"], a: 1 },
        { q: "Pressure at depth h in a fluid of density ρ (relative to surface) is:", c: ["ρg","ρgh","ρh/g","ρ/(gh)"], a: 1 },
        { q: "An object floats in water if its density is:", c: ["Greater than water's","Less than water's","Equal to water's","Doesn't depend on density"], a: 1 },
        { q: "A hydraulic press uses:", c: ["Bernoulli's principle","Pascal's principle","Archimedes' principle","Continuity"], a: 1 },
        { q: "Bernoulli's principle implies that, along a streamline, where fluid speed is higher, pressure is:", c: ["Higher","Lower","The same","Zero"], a: 1 },
      ],
      hard: [
        { q: "A 0.10 m³ block of density 600 kg/m³ floats in water (1000 kg/m³). The fraction submerged is:", c: ["0.4","0.5","0.6","1.0"], a: 2 },
        { q: "The continuity equation for an incompressible fluid states:", c: ["A₁v₁ = A₂v₂","P₁ = P₂","ρ₁ = ρ₂","A₁/v₁ = A₂/v₂"], a: 0 },
        { q: "Water flows through a pipe whose cross-sectional area decreases by half. The fluid speed:", c: ["Halves","Stays the same","Doubles","Quadruples"], a: 2 },
        { q: "Pressure at 10 m depth in water (ρ = 1000 kg/m³) above atmospheric pressure is approximately:", c: ["10⁴ Pa","10⁵ Pa","10⁶ Pa","10⁷ Pa"], a: 1 },
        { q: "A rock with weight 50 N in air weighs 30 N when fully submerged in water. The buoyant force on the rock is:", c: ["20 N","30 N","50 N","80 N"], a: 0 },
      ],
    },
  ],
};

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { motion, type MotionValue, useInView, useScroll, useTransform } from 'framer-motion';
import type { Group } from 'three';
import { softwareIcons, type SoftwareIcon } from './icons';
import './SoftwareOrbit.css';

interface OrbitSceneProps {
  icons: SoftwareIcon[];
  active: boolean;
  rotationSpeed: MotionValue<number>;
}

function OrbitScene({ icons, active, rotationSpeed }: OrbitSceneProps) {
  const orbitRef = useRef<Group>(null);
  const total = icons.length;
  const radius = 2.15;

  useFrame(() => {
    if (!active || !orbitRef.current) return;
    orbitRef.current.rotation.y += rotationSpeed.get();
    orbitRef.current.rotation.x = Math.sin(orbitRef.current.rotation.y * 0.7) * 0.1;
  });

  return (
    <group ref={orbitRef}>
      {icons.map((software, index) => {
        const angle = (index / total) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const z = Math.sin(angle * 1.35) * 0.72;

        return (
          <Html key={software.name} position={[x, y, z]} center transform distanceFactor={4.8} zIndexRange={[4, 1]}>
            <motion.div
              className="software-item"
              initial={{ x: software.initial.x, y: software.initial.y, rotate: software.initial.rotate, opacity: 0, scale: 0.8 }}
              animate={active ? { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 } : undefined}
              transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.05 + index * 0.075 }}
            >
              <div className="software-item-card">
                <img src={software.icon} alt={`${software.name} logo`} width="64" height="64" draggable="false" />
                <span>{software.name}</span>
              </div>
            </motion.div>
          </Html>
        );
      })}
    </group>
  );
}

export default function SoftwareOrbit() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-18% 0px -18% 0px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const speed = useTransform(scrollYProgress, [0, 0.28, 1], [0, 0.003, 0.004]);

  return (
    <section className="software-orbit-section" ref={sectionRef} id="software-orbit">
      <div className="software-orbit-inner">
        <motion.div
          className="software-orbit-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Software Orbit</p>
          <h2>Tools that rotate around the work, not the other way around.</h2>
          <p>
            A 3D orbit of the software stack Dimas uses across engineering, editing, coding, simulation, and automation.
          </p>
        </motion.div>

        <div className="software-orbit-stage">
          <div className="software-orbit-canvas">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
              <ambientLight intensity={1.4} />
              <OrbitScene icons={softwareIcons} active={inView} rotationSpeed={speed} />
            </Canvas>
          </div>

          <div className="software-photo-wrap" aria-label="Dimas photo placeholder">
            <div className="software-photo-glow" />
            <img className="software-photo" src="/foto.png" alt="Dimas placeholder portrait" width="220" height="220" />
          </div>
        </div>
      </div>
    </section>
  );
}

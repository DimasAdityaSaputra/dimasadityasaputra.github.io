import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, Code2, Cpu, Layers3, Mail, Play, Sparkles, Wrench } from 'lucide-react';
import Lanyard from './components/Lanyard';
import InfiniteMenu, { type InfiniteMenuItem } from './components/InfiniteMenu';
import SoftwareOrbit from './components/SoftwareOrbit/SoftwareOrbit';
import './styles.css';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-90px' },
  transition: { duration: 0.65 },
};

const skills = [
  { icon: Cpu, title: 'Engineering Mindset', text: 'Electrical fundamentals, troubleshooting, hardware curiosity, and practical problem solving.' },
  { icon: Code2, title: 'Code & Automation', text: 'Python, Linux/WSL, GitHub workflows, scripting, web experiments, and small internal tools.' },
  { icon: Play, title: 'Creative Production', text: 'After Effects, DaVinci Resolve, Blender, Unreal Engine, AMV edits, plugins, and render workflows.' },
  { icon: Sparkles, title: 'AI Workflow', text: 'OpenClaw, Claude Code, AI-assisted coding, prompt workflows, and automation systems.' },
];

const projects = [
  { meta: 'AI Web App', title: 'RoastMyCV', text: 'A CV feedback app with AI analysis, deterministic scoring, dashboard history, and Supabase auth.', status: 'Built / iterating' },
  { meta: 'Workflow Lab', title: 'OpenClaw + Claude', text: 'Experiments around agentic workflows, coding assistance, reminders, and practical automation.', status: 'In progress' },
  { meta: 'Creative Lab', title: 'Editing & VFX Experiments', text: 'Heavy editing, motion graphics, color, effects, plugin stacks, and render pipeline exploration.', status: 'Collecting work' },
];

const photoItems: InfiniteMenuItem[] = [
  { image: '/project-photos/project-01.svg', link: '#projects', title: 'Project Photo 01', description: 'Replace this placeholder with your first project photo.' },
  { image: '/project-photos/project-02.svg', link: '#projects', title: 'Project Photo 02', description: 'Replace this placeholder with your second project photo.' },
  { image: '/project-photos/project-03.svg', link: '#projects', title: 'Project Photo 03', description: 'Replace this placeholder with your third project photo.' },
  { image: '/project-photos/project-04.svg', link: '#projects', title: 'Project Photo 04', description: 'Replace this placeholder with your fourth project photo.' },
];

const metrics = [
  ['Focus', 'Creative automation'],
  ['Base', 'Indonesia · GMT+7'],
  ['Status', 'Fresh graduate'],
];

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page-shell">
        <header className="site-header" aria-label="Primary navigation">
          <nav className="nav shell">
            <a className="brand" href="#top" aria-label="Dimas Aditya Saputra home">
              <span className="brand-mark">DA</span>
              <span>Dimas Aditya</span>
            </a>
            <div className="nav-links" aria-label="Page sections">
              <a href="#about">About</a>
              <a href="#skills">Stack</a>
              <a href="#projects">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </header>

        <main id="main">
          <section className="hero shell" id="top">
            <motion.div className="hero-copy" {...fadeUp}>
              <div className="availability-pill"><BadgeCheck size={16} /> Available to learn, build, and ship</div>
              <p className="eyebrow">Engineering · Creative Systems · AI Workflow</p>
              <h1>Professional portfolio for a builder who learns by making real things.</h1>
              <p className="hero-text">
                I’m Dimas Aditya Saputra, an Industrial Electrical Engineering fresh graduate focused on practical engineering,
                automation, creative production, and AI-assisted workflows. Clean execution first, noise later.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="btn btn-primary" href="#projects">Explore work <ArrowUpRight size={18} /></a>
                <a className="btn btn-secondary" href="https://github.com/DimasAdityaSaputra" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
              </div>
              <div className="metric-row" aria-label="Quick profile facts">
                {metrics.map(([label, value]) => (
                  <div className="metric-card" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} aria-label="Interactive 3D lanyard profile card">
              <div className="visual-panel">
                <div className="panel-kicker">Interactive ID Card</div>
                <div className="panel-title">Drag the lanyard</div>
              </div>
              <Lanyard position={[0, 0, 22]} gravity={[0, -40, 0]} />
            </motion.div>
          </section>

          <motion.section className="section shell split" id="about" {...fadeUp}>
            <div className="section-intro">
              <p className="eyebrow">About</p>
              <h2>Calm interface, practical brain, slightly dangerous curiosity.</h2>
            </div>
            <div className="content-card about-card">
              <p>
                I graduated from SMK majoring in Industrial Electrical Engineering. My current lane combines engineering fundamentals,
                Linux/WSL workflows, Python automation, creative software, and AI tooling.
              </p>
              <p>
                This site is the base layer: polished enough to share, flexible enough to keep expanding as projects, edits, experiments,
                and proof-of-work arrive.
              </p>
            </div>
          </motion.section>

          <section className="section shell" id="skills">
            <motion.div className="section-heading" {...fadeUp}>
              <p className="eyebrow">Stack</p>
              <h2>Tools and instincts I use to turn messy ideas into working output.</h2>
            </motion.div>
            <div className="skill-grid">
              {skills.map(({ icon: Icon, title, text }, index) => (
                <motion.article className="content-card skill-card" key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                  <div className="icon-box"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="section shell" id="projects">
            <motion.div className="section-heading wide" {...fadeUp}>
              <p className="eyebrow">Selected work</p>
              <h2>Project cards for the work that exists now, with room for the better receipts later.</h2>
            </motion.div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <motion.article className={`content-card project-card ${index === 0 ? 'featured' : ''}`} key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="project-topline">
                    <span>{project.meta}</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="project-status">{project.status}</div>
                </motion.article>
              ))}
            </div>
          </section>

          <SoftwareOrbit />

          <section className="section shell" id="project-photos">
            <motion.div className="section-heading wide" {...fadeUp}>
              <p className="eyebrow">Project photos</p>
              <h2>Four rotating project visuals. Drop your real photos into the folder later.</h2>
            </motion.div>
            <motion.div className="photo-menu-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="photo-menu-note">
                <Layers3 size={18} />
                <span>Folder: <code>public/project-photos/</code></span>
              </div>
              <InfiniteMenu items={photoItems} scale={1.05} />
            </motion.div>
          </section>

          <motion.section className="section shell contact-section" id="contact" {...fadeUp}>
            <div className="content-card contact-card">
              <div className="contact-icon"><Wrench size={28} /></div>
              <p className="eyebrow">Contact</p>
              <h2>Need someone practical for a project, internship, or technical rabbit hole?</h2>
              <p>Start with GitHub. More contact links and finished work will be added as the portfolio grows.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://github.com/DimasAdityaSaputra" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub profile</a>
                <a className="btn btn-secondary" href="mailto:dimasadityasaputra@example.com"><Mail size={18} /> Email placeholder</a>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

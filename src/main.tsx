import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './components/Lanyard';
import './styles.css';

const skills = [
  ['Engineering & Oprek', 'Electrical fundamentals, troubleshooting mindset, hardware curiosity, practical problem solving.'],
  ['Coding & Automation', 'Python, Linux/WSL, GitHub workflows, scripting, small tools, web experiments.'],
  ['Creative/VFX', 'After Effects, DaVinci Resolve, Blender, Unreal Engine, AMV-style editing, plugins and render workflows.'],
  ['AI Workflow', 'OpenClaw, Claude Code experiments, prompt workflows, local productivity systems, automation ideas.'],
];

const projects = [
  ['Web App · AI', 'RoastMyCV', 'A CV feedback web app experiment with AI analysis, scoring, dashboard history, and Supabase-backed auth.', 'Built / iterating'],
  ['Workflow · Automation', 'OpenClaw + Claude Workflow', 'Experiments around agent workflows, coding assistance, reminders, and practical automation.', 'In progress'],
  ['Creative · VFX', 'Editing / AMV Experiments', 'Heavy editing, motion graphics, plugins, color, effects, and render workflow exploration.', 'Collecting work'],
];

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" aria-label="Primary navigation">
        <nav className="nav shell">
          <a className="brand" href="#top" aria-label="Dimas Aditya Saputra home">
            <span className="brand-mark">DA</span>
            <span>Dimas</span>
          </a>
          <div className="nav-links" aria-label="Page sections">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero shell section" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Engineering · Creative Tech · AI Workflows</p>
            <h1>Building practical stuff from wires, code, edits, and controlled chaos.</h1>
            <p className="hero-text">
              I'm Dimas Aditya Saputra — an Industrial Electrical Engineering fresh graduate who likes oprek,
              automation, creative editing, and AI-assisted workflows. If it can be optimized, scripted, rendered,
              or abused into working better, I'm probably interested.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="btn btn-primary" href="#projects">View projects</a>
              <a className="btn btn-secondary" href="#contact">Contact me</a>
            </div>
            <dl className="quick-stats" aria-label="Quick profile facts">
              <div><dt>Focus</dt><dd>Automation + creative tech</dd></div>
              <div><dt>Base</dt><dd>Indonesia, GMT+7</dd></div>
              <div><dt>Mode</dt><dd>Learning by shipping</dd></div>
            </dl>
          </div>

          <div className="hero-visual" aria-label="Interactive 3D lanyard profile card">
            <div className="lanyard-backdrop" />
            <Lanyard position={[0, 0, 22]} gravity={[0, -40, 0]} />
          </div>
        </section>

        <section className="section shell split" id="about">
          <div>
            <p className="eyebrow">About</p>
            <h2>Fresh graduate, serial tinkerer, not allergic to terminals.</h2>
          </div>
          <div className="section-copy card">
            <p>
              I graduated from SMK majoring in Industrial Electrical Engineering. My interests sit between
              engineering, Linux/WSL workflows, Python automation, AI tools, and creative software like After Effects,
              DaVinci Resolve, Blender, and Unreal Engine.
            </p>
            <p>
              This portfolio is intentionally simple for now: a clean base to collect projects, experiments, and proof
              that the things I learn do not just rot in a notes app somewhere.
            </p>
          </div>
        </section>

        <section className="section shell" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Toolkit</p>
            <h2>Things I can break, fix, or at least investigate properly.</h2>
          </div>
          <div className="skill-grid">
            {skills.map(([title, text]) => (
              <article className="card skill-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Current experiments. More receipts coming soon.</h2>
          </div>
          <div className="project-grid">
            {projects.map(([meta, title, text, status], index) => (
              <article className={`card project-card ${index === 0 ? 'featured' : ''}`} key={title}>
                <div className="project-meta">{meta}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="project-status">{status}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell contact-section" id="contact">
          <div className="card contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Got a project, opportunity, or weird technical rabbit hole?</h2>
            <p>Reach me on GitHub for now. More links and finished work will be added as the portfolio grows.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://github.com/DimasAdityaSaputra" target="_blank" rel="noreferrer" aria-label="Open Dimas Aditya Saputra GitHub profile">GitHub profile</a>
              <a className="btn btn-secondary" href="mailto:dimasadityasaputra@example.com">Email placeholder</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

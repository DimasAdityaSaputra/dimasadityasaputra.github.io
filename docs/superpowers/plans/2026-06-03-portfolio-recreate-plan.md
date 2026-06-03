# Portfolio Recreate Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recreate Dimas Aditya Saputra's personal portfolio as a static GitHub Pages-ready website with a dark hybrid tech-professional design and CSS 3D lanyard/photo card.

**Architecture:** Single-page static site with semantic HTML, one focused stylesheet, and one small progressive-enhancement JavaScript file for lanyard tilt and active navigation. The page remains usable without JavaScript and respects reduced-motion preferences.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub Pages.

---

## File Structure

- Modify: `index.html` — semantic page structure and portfolio content.
- Modify: `style.css` — complete visual system, responsive layout, 3D lanyard, accessibility states.
- Create: `script.js` — optional pointer tilt and nav state enhancement.
- Modify: `README.md` — update project description and local preview instructions.

## Tasks

### Task 1: Recreate HTML structure

**Files:**
- Modify: `index.html`

- [ ] Replace the whole file with a semantic single-page portfolio containing header, hero, about, skills, projects, and contact sections.
- [ ] Include accessible labels for navigation and external links.
- [ ] Include `script.js` with `defer`.
- [ ] Use placeholder photo initials `DA` until Dimas provides a real photo.

### Task 2: Rebuild CSS visual system

**Files:**
- Modify: `style.css`

- [ ] Replace the whole file with dark hybrid tech-professional styling.
- [ ] Add responsive mobile-first layout.
- [ ] Add glass cards, background grid/noise, focus states, and button states.
- [ ] Add CSS-only 3D lanyard/photo card.
- [ ] Add `prefers-reduced-motion` handling.

### Task 3: Add progressive JavaScript

**Files:**
- Create: `script.js`

- [ ] Add pointer-based lanyard tilt on devices with fine pointer support.
- [ ] Add active nav highlighting via IntersectionObserver.
- [ ] Keep all features optional so the page works if JS fails.

### Task 4: Update README

**Files:**
- Modify: `README.md`

- [ ] Describe the portfolio.
- [ ] Add local preview command: `python3 -m http.server 4173`.
- [ ] Mention deployment via GitHub Pages.

### Task 5: Verify and commit

**Files:**
- Verify all modified files.

- [ ] Run a static server with `python3 -m http.server 4173`.
- [ ] Fetch the page locally with `curl -I http://127.0.0.1:4173/`.
- [ ] Check file references: `script.js` and `style.css` exist.
- [ ] Run `git diff --check`.
- [ ] Commit implementation locally.
- [ ] Ask Dimas before pushing to GitHub.

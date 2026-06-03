# Portfolio Recreate Design

## Goal
Recreate Dimas Aditya Saputra's personal portfolio as a lightweight static website in the existing `dimasadityasaputra.github.io` repository, ready for GitHub Pages.

## Chosen Approach
Use plain HTML, CSS, and minimal JavaScript.

Why:
- GitHub Pages can serve it directly without build tooling.
- Fast to load and easy to maintain.
- Enough for portfolio v1 while Dimas is still adding final content.
- Avoids Next.js/Vite overhead until the site needs dynamic project pages or heavier media.

## Visual Direction
Style: dark hybrid tech-professional.

The site should feel technical, creative, and employable without looking like a generic corporate template. Use a graphite/black base, cyan-blue accents, glass cards, soft grid/noise background, and restrained motion.

Avoid:
- Overused motivational copy.
- Fake startup buzzwords.
- Emoji-heavy UI.
- Template-looking “passionate lifelong learner” filler.

## Page Structure
Single-page portfolio:

1. Header
   - Dimas name/logo text.
   - Navigation links: About, Skills, Projects, Contact.
   - Primary CTA to contact or GitHub.

2. Hero
   - Short intro: Dimas as engineering/creative tech/AI workflow focused.
   - Practical headline around building, editing, automating, and tinkering.
   - CTA buttons: View Projects, Contact.
   - Right side: CSS-based 3D lanyard/photo-card mockup.

3. About
   - Short honest summary: SMK Teknik Elektro Industri fresh graduate, likes engineering, oprek, coding workflows, VFX/editing, AI tooling.

4. Skills / Toolkit
   - Grouped chips/cards for:
     - Engineering & tinkering
     - Coding & automation
     - Creative/VFX tools
     - AI workflow tools

5. Projects
   - Placeholder project cards that can be replaced later.
   - Initial cards may include OpenClaw/Claude workflow experiments, RoastMyCV, editing/VFX experiments, automation scripts.

6. Contact
   - GitHub link.
   - Email/contact placeholder if unknown.
   - Short line saying more work will be added soon.

## 3D Lanyard Photo Card
Implement a CSS-only 3D lanyard mockup for v1:
- Suspended strap/lanyard shape.
- ID/photo card with placeholder initials or gradient avatar until Dimas provides a real photo.
- Subtle tilt/parallax on pointer movement when JavaScript is available.
- Static fallback if JavaScript is disabled.
- Respect `prefers-reduced-motion`.

## UX and Accessibility
- Mobile-first responsive layout.
- No horizontal scrolling.
- Body text minimum 16px.
- Good color contrast on dark background.
- Visible focus states.
- Semantic HTML sections and headings.
- Buttons/links have clear labels.
- Motion is subtle and disabled for reduced-motion users.

## Technical Scope
Files to recreate:
- `index.html`
- `style.css`
- optional `script.js`
- update `README.md` if needed

No build step. No package manager required.

## Verification
Before claiming completion:
- Run a local static server and inspect the page.
- Check for broken links/assets.
- Run basic HTML/CSS sanity checks where available.
- Confirm git diff is clean and intentional.

## GitHub Upload
After implementation and local verification:
- Commit changes locally.
- Ask Dimas before pushing to GitHub.
- Push only after explicit confirmation.

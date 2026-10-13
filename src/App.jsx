import Flow from "./components/Flow.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import { PROFILE } from "./data.js";

export default function App() {
  return (
    <>
      <div className="wrap">
        <nav>
          <a className="logo" href="#top">{PROFILE.name}</a>
          <ul>
            <li><a href="#stack">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <header className="hero" id="top">
          <h1>{PROFILE.name}</h1>
          <div className="role">{PROFILE.role}</div>
          <p>{PROFILE.intro}</p>
          <div className="btns">
            <a className="btn fill" href="#projects">See my projects</a>
            <a className="btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">Open GitHub</a>
          </div>
        </header>

        <section id="stack">
          <h2>One request, four layers</h2>
          <p className="lead">Select a layer to see the tools I use there.</p>
          <Flow />
        </section>

        <Experience />
        <Projects />

        <section id="contact" className="contact">
          <h2>Let's build something</h2>
          <p className="lead">Email or call me, or find my work on LinkedIn and GitHub.</p>
          <div className="btns">
            <a className="btn fill" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <a className="btn" href={`tel:${PROFILE.phoneLink}`}>{PROFILE.phone}</a>
            <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </div>
      <footer>
        <div className="wrap">{PROFILE.name}, full stack and AI engineer. Built with React.</div>
      </footer>
    </>
  );
}

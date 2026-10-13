import { PROJECTS } from "../data.js";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="plist">
        {PROJECTS.map((p) => (
          <a key={p.url} className="proj" href={p.url} target="_blank" rel="noopener noreferrer">
            <h3>{p.title}</h3>
            <span className="url">{p.url.replace("https://", "")}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

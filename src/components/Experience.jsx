import { JOB } from "../data.js";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <p className="lead">Shipping software for banks, where accuracy and security come first.</p>
      <article className="job">
        <div className="who">
          <h3>{JOB.role}</h3>
          <span className="co">{JOB.company}</span>
          <span className="meta">{JOB.domain}</span>
          <span className="tenure">{JOB.tenure}</span>
        </div>
        <div>
          <ul className="points">
            {JOB.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <ul className="chips">
            {JOB.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

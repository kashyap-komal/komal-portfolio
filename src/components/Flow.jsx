import { useState } from "react";
import { LAYERS } from "../data.js";

export default function Flow() {
  const [active, setActive] = useState("ui");
  const layer = LAYERS.find((l) => l.id === active);

  return (
    <div>
      <div className="flow">
        <span className="pulse" aria-hidden="true" />
        {LAYERS.map((l) => (
          <button
            key={l.id}
            className="node"
            aria-pressed={active === l.id}
            onClick={() => setActive(l.id)}
          >
            <strong>{l.name}</strong>
            <span>{l.sub}</span>
          </button>
        ))}
      </div>
      <div className="panel" aria-live="polite">
        <p>{layer.text}</p>
        <ul className="chips">
          {layer.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

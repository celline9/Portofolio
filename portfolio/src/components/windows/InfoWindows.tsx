import { journey, profile, toolkit } from '../../data/profile';
import { projects } from '../../data/projects';
import type { WindowId } from '../../types';

export const About = () => (
  <>
    {profile.bio.map((text) => (
      <p key={text}>{text}</p>
    ))}
  </>
);

export const Journey = () => (
  <ol className="timeline">
    {journey.map((milestone) => (
      <li key={milestone.title} className={milestone.kind}>
        <small>{milestone.when}</small>
        <b>{milestone.title}</b>
        <p>{milestone.note}</p>
      </li>
    ))}
  </ol>
);

export const Toolkit = () => (
  <>
    {Object.entries(toolkit).map(([group, items]) => (
      <section key={group}>
        <h4>{group}</h4>
        <div className="chips">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    ))}
  </>
);

export const Projects = ({ onOpen }: { onOpen: (id: WindowId) => void }) => (
  <ul className="list">
    {projects.map((project) => (
      <li key={project.id}>
        <button onClick={() => onOpen(`project:${project.id}`)}>
          <b>{project.file}</b>
          <span>{project.name}</span>
        </button>
      </li>
    ))}
  </ul>
);

export const Contact = () => (
  <>
    <p>Open to data analyst roles. Email is the easiest way to reach me.</p>
    <p>
      <code>{profile.email}</code>
    </p>
    <div className="actions">
      <a className="btn primary" href={`mailto:${profile.email}`}>
        Email me
      </a>
      <a
        className="btn"
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>
      <a
        className="btn"
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
    </div>
  </>
);
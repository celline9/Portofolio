import type { Project } from '../../types';

export const ProjectWindow = ({ project }: { project: Project }) => (
  <article>
    <small className="eyebrow">{project.stack}</small>
    <h2>{project.name}</h2>
    <p>{project.intro}</p>

    <div className="kpis">
      {project.kpis.map((kpi) => (
        <div key={kpi.label}>
          <b>{kpi.value}</b>
          <span>{kpi.label}</span>
        </div>
      ))}
    </div>

    <div className="chips">
      {project.tools.map((tool) => (
        <span key={tool}>{tool}</span>
      ))}
    </div>

    <div className="download-btn-footer">
      {project.download && (
        <a
          className="download-btn"
          href={project.download} download>
          Download ↓
      </a>
      )
    }
    </div>
      

    <div className="actions">
      {project.app && (
        <a
          className="btn primary"
          href={project.app}
          target="_blank"
          rel="noopener noreferrer"
        >
          Try the app ↗
        </a>
      )}
      {project.repo && (
        <a
          className="btn"
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      )}
    </div>
  </article>
);
import type { Project } from '../types';
export const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => (
  <button className="card" onClick={onOpen}>
    <small>{project.stack}</small>
    <h3>{project.name}</h3>
    <p>{project.question}</p>
    <code>{project.file}</code>
  </button>
);

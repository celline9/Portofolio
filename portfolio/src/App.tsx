import type { ReactNode } from 'react';
import { DesktopIcons } from './components/DesktopIcons';
import { Dock } from './components/Dock';
import { ProjectCard } from './components/ProjectCard';
import { TopBar } from './components/TopBar';
import { Window } from './components/Window';
import {
  About,
  Contact,
  Journey,
  Projects,
  Toolkit,
} from './components/windows/InfoWindows';
import { ProjectWindow } from './components/windows/ProjectWindow';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { useWindows } from './hooks/useWindows';
import type { WindowId } from './types';

type WindowContent = {
  title: string;
  node: ReactNode;
  wide?: boolean;
};

export default function App() {
  const { wins, open, focus, move, close } = useWindows();

  const resolve = (id: WindowId): WindowContent => {
    if (id.startsWith('project:')) {
      const project = projects.find((p) => `project:${p.id}` === id)!;
      return { title: project.file, node: <ProjectWindow project={project} />, wide: true };
    }

    const windowMap: Record<string, WindowContent> = {
      about: { title: 'hello.txt', node: <About /> },
      journey: { title: 'journey', node: <Journey /> },
      toolkit: { title: 'toolkit', node: <Toolkit /> },
      contact: { title: 'say_hi', node: <Contact /> },
      projects: { title: 'projects', node: <Projects onOpen={open} /> },
    };

    return windowMap[id];
  };

  return (
    <>
      <TopBar />
      <DesktopIcons onOpen={open} />

      <main className="hero">
        <p className="role">{profile.role}</p>
        <h1>
          {profile.first}
          <span>.</span>
        </h1>
        <p className="lead">
          I check whether the numbers add up, then build the tools to prove it.
        </p>

        <div className="grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => open(`project:${project.id}`)}
            />
          ))}
        </div>
      </main>

      {wins.map((win) => {
        const { title, node, wide } = resolve(win.id);

        return (
          <Window
            key={win.id}
            win={win}
            title={title}
            wide={wide}
            onFocus={() => focus(win.id)}
            onClose={() => close(win.id)}
            onMove={(x, y) => move(win.id, x, y)}
          >
            {node}
          </Window>
        );
      })}

      <Dock onOpen={open} />
    </>
  );
}
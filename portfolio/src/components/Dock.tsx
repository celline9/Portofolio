import { FolderKanban, Mail, Route, User, Wrench } from 'lucide-react';
import type { WindowId } from '../types';

const items = [
  { id: 'about', label: 'About', Icon: User },
  { id: 'projects', label: 'Projects', Icon: FolderKanban },
  { id: 'journey', label: 'Journey', Icon: Route },
  { id: 'toolkit', label: 'Toolkit', Icon: Wrench },
  { id: 'contact', label: 'Contact', Icon: Mail },
] as const;

export const Dock = ({ onOpen }: { onOpen: (id: WindowId) => void }) => (
  <nav className="dock" aria-label="Open a window">
    {items.map(({ id, label, Icon }) => (
      <button key={id} onClick={() => onOpen(id)} aria-label={label}>
        <Icon size={22} />
        <small>{label}</small>
      </button>
    ))}
  </nav>
);
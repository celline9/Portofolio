import type { PointerEvent, ReactNode } from 'react';
import type { WinState } from '../hooks/useWindows';
interface Props { win: WinState; title: string; wide?: boolean; children: ReactNode;
  onFocus: () => void; onClose: () => void; onMove: (x: number, y: number) => void }
export function Window({ win, title, wide, children, onFocus, onClose, onMove }: Props) {
  const startDrag = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    const dx = e.clientX - win.x, dy = e.clientY - win.y;
    const move = (m: globalThis.PointerEvent) => onMove(m.clientX - dx, Math.max(48, m.clientY - dy));
    const up = () => window.removeEventListener('pointermove', move);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up, { once: true });
  };
  return (
    <section className={`window ${wide ? 'wide' : ''}`} style={{ left: win.x, top: win.y, zIndex: win.z }}
      onPointerDown={onFocus} role="dialog" aria-label={title}>
      <header className="window__bar" onPointerDown={startDrag}>
        <span>{title}</span>
        <button onClick={onClose} aria-label={`Close ${title}`}>✕</button>
      </header>
      <div className="window__body">{children}</div>
    </section>
  );
}

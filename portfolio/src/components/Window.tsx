import type { PointerEvent, ReactNode } from 'react';
import type { WinState } from '../hooks/useWindows';

interface Props {
  win: WinState;
  title: string;
  wide?: boolean;
  children: ReactNode;
  onFocus: () => void;
  onClose: () => void;
  onMove: (x: number, y: number) => void;
}

export function Window({
  win,
  title,
  wide = false,
  children,
  onFocus,
  onClose,
  onMove,
}: Props) {
  const handleDragStart = (e: PointerEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;

    const offsetX = e.clientX - win.x;
    const offsetY = e.clientY - win.y;

    const handlePointerMove = (event: globalThis.PointerEvent) => {
      const x = event.clientX - offsetX;
      const y = Math.max(48, event.clientY - offsetY);

      onMove(x, y);
    };

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp, { once: true });
  };

  return (
    <section
      className={`window ${wide ? 'wide' : ''}`}
      style={{
        left: win.x,
        top: win.y,
        zIndex: win.z,
      }}
      onPointerDown={onFocus}
      role="dialog"
      aria-label={title}
    >
      <header className="window__bar" onPointerDown={handleDragStart}>
        <span>{title}</span>

        <button onClick={onClose} aria-label={`Close ${title}`}>
          ✕
        </button>
      </header>

      <div className="window__body">{children}</div>
    </section>
  );
}
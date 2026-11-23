import { useCallback, useRef, useState } from 'react';
import type { WindowId } from '../types';
export interface WinState { id: WindowId; x: number; y: number; z: number }
export function useWindows() {
  const [wins, setWins] = useState<WinState[]>([]);
  const z = useRef(10);
  const open = useCallback((id: WindowId) => {
    const next = ++z.current;
    setWins(w => w.some(x => x.id === id)
      ? w.map(x => (x.id === id ? { ...x, z: next } : x))
      : [...w, { id, x: 90 + (w.length % 6) * 34, y: 80 + (w.length % 6) * 30, z: next }]);
  }, []);
  const focus = useCallback((id: WindowId) => { const next = ++z.current; setWins(w => w.map(x => (x.id === id ? { ...x, z: next } : x))); }, []);
  const move = useCallback((id: WindowId, x: number, y: number) => setWins(w => w.map(s => (s.id === id ? { ...s, x, y } : s))), []);
  const close = useCallback((id: WindowId) => setWins(w => w.filter(x => x.id !== id)), []);
  return { wins, open, focus, move, close };
}

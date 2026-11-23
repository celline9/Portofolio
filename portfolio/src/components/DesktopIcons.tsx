
import {
    useRef,
    useState,
    type PointerEvent,
} from 'react';

import type { WindowId } from '../types';
import aboutIcon from '../assets/about_me.jpg';
import tool from '../assets/tool.jpg';
import journey from '../assets/journey.jpg';
import projects from '../assets/projects.jpg';
import mail from '../assets/mail.jpg';


interface Item {
    id: WindowId;
    label: string;
    Icon: string;
    color: string;
    x: number;
    y: number;
}

// x / y are fractions of the viewport
// so the layout adapts to any screen size
const ITEMS: Item[] = [
    {
        id: 'about',
        label: 'about me',
        Icon: aboutIcon,
        color: '#f0abfc',
        x: 0.03,
        y: 0.14,
    },
    {
        id: 'projects',
        label: 'projects',
        Icon: projects,
        color: '#7c9cff',
        x: 0.03,
        y: 0.38,
    },
    {
        id: 'journey',
        label: 'my journey',
        Icon: journey,
        color: '#5eead4',
        x: 0.03,
        y: 0.62,
    },
    {
        id: 'toolkit',
        label: 'toolkit',
        Icon: tool,
        color: '#fcd34d',
        x: 0.9,
        y: 0.14,
    },
    {
        id: 'contact',
        label: 'say hi',
        Icon: mail,
        color: '#fda4af',
        x: 0.9,
        y: 0.38,
    },
];

const SIZE = {
    w: 92,
    h: 104,
};

export function DesktopIcons({
    onOpen,
}: {
    onOpen: (id: WindowId) => void;
}) {
    const [pos, setPos] = useState(() =>
        Object.fromEntries(
            ITEMS.map((item) => [
                item.id,
                {
                    x: item.x * window.innerWidth,
                    y: item.y * window.innerHeight,
                },
            ])
        )
    );

    const moved = useRef(false);

    const startDrag = (id: WindowId) => (
        e: PointerEvent<HTMLButtonElement>
    ) => {
        if (e.button !== 0) return;

        moved.current = false;

        const el = e.currentTarget;

        el.setPointerCapture(e.pointerId);

        const ox = e.clientX - pos[id].x;
        const oy = e.clientY - pos[id].y;

        const sx = e.clientX;
        const sy = e.clientY;

        const move = (m: globalThis.PointerEvent) => {
            if (
                !moved.current &&
                Math.hypot(m.clientX - sx, m.clientY - sy) < 5
            ) {
                return;
            }

            moved.current = true;

            setPos((p) => ({
                ...p,
                [id]: {
                    x: Math.min(
                        window.innerWidth - SIZE.w,
                        Math.max(0, m.clientX - ox)
                    ),
                    y: Math.min(
                        window.innerHeight - SIZE.h - 90,
                        Math.max(50, m.clientY - oy)
                    ),
                },
            }));
        };

        const up = () => {
            el.removeEventListener('pointermove', move);
        };

        el.addEventListener('pointermove', move);
        el.addEventListener('pointerup', up, { once: true });
    };

    return (
        <div className="icons" aria-label="Desktop">
            {ITEMS.map(({ id, label, Icon, color }) => (
                <button
                    key={id}
                    className="icon"
                    style={{
                        left: pos[id].x,
                        top: pos[id].y,
                    }}
                    onPointerDown={startDrag(id)}
                    onClick={() => {
                        if (!moved.current) {
                            onOpen(id);
                        }
                    }}
                    aria-label={`Open ${label}`}
                >
                    <span
                        className="icon__art"
                        style={{ background: color }}
                    >
                            <img
                                src={Icon}
                                alt={label}
                                className="icons-img"
                            />
                        
                    </span>

                    <span className="icon__label">
                        {label}
                    </span>
                </button>
            ))}
        </div>
    );
}

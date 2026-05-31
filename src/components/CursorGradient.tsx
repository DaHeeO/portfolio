import { useEffect, useRef } from 'react';

export function CursorGradient() {
    const gradientRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);
    const currentPositionRef = useRef({ x: 0, y: 0 });
    const targetPositionRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const gradient = gradientRef.current;

        if (!gradient || !window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        const initialPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        currentPositionRef.current = initialPosition;
        targetPositionRef.current = initialPosition;

        const setGradientPosition = (x: number, y: number) => {
            gradient.style.setProperty('--cursor-x', `${x}px`);
            gradient.style.setProperty('--cursor-y', `${y}px`);
        };

        const animateGradient = () => {
            const current = currentPositionRef.current;
            const target = targetPositionRef.current;

            current.x += (target.x - current.x) * 0.055;
            current.y += (target.y - current.y) * 0.055;

            setGradientPosition(current.x, current.y);
            frameRef.current = requestAnimationFrame(animateGradient);
        };

        setGradientPosition(initialPosition.x, initialPosition.y);
        frameRef.current = requestAnimationFrame(animateGradient);

        const handlePointerMove = (event: PointerEvent) => {
            targetPositionRef.current = {
                x: event.clientX,
                y: event.clientY,
            };
            gradient.style.opacity = '1';
        };

        const handlePointerLeave = () => {
            gradient.style.opacity = '0.45';
        };

        window.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerleave', handlePointerLeave);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }

            window.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerleave', handlePointerLeave);
        };
    }, []);

    return (
        <div
            ref={gradientRef}
            className="pointer-events-none fixed inset-0 z-0 opacity-45 transition-opacity duration-500"
            style={{
                background:
                    'radial-gradient(560px circle at var(--cursor-x, 50vw) var(--cursor-y, 50vh), rgba(59, 130, 246, 0.14), rgba(20, 184, 166, 0.08) 34%, transparent 68%)',
            }}
            aria-hidden="true"
        />
    );
}

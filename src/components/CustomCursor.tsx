import { useEffect, useRef } from 'react';

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Actual pointer position
  const pointerX = useRef(0);
  const pointerY = useRef(0);

  // Position of the delayed orange cursor
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  // Tracks if the pointer is being held down
  const isPointerDown = useRef(false);

  useEffect(() => {
    const interactiveSelector =
      "a, button, input, textarea, select, [role='button']";

    let animationFrameId: number;

    // Updates the actual pointer position
    const handlePointerMove = (event: PointerEvent) => {
      // Only use the mouse for our custom cursor
      if (event.pointerType !== 'mouse') return;

      pointerX.current = event.clientX;
      pointerY.current = event.clientY;

      // Small dot follows the pointer directly
      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate(${event.clientX}px, ${event.clientY}px)
          translate(-50%, -50%)
        `;
      }
    };

    // Removes the delay while dragging
    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      isPointerDown.current = true;
    };

    // Returns to delayed movement
    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      isPointerDown.current = false;
    };

    // Hover effect on clickable elements
    const handlePointerOver = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      const target = event.target as HTMLElement;

      if (target.closest(interactiveSelector)) {
        cursorRef.current?.classList.add('is-hovering');
      }
    };

    // Removes hover effect
    const handlePointerOut = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      const target = event.target as HTMLElement;

      if (target.closest(interactiveSelector)) {
        cursorRef.current?.classList.remove('is-hovering');
      }
    };

    // Animates the orange cursor
    const animateCursor = () => {
      if (isPointerDown.current) {
        // Follow directly while dragging
        cursorX.current = pointerX.current;
        cursorY.current = pointerY.current;
      } else {
        // Smooth delayed movement
        const diffX = pointerX.current - cursorX.current;
        const diffY = pointerY.current - cursorY.current;

        cursorX.current += diffX * 0.1;
        cursorY.current += diffY * 0.1;
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${cursorX.current + 4}px, ${cursorY.current + 4}px)
          translate(-50%, -50%)
        `;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);

    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);

      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Small dot - exact pointer position */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-900 top-0 left-0 h-2 w-2 rounded-full bg-pink-500"
      />

      {/* Orange cursor - delayed movement */}
      <div
        ref={cursorRef}
        className="customCursor pointer-events-none fixed z-900 top-0 left-0 h-5 w-5 rounded-full bg-orange"
      />
    </>
  );
}

export default CustomCursor;

import { useEffect, useRef } from 'react';

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    // Updates the actual mouse position
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;

      // Small dot follows the mouse directly
      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate(${event.clientX}px, ${event.clientY}px)
          translate(-50%, -50%)
        `;
      }
    };

    // Adds hover effect on clickable elements
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        cursorRef.current?.classList.add('is-hovering');
      }
    };

    // Removes hover effect
    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        cursorRef.current?.classList.remove('is-hovering');
      }
    };

    // Orange cursor follows with a delay
    const animateCursor = () => {
      const diffX = mouseX.current - cursorX.current;
      const diffY = mouseY.current - cursorY.current;

      cursorX.current += diffX * 0.1;
      cursorY.current += diffY * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${cursorX.current + 4}px, ${cursorY.current + 4}px)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-pink-500"
      />

      {/* Orange cursor */}
      <div
        ref={cursorRef}
        className="customCursor pointer-events-none fixed top-0 left-0 z-50 h-5 w-5 rounded-full bg-orange"
      />
    </>
  );
}

export default CustomCursor;

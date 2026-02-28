"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const isPointerRef = useRef(false);
  const rafRef = useRef<number>(0);

  const isClickable = useCallback((el: HTMLElement | null): boolean => {
    while (el) {
      const tag = el.tagName;
      if (
        tag === "A" ||
        tag === "BUTTON" ||
        tag === "INPUT" ||
        tag === "SELECT" ||
        tag === "TEXTAREA" ||
        tag === "SUMMARY" ||
        el.getAttribute("role") === "button" ||
        el.getAttribute("onclick") !== null ||
        el.getAttribute("tabindex") !== null
      ) {
        return true;
      }
      const computed = window.getComputedStyle(el);
      if (computed.cursor === "pointer") {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const animate = () => {
      cursor.style.transform = `translate(-50%, -50%) translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      if (!visibleRef.current) {
        visibleRef.current = true;
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
        cursor.style.opacity = "1";
      }

      const pointer = isClickable(e.target as HTMLElement);
      if (pointer !== isPointerRef.current) {
        isPointerRef.current = pointer;
        cursor.style.width = pointer ? "50px" : "20px";
        cursor.style.height = pointer ? "50px" : "20px";
        cursor.style.backgroundColor = pointer
          ? "rgba(210, 210, 210, 0.3)"
          : "rgba(210, 210, 210, 0.8)";
      }
    };

    const onMouseLeave = () => {
      visibleRef.current = false;
      cursor.style.opacity = "0";
    };

    rafRef.current = requestAnimationFrame(animate);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isClickable]);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "rgba(210, 210, 210, 0.8)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          transition:
            "width 0.15s ease, height 0.15s ease, background-color 0.15s ease",
          willChange: "transform",
        }}
      />
      {children}
    </>
  );
}

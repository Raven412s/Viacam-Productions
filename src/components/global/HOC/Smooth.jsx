// HOC (higher order component for smooth scrolling)
"use client"
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
export const  SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothTouch: true,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

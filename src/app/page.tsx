"use client"
import Scene from '@/components/models/camera';
import CardParallax from '@/components/global/CardParalax/CardParalax';
import Parallax from '@/components/SmoothParallaxScroll/index';
import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from 'react';
import PreLoader from '@/components/global/Preloader';
import Teams from '@/components/global/Teams';
import Hero from '@/components/global/animated/Hero';
import CardAnimation from '@/components/global/card-animation/CardAnimation';
const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const lenis = new Lenis();
        // Animation frame callback
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        // Clean up the Lenis instance
        return () => {
          lenis.destroy();
        };
      }, []);

      useEffect(() => {
        // Automatically hide preloader after video duration
        const timer = setTimeout(() => setIsLoading(false), 20200);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    {isLoading ? (
      <PreLoader />
    ) : (
      <main>
        <Hero/>
        <Parallax/>
        <CardParallax />
        <CardAnimation/>
        <Teams/>
      </main>
    )}
  </>

  )
}

export default Home

'use client';
import { projects } from '@/data/Card-Paralax';
import Card from '../../Card/index';
import { useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function CardParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

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

  return (
    <main ref={container} className="my-[5vh]">
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.01);
          return <Card key={`p_${i}`} i={i} url={project.link} title={project.title} description={project.description} src={project.src} color={project.color} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} textColor={project.text}/>
        })
      }
    </main>
  )
}

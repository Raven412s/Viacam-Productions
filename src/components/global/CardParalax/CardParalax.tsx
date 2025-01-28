'use client';
import { projects } from '@/data/Card-Paralax';
import Card from '../../Card/index';
import { useScroll, MotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface Project {
  link: string;
  title: string;
  description: string;
  src: string;
  color: string;
  text: string;
}

export default function CardParallax() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    // Animation frame callback
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Clean up the Lenis instance on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="my-[5vh]">
      {projects.map((project: Project, i: number) => {
        const targetScale = 1 - (projects.length - i) * 0.01;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            url={project.link}
            title={project.title}
            description={project.description}
            src={project.src}
            color={project.color}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            textColor={project.text}
          />
        );
      })}
    </main>
  );
}

'use client';
import AnimatedEntry from '@/components/global/animated/AnimatedEntry';
import AnimatedText from '@/components/global/animated/AnimatedText';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
  "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg",
];

export default function Parallax() {
    const gallery = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null); // Updated ref type
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !logoRef.current) return;

    gsap.fromTo(
      logoRef.current,
      { scale: 0.4, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main className={styles.main}>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
   </main>
  );
}

const Column = ({ images, y }: { images: string[]; y: any }) => (
  <motion.div className={styles.column} style={{ y }}>
    {images.map((src, i) => (
      <div key={i} className={styles.imageContainer}>
        <Image
          src={`/${src}`}
          alt="image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    ))}
  </motion.div>
);

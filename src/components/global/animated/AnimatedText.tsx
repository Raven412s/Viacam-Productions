'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedTextProps {
  phrase: string;
}

export default function AnimatedText({ phrase }: AnimatedTextProps) {
  const refs = useRef<HTMLSpanElement[]>([]); // Array to store references to letters

  // Function to split words into `p` elements containing letters
  const splitWords = (phrase: string) => {
    refs.current = []; // Clear refs on every render to avoid duplicates
    return phrase.split(' ').map((word, wordIndex) => (
      <p
        className="text-[3.5vw] m-0 mr-[1.5vw] font-semibold text-white"
        key={`word_${wordIndex}`}
      >
        {splitLetters(word)}
      </p>
    ));
  };

  // Function to split letters into `span` elements
  const splitLetters = (word: string) => {
    return word.split('').map((letter, letterIndex) => (
      <span
        className="opacity-20"
        key={`letter_${letterIndex}`}
        ref={(el) => {
          if (el) refs.current.push(el);
        }}
      >
        {letter}
      </span>
    ));
  };

  // GSAP Animation
  useEffect(() => {
    if (refs.current.length > 0) {
      // Apply staggered animation to letters
      gsap.fromTo(
        refs.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <main className="flex items-end justify-center bg-transparent text-gray-900">
      <div className="w-full flex flex-wrap">{splitWords(phrase)}</div>
    </main>
  );
}

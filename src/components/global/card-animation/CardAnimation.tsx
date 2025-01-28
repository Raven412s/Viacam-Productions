'use client';
import '@/styles/cardAnimation.css';
import AnimatedCard from '@/components/global/animated/AnimatedCard';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface CardAnimationProps {}

const CardAnimation: React.FC<CardAnimationProps> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const borderColors = ['e9edc9', 'f07167', '52b788', 'fad643'];

  const backTexts = [
    <div className="size-full p-4 flex flex-col gap-20 items-center z-10" key="1">
      <p className="text-3xl text-center">Lite <br /> ₹15000</p>
      <p className="text-[0.9rem]">
        &#10003;&nbsp;Social Media Marketing <br />
        &#10003;&nbsp;Instagram and Facebook <br />&nbsp;&nbsp;&nbsp;&nbsp;Handling Posts and Reels <br />
        &#10003;&nbsp;Basic Site analytics <br />
        &#10003;&nbsp;4 Reels/Month, 30 Posts/Month
      </p>
    </div>,
    <div className="size-full p-4 flex flex-col gap-20 items-center z-10" key="2">
      <p className="text-3xl text-center">Core <br /> ₹25000</p>
      <p className="text-[0.9rem]">
        &#10003;&nbsp;Social Media Marketing <br />
        &#10003;&nbsp;Instagram and Facebook <br />&nbsp;&nbsp;&nbsp;&nbsp;Handling Posts and Reels <br />
        &#10003;&nbsp;Standard Site analytics <br />
        &#10003;&nbsp;8 Reels/Month, 60 Posts/Month
      </p>
    </div>,
    <div className="size-full p-4 flex flex-col gap-20 items-center z-10" key="3">
      <p className="text-3xl text-center">Business <br /> ₹35000</p>
      <p className="text-[0.9rem]">
        &#10003;&nbsp;Social Media Marketing <br />
        &#10003;&nbsp;Instagram and Facebook <br />&nbsp;&nbsp;&nbsp;&nbsp;Handling Posts and Reels <br />
        &#10003;&nbsp;Standard Site analytics <br />
        &#10003;&nbsp;8 Reels/Month, 60 Posts/Month <br />
        &#10003;&nbsp;Digital Marketing
      </p>
    </div>,
    <div className="size-full p-4 flex flex-col gap-20 items-center z-10" key="4">
      <p className="text-3xl text-center">Production <br /> ₹55000</p>
      <p className="text-[0.9rem]">
        &#10003;&nbsp;Social Media Marketing <br />
        &#10003;&nbsp;Instagram and Facebook <br />&nbsp;&nbsp;&nbsp;&nbsp;Handling Posts and Reels <br />
        &#10003;&nbsp;Standard Site analytics <br />
        &#10003;&nbsp;8 Reels/Month, 60 Posts/Month <br />
        &#10003;&nbsp;Digital Marketing
      </p>
    </div>,
  ];

  useGSAP(() => {
    const cards = cardRefs.current;
    const totalScrollHeight = window.innerHeight * 3;
    const position = [14, 38, 62, 86];
    const rotation = [-15, -7.5, 7.5, 15];
    const animationCompleteText = containerRef.current?.querySelector("h1");

    // Cards spread animation
    ScrollTrigger.create({
      trigger: containerRef.current?.querySelector("#cards"),
      start: "top top",
      end: `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true,
    });

    cards.forEach((card, index) => {
      if (!card) return;

      gsap.to(card, {
        left: `${position[index]}%`,
        rotate: `${rotation[index]}`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current?.querySelector("#cards"),
          start: "top top",
          end: `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`,
        },
      });
    });

    // Cards flip animation
    cards.forEach((card, index) => {
      if (!card) return;
      const frontEl = card.querySelector(".flip-card-front");
      const backEl = card.querySelector(".flip-card-back");
      const staggerOffset = index * 0.05;
      const startOffset = 1 / 3 + staggerOffset;
      const endOffset = 2 / 3 + staggerOffset;

      ScrollTrigger.create({
        trigger: containerRef.current?.querySelector("#cards"),
        start: "top top",
        end: `+=${totalScrollHeight}`,
        scrub: 1,
        id: `rotate-flip-${index}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= startOffset && progress <= endOffset) {
            const animationProgress = (progress - startOffset) / (1 / 3);
            const frontRotation = -180 * animationProgress;
            const backRotation = 180 - 180 * animationProgress;
            const cardRotation = rotation[index] * (1 - animationProgress);

            gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
            gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });
            gsap.to(card, {
              xPercent: -50,
              yPercent: -50,
              rotate: cardRotation,
              ease: "power1.out",
            });
          }

          if (animationCompleteText) {
            const opacityProgress = Math.max(0, (self.progress - 2 / 3) * 3);
            gsap.to(animationCompleteText, { opacity: opacityProgress });
          }
        },
      });
    });
  }, { scope: containerRef });

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main id="CardAnimation" ref={containerRef}>
      <section id="cards" className="relative">
        {[...Array(4)].map((_, index) => (
          <AnimatedCard
            key={index}
            id={`card-${index + 1}`}
            frontSrc="/images/card-light.png"
            frontAlt="Card Image"
            backText={backTexts[index]}
            border={`#${borderColors[index]}`}
            ref={(elem) => (cardRefs.current[index] = elem)}
          />
        ))}
        <h1 className="text-6xl special-font text-center absolute bottom-[3vh] left-1/2 -translate-x-1/2 opacity-0">
          {Array.from("Special Pricing Only For You!").map((char, index) => (
            <span
              key={index}
              className="inline-block relative"
              style={{
                animation: `floating 3s infinite ease-in-out`,
                animationDelay: `${index * 0.1}s`, // Staggered delay
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </section>
    </main>
  );
};

export default CardAnimation;

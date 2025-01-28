import React from 'react';
import AnimatedEntry from './AnimatedEntry';
import AnimatedText from './AnimatedText';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div
      className={`flex items-center justify-center text-6xl font-bold z-50 flex-col relative`}
      style={{
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* Overlay with GIF */}
      <div
        className="overlay h-screen w-screen absolute opacity-10"
        style={{ backgroundImage: `url("https://i.gifer.com/EFI0.gif")` }}
      >
        <Image
          alt="overlay"
          src="https://i.gifer.com/EFI0.gif"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full"
        />
      </div>

      {/* Noise overlay */}
      <div className="overlay h-screen w-screen absolute -z-50 opacity-5">
        <Image
          alt="overlay"
          src="/noise.jpg"
          fill
          draggable={false}
          onDoubleClick={(e) => e.preventDefault()}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full z-[9999] pointer-events-none"
        />
      </div>

      {/* Background squares */}
      <div className="absolute w-full h-full">
        <div className="bg-green-400 square i001 w-[80px] h-[80px] absolute -z-10 right-[12rem] bottom-[38vh]"></div>
        <div className="bg-red-400 i002 square w-[100px] h-[100px] absolute -z-10 left-[9rem] top-[27vh]"></div>
        <div className="bg-purple-400 i003 square w-[100px] h-[100px] absolute -z-10 left-16 bottom-[27vh]"></div>
        <div className="bg-blue-400 i004 square w-[100px] h-[100px] absolute -z-10 right-[10vw] top-56"></div>
      </div>

      {/* Animated Entry */}
      <div className="absolute bottom-28">
        <AnimatedEntry className="" />
      </div>

      {/* Animated Text */}
      <div className="absolute top-56">
        <AnimatedText phrase="At Viacam" />
        <AnimatedText phrase="We Re-Imagine Your Dreams." />
      </div>
    </div>
  );
};

export default Hero;

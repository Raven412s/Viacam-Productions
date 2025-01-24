import { forwardRef, useState } from 'react';
import Image from 'next/image';
import '@/styles/cardAnimation.css';

const AnimatedCard = forwardRef((props, ref) => {
  const { id, frontSrc, frontAlt, backText, border } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96"
      id={id}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full">
        <div className="flip-card-inner relative size-full">
          <div className="flip-card-front absolute size-full  rounded-xl border-2 border-white/90">
            <Image
              priority
              src={frontSrc}
              alt={frontAlt}
              width={500}
              height={500}
              className="rotate-180"
            />
          </div>
          <div
            className={`flip-card-back relative size-full  rounded-xl p-4 border-2 border-white ${
              isHovered ? 'hovered' : ''
            }`}
            style={{
              borderColor: isHovered ? border : 'transparent',
            }}
          >
            <div className="for-animation relative w-64 h-96 "
            style={{
                "--var1": border
            }}
            >
            <Image
              priority
              src='/images/black.jpg'
              alt={frontAlt}
              width={500}
              height={500}
              className="rotate-180 -z-[2] absolute top-0 left-0 rounded-xl "
            />
            {backText}
            </div>
          </div>
          </div>
      </div>
    </div>
  );
});

export default AnimatedCard;

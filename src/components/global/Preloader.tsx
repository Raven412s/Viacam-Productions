'use client';

import React, { useEffect, useRef, useState } from 'react';

const PreLoader: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loadingCount, setLoadingCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 20200; // 20.2 seconds
    const intervalTime = duration / 100; // Time to increment by 1%
    let count = 0;

    // Progress and Counter Sync
    const interval = setInterval(() => {
      count++;
      setLoadingCount(count);
      setProgress((count / 100) * 100); // Sync with progress bar
      if (count >= 100) {
        clearInterval(interval);
      }
    }, intervalTime);

    // Cleanup Interval on Component Unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black absolute">
      {/* Main Container */}
      <div className=" items-center flex flex-col gap-6 text-[#e5e5e5] relative">
<div className="progress absolute flex flex-col items-center min-w-80 bottom-5 right-0 ">
            {/* Loading Count */}
            <div className="flex items-center justify-center text-6xl font-bold ">
          <span className="digit">{Math.floor(loadingCount / 100)}</span>
          <span className="digit">{Math.floor((loadingCount % 100) / 10)}</span>
          <span className="digit">{loadingCount % 10}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-[80%] h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-800 rounded-full transition-all duration-[20.2s]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
</div>

        {/* Video */}
        <video
          ref={videoRef}
          src="/media/intro.mp4"
          autoPlay
          muted
          loop={false}
          className="rounded-lg max-w-[80%] max-h-[60%]"
          style={{
            borderRadius: '12px',
          }}
        ></video>
      </div>
    </div>
  );
};

export default PreLoader;

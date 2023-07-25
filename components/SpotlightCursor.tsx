import React, { useState, useEffect } from 'react';

const SpotlightCursor = () => {
  const [position, setPosition] = useState({ left: '0px', top: '0px' });

  useEffect(() => {
    const moveSpotlight = (e: MouseEvent) => {
      setPosition({
        left: `${Math.min(e.pageX, window.innerWidth - 80)}px`,
        top: `${Math.min(e.pageY, window.innerHeight - 80)}px`,
      });
    };

    window.addEventListener('mousemove', moveSpotlight);

    return () => {
      window.removeEventListener('mousemove', moveSpotlight);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        id="spotlight"
        className="absolute w-80 h-80 rounded-full transition-all duration-1 ease-out pointer-events-none"
        style={{
          ...position,
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </div>
  );
};

export default SpotlightCursor;

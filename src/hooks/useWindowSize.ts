import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
  freeWidth: number;
  freeHeight: number;
}

const useWindowSize = (usedHeight: number = 0, usedWidth: number = 0): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    freeWidth: window.innerWidth - usedWidth,
    freeHeight: window.innerHeight - usedHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const freeWidth = windowWidth - usedWidth;
      const freeHeight = windowHeight - usedHeight;

      setWindowSize({
        width: windowWidth,
        height: windowHeight,
        freeWidth: freeWidth,
        freeHeight: freeHeight,
      });
    };

    // Initial call on component mount
    handleResize();

    // Adding event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleaning up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [usedHeight, usedWidth]);

  return windowSize;
};

export default useWindowSize;
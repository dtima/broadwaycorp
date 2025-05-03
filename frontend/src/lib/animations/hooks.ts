import { useState, useEffect } from 'react';

/**
 * Hook to animate a counter from 0 to a target number
 * @param target - The final number to count up to
 * @param duration - The duration of the animation in milliseconds
 * @returns The current count value
 */
export const useAnimatedCounter = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * target));
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);
  
  return count;
}; 
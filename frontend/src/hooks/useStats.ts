import { useCallback, useEffect, useRef, useState } from "react";

const duration = 2000; // Animation duration in milliseconds

export const useStatsAnimation = (targetNumbers: number[]) => {
  const [numbers, setNumbers] = useState(() =>
    new Array(targetNumbers.length).fill(0)
  );
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  //Detect When Content Becomes Visible
  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true); // Start animation when visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sectionElement) {
      observer.observe(sectionElement); // Cleanup using the stored reference
    }

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  // number increasing animation
  const numberAnimations = useCallback(() => {
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1); // Progress (0 to 1)
      const currentNumbers = targetNumbers.map((target) =>
        Math.floor(progress * target)
      );

      setNumbers(currentNumbers);

      // Continue animation until progress reaches 1 (animation complete)  
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  },[targetNumbers])

  // Start the animation when component is visible  and stop it when it's not
  useEffect(() => {
    if (startAnimation) numberAnimations();
  }, [startAnimation,numberAnimations]);

  return { sectionRef, numbers };
};

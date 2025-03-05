import { useEffect, useRef, useState } from "react";


const duration = 2000; // Animation duration in milliseconds

export const useStatsAnimation=(targetNumbers:number[])=>{
     const [numbers, setNumbers] = useState(() => new Array(targetNumbers.length).fill(0));
        const [startAnimation, setStartAnimation] = useState(false);
        const sectionRef = useRef<HTMLDivElement | null>(null);
      
        //Detect When Content Becomes Visible
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setStartAnimation(true); // Start animation when visible
              }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
          );
      
          if (sectionRef.current) {
            observer.observe(sectionRef.current);
          }
      
          return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          };
        }, []);
      
        // number increasing animation
        const numberAnimations = () => {
          const start = performance.now();
      
          const animate = (time: number) => {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1); // Progress (0 to 1)
            const currentNumbers = targetNumbers.map((target) =>
              Math.floor(progress * target)
            );
      
            setNumbers(currentNumbers);
      
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
      
          requestAnimationFrame(animate);
        };
      
        // Start the animation when component is visible  and stop it when it's not
        useEffect(() => {
          if (startAnimation)  numberAnimations();
        }, [startAnimation]);

        return {sectionRef,numbers}
}
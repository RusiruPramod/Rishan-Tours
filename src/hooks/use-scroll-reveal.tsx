import { useEffect, useRef, useState, useCallback } from "react";

interface UseScrollRevealOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

/**
 * Optimized hook to trigger animations when elements come into view
 * Uses Intersection Observer with GPU acceleration for smooth scrolling
 * @param options - Configuration for intersection observer
 * @returns ref to attach to element, and isVisible state
 */
export function useScrollReveal(
  options: UseScrollRevealOptions = {}
) {
  const {
    threshold = 0.15, // Increased for better UX - triggers when 15% visible
    rootMargin = "50px", // Pre-load 50px before entering viewport
    triggerOnce = true,
    delay = 0,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);
  const animationFrameId = useRef<number | null>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && (!triggerOnce || !hasTriggered.current)) {
        // Use requestAnimationFrame for smooth animation timing
        if (animationFrameId.current !== null) {
          cancelAnimationFrame(animationFrameId.current);
        }

        if (delay > 0) {
          animationFrameId.current = requestAnimationFrame(() => {
            const timer = setTimeout(() => {
              setIsVisible(true);
              hasTriggered.current = true;
              if (triggerOnce && ref.current) {
                observer.unobserve(ref.current);
              }
            }, delay);
            
            return () => clearTimeout(timer);
          });
        } else {
          setIsVisible(true);
          hasTriggered.current = true;
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      } else if (!triggerOnce && !entry.isIntersecting) {
        setIsVisible(false);
      }
    },
    [triggerOnce, delay]
  );

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: Array.isArray(threshold) ? threshold : [threshold],
    rootMargin,
  });

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [observer]);

  return { ref, isVisible };
}

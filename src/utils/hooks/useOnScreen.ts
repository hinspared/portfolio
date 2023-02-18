import React from "react";

const useOnScreen = (
  ref: React.RefObject<HTMLElement>,
  threshold = 0.8,
  delay = 100
) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const newEntry = entry as IntersectionObserverEntry;
        // detect if element is visible with delay
        if (newEntry.isIntersecting) {
          timeout = setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          if (timeout) {
            clearTimeout(timeout);
          }
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    const currentElement = ref.current as Element;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  }, [delay, ref, threshold]);

  return isVisible;
};

export default useOnScreen;

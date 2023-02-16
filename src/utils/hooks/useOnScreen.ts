import React from "react";

const useOnScreen = (ref: React.RefObject<HTMLElement>, threshold = 0.8) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const newEntry = entry as IntersectionObserverEntry;
        setIsVisible(newEntry.isIntersecting);
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
  }, [ref, threshold]);

  return isVisible;
};

export default useOnScreen;

import { useEffect, useRef, useState } from "react";

const THRESHOLD = 0;

export const useScrollDirection = () => {
  const [direction, setDirection] = useState("up");

  const blocking = useRef(false);
  const prevY = useRef(0);

  useEffect(() => {
    prevY.current = window.pageYOffset;

    const updateDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevY.current) >= THRESHOLD) {
        const newDirection = scrollY > prevY.current ? "down" : "up";

        setDirection(newDirection);

        prevY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateDirection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [direction]);

  return direction;
};

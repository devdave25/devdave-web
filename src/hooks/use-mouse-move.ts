import React from "react";
import { useDebounce } from "./use-debounce";

export const useMouseMove = (delay = 200): { moving: boolean; mouse: [number, number]} => {
  const [mouse, setMouse] = React.useState<[number, number]>([0, 0]);
  const [moving, setMoving] = React.useState(false);

  const mousemoveHandler = (e: MouseEvent) => {
    setMoving(true);
    setMouse([e.clientX, e.clientY]);
  };

  const debouncedMouse = useDebounce(mouse, delay);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("mousemove", mousemoveHandler);

    return () => {
      window.removeEventListener("mousemove", mousemoveHandler);
    };
  });

  React.useEffect(() => {
    setMoving(false);
  }, [...debouncedMouse]);

  return {moving, mouse};
};
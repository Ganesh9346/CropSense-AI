import { useEffect, useState } from "react";

const CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function useKonami() {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    let progress = 0;
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === CODE[progress]) {
        progress += 1;
        if (progress === CODE.length) {
          setTriggered(true);
          progress = 0;
        }
      } else {
        progress = key === CODE[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return [triggered, () => setTriggered(false)];
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type Props = {
  src: string;
  className?: string;
};

export function LottiePanel({ src, className }: Props) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    let active = true;

    fetch(src)
      .then((response) => response.json())
      .then((data) => {
        if (active) {
          setAnimationData(data);
        }
      })
      .catch(() => {
        if (active) {
          setAnimationData(null);
        }
      });

    return () => {
      active = false;
    };
  }, [src]);

  if (!animationData) {
    return <div className={className ? `${className} lottie-fallback` : "lottie-fallback"} aria-hidden="true" />;
  }

  return (
    <div className={className ? `${className} lottie-wrap` : "lottie-wrap"} aria-hidden="true">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}

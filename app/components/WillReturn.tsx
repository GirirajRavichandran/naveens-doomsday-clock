"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

// Global state for visibility
let willReturnEnabled = true;
let listeners: ((enabled: boolean) => void)[] = [];

export function setWillReturnEnabled(enabled: boolean) {
  willReturnEnabled = enabled;
  listeners.forEach((fn) => fn(enabled));
}

export function getWillReturnEnabled() {
  return willReturnEnabled;
}

export function subscribeWillReturn(fn: (enabled: boolean) => void) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}

export default function WillReturn() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [showReturnMessage, setShowReturnMessage] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);
  const lastTimeRef = useRef<number>(0);
  const cycleStartRef = useRef<number>(0);
  const startedRef = useRef(false);

  const name = searchParams.get("name") || "Naveen Sunilkumar";
  const returnMessage = "Naveen will return to the fourth floor, A Block";
  const lastDayMessage = `${name}'s Last Day at Freshworks`;

  useEffect(() => {
    const unsubscribe = subscribeWillReturn(setEnabled);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let animationId: number;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
        cycleStartRef.current = timestamp + 5000;
      }

      if (timestamp < cycleStartRef.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (!startedRef.current) {
        startedRef.current = true;
        cycleStartRef.current = timestamp;
      }

      const elapsed = timestamp - cycleStartRef.current;

      if (elapsed < 500) {
        setStep(0);
        setShowReturnMessage(false);
        setIsFlickering(false);
      } else if (elapsed < 3000) {
        setStep(1);
      } else if (elapsed < 5000) {
        setStep(2);
      } else if (elapsed < 6500) {
        setStep(3);
      } else if (elapsed < 7500) {
        setStep(3);
        setIsFlickering(true);
      } else if (elapsed < 10500) {
        setStep(3);
        setIsFlickering(false);
        setShowReturnMessage(true);
      } else {
        cycleStartRef.current = timestamp;
        setStep(0);
        setShowReturnMessage(false);
        setIsFlickering(false);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="absolute top-[70%] left-1/2 -translate-x-1/2 z-[100] pointer-events-none text-center whitespace-nowrap">
      <p className="will-return-text text-[1.5vmin] font-medium tracking-[0.2em] text-white/80 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
        <span
          className={isFlickering ? "text-flicker inline-block relative" : "inline"}
          data-text={showReturnMessage ? returnMessage : lastDayMessage}
        >
          {showReturnMessage ? (
            returnMessage
          ) : (
            <>
              <span className={`inline transition-opacity duration-1000 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
                {name}
              </span>
              <span className={`inline transition-opacity duration-1000 ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
                {"'s Last Day "}
              </span>
              <span className={`inline transition-opacity duration-1000 ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
                at Freshworks
              </span>
            </>
          )}
        </span>
      </p>
    </div>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";

const DraggableBar: React.FC = () => {
  const [barPosition, setBarPosition] = useState<number>(0);
  const [unitWidth, setUnitWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  const divisions = 200;

  useEffect(() => {
    if (containerRef.current) {
      const newUnitWidth = containerRef.current.offsetWidth / divisions;
      setUnitWidth(newUnitWidth);
    }
  }, [containerRef]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !unitWidth) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let newBarPosition =
      Math.round((e.clientX - containerRect.left) / unitWidth) * unitWidth;

    if (newBarPosition < 0) newBarPosition = 0;
    if (newBarPosition > containerRect.width - barRef.current!.offsetWidth) {
      newBarPosition = containerRect.width - barRef.current!.offsetWidth;
    }

    setBarPosition(newBarPosition);
  };

  return (
    <div
      className="w-72 h-5 bg-gray-300 relative mx-auto mt-20"
      ref={containerRef}
      onClick={handleMouseDown}
    >
      <div
        className="w-5 h-20 bg-blue-500 rounded-t-lg absolute bottom-0 cursor-pointer"
        style={{ left: `${barPosition}px` }}
        ref={barRef}
      ></div>
      <div className="mt-5 text-center">
        Bar Position: {Math.round(barPosition / unitWidth)}
      </div>
    </div>
  );
};

export default DraggableBar;

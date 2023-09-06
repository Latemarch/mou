"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import CategoryBar from "./CategoryBar";
import CategoryAside from "./CategoryAside";

interface Props {
  data: any;
}

export default function HistoryBar({ data }: Props) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dotPosition, setDotPosition] = useState<number>(0);
  const [relativePosition, setRelativePosition] = useState<number>(1920);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current || !dotRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let newDotPosition =
      e.clientX - containerRect.left - dotRef.current.offsetWidth / 2;

    if (newDotPosition < 0) newDotPosition = 0;
    if (newDotPosition > containerRect.width - dotRef.current.offsetWidth) {
      newDotPosition = containerRect.width - dotRef.current.offsetWidth;
    }
    setDotPosition(newDotPosition);
    setRelativePosition(
      Math.floor(
        (newDotPosition / containerRef.current?.getBoundingClientRect().width) *
          100 +
          1920
      )
    );
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    // if (containerRef.current) {
    //   setContainerWidth(containerRef.current.getBoundingClientRect().width);
    // }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    // 이 함수는 window 크기가 변경될 때마다 실행됩니다.
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    // 컴포넌트가 마운트될 때 이벤트 리스너를 추가합니다.
    window.addEventListener("resize", handleResize);

    // 초기 실행: 컴포넌트가 마운트될 때의 너비를 설정합니다.
    handleResize();

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex">
      <CategoryAside data={data} />
      <div className="flex relative gap-1 w-full flex-col py-2">
        {data &&
          data.map((el: any) => (
            <CategoryBar
              key={`${el.name}category`}
              data={el}
              relativePosition={relativePosition}
              containerWidth={containerWidth}
            />
          ))}
        <Slider
          containerRef={containerRef}
          dotRef={dotRef}
          dotPosition={dotPosition}
          containerWidth={containerWidth}
          relativePosition={relativePosition}
          handleMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
}

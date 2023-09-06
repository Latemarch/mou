"use client";
import { RefObject, useEffect, useState } from "react";

type Props = {
  containerRef: RefObject<HTMLDivElement>;
  dotRef: RefObject<HTMLDivElement>;
  dotPosition: number;
  containerWidth?: number | null;
  relativePosition: number;
  handleMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
};
export default function Slider({
  containerRef,
  dotRef,
  dotPosition,
  containerWidth,
  relativePosition,
  handleMouseDown,
}: Props) {
  const [barPosition, setBarPosition] = useState(0);

  useEffect(() => {
    if (containerWidth) {
      const newPosition = ((relativePosition - 1920) / 100) * containerWidth;
      newPosition > 0 && setBarPosition(newPosition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth]);

  useEffect(() => {
    setBarPosition(dotPosition);
  }, [dotPosition]);

  return (
    //컨테이너
    <div className="w-full h-1  absolute bottom-0 mx-auto" ref={containerRef}>
      {/* 막대 위치 */}
      <div
        className="flex w-0 h-1 bg-gray-700 rounded-sm absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
        style={{ left: `${barPosition}px` }}
        onMouseDown={handleMouseDown}
        ref={dotRef}
      >
        {/* 막대 (막대로도 이동 가능) */}
        <div className="absolute -bottom-10 -left-[1.5px] w-[3px] h-[400px] bg-gray-700">
          {/* 핸들 (생략 가능)*/}
          <div className="absolute bottom-0 -left-2 w-5 h-5 bg-gray-700"></div>
        </div>
      </div>
      {/* 좌표 출력 배포에서 삭제 */}
      {containerRef.current && (
        <div className="mt-10">Reliative Position : {relativePosition}</div>
      )}
      <div>Dot Position : {dotPosition}</div>
      <div>
        Container Width : {containerRef.current?.getBoundingClientRect().width}
      </div>
      <div>
        Relative Position (%) :
        {containerRef.current &&
          (
            (dotPosition /
              containerRef.current?.getBoundingClientRect().width) *
            100
          ).toFixed(1)}
        %
      </div>
      {/* 좌표 출력 배포에서 삭제 */}
    </div>
  );
}

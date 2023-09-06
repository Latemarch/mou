"use client";
import uuid from "react-uuid";

export default function CategoryBar({ data, containerWidth }: any) {
  const divisions = 10;
  const interval = containerWidth / divisions;

  const linesXCoordinates = Array.from(
    { length: divisions - 1 },
    (_, index) => (index + 1) * interval
  );

  return (
    <div
      className={`w-full h-[26px] `}
      style={{ backgroundColor: colors[data.name] }}
    >
      {linesXCoordinates.map((el) => (
        <div
          key={`${uuid()}`}
          className="h-[26px] w-[1px] bg-white absolute"
          style={{
            left: `${el}px`,
          }}
        />
      ))}
      {data.points &&
        data.points.map((point: any) => (
          <div key={`${point.tag}point`} className="relative group">
            <div
              className="h-[28px] w-[22px] opacity-0 bg-black absolute -top-[1px] group-hover:opacity-100"
              style={{
                left: `${((point.year - 1920) / 100) * containerWidth - 11}px`,
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            ></div>
            <div
              className="h-[26px] w-[20px] bg-white absolute "
              style={{
                left: `${((point.year - 1920) / 100) * containerWidth - 10}px`,
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            ></div>

            <p
              className="speech-bubble bottom-2  -translate-x-1/2 text-black text-xs p-[2px] opacity-0 group-hover:opacity-100 absolute"
              style={{
                left: `${((point.year - 1920) / 100) * containerWidth}px`,
              }}
            >
              {point.tag}
            </p>
          </div>
        ))}
    </div>
  );
}

const colors: { [key: string]: string } = {
  population: "#D9D9D9",
  housing: "#fbcabb",
  education: "#f9b0c3",
  industryJobs: "#ceb6d9",
  environment: "#c2def3",
  transportation: "#a2c8ec",
  healthWelfare: "#a2e2c3",
  culture: "#f4d06f",
  safety: "#ffedbe",
};

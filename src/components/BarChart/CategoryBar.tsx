"use client";
import uuid from "react-uuid";
import EventMark from "./EventMark";

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
      {containerWidth &&
        data.points.map((point: any) => (
          <EventMark
            key={point.tag}
            left={((point.year - 1920) / 100) * containerWidth}
            tag={point.tag}
          />
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

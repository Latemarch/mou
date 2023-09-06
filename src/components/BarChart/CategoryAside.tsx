"use client";

export default function CategoryAside({ data }: any) {
  return (
    <div className="flex flex-col py-2 h-full w-24 gap-1">
      {data.map((el: any) => (
        <div
          key={`${el.name}`}
          className={`flex w-full h-[26px] text-black pl-1 `}
          style={{ backgroundColor: colors[el.name] }}
        >
          {names[el.name]}
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

const names: { [key: string]: string } = {
  population: "인구",
  housing: "주거",
  education: "교육",
  industryJobs: "산업일자리",
  environment: "환경",
  transportation: "고용",
  healthWelfare: "보건복지",
  culture: "문화",
  safety: "안전",
};

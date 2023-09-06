"use client";
export default function EventMark({
  left,
  tag,
}: {
  left: number;
  tag: string;
}) {
  return (
    <div className="relative group">
      <div
        className="h-[28px] w-[22px] opacity-0 bg-black absolute -top-[1px] group-hover:opacity-100"
        style={{
          left: `${left - 11}px`,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      ></div>
      <div
        className="h-[26px] w-[20px] bg-white absolute "
        style={{
          left: `${left - 10}px`,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      ></div>
      <p
        className="speech-bubble bottom-2  -translate-x-1/2 text-black text-xs p-[2px] opacity-0 group-hover:opacity-100 absolute"
        style={{
          left: `${left}px`,
        }}
      >
        {tag}
      </p>
    </div>
  );
}

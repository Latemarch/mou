"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// 타입 정의
interface Node {
  id: string;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface Link {
  source: string;
  target: string;
}

export default function D3Network() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // 기존 SVG 제거
    d3.select(ref.current).selectAll("svg").remove();
    const data = {
      nodes: [{ id: "A" }, { id: "B" }, { id: "C" }],
      links: [
        { source: "A", target: "B" },
        { source: "B", target: "C" },
        { source: "C", target: "A" },
      ],
    };

    const width = 400;
    const height = 400;

    const svg = d3
      .select("#network")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

 
  }, []);
  return <div ref={ref} className="m-10"></div>;
}

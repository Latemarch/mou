"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function D3Tree() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Remove any existing SVG
    d3.select(ref.current).selectAll("svg").remove();

    interface Datum {
      name: string;
      children?: Array<Datum>;
    }
    const data: Datum = {
      name: "Chaos",
      children: [
        { name: "Eros" },
        { name: "Erebus" },
        { name: "Tartarus" },
        { name: "Mountains" },
        { name: "Pontus" },
        { name: "Uranus" },
        {
          name: "Gaia",
          children: [{ name: "Example1" }, { name: "Example2" }],
        },
      ],
    };

    const width = 500;
    const height = 500;

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + 40)
      .attr("height", height + 40);

    const root = d3.hierarchy<Datum>(data);
    const treeLayout = d3.tree().size([width - 100, height - 100]);
    treeLayout(root);

    const nodes = svg
      .selectAll("circle")
      .data(root.descendants())
      .enter()
      .append("circle")
      .attr("cx", (d) => d.y)
      .attr("cy", (d) => d.x)
      .attr("r", 5);
    svg
      .selectAll("text")
      .data(root.descendants())
      .enter()
      .append("text")
      .attr("x", (d) => d.y)
      .attr("y", (d) => d.x - 10) // 원 위에 텍스트가 위치하도록 조금 위로 옮깁니다.
      .attr("text-anchor", "middle") // 텍스트를 중앙 정렬합니다.
      .text((d) => d.data.name);

    const linkGenerator = d3
      .linkHorizontal()
      .x((d) => d.y)
      .y((d) => d.x);

    const links = svg
      .selectAll("path")
      .data(root.links())
      .enter()
      .append("path")
      .attr("d", linkGenerator)
      .attr("fill", "none")
      .attr("stroke", "black");
  });

  return <div ref={ref} className="m-10"></div>;
}

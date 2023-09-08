"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function D3Tree() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Remove any existing SVG
    d3.select(ref.current).selectAll("svg").remove();

    type Point = {
      x: number;
      y: number;
    };

    type Link = {
      source: Point;
      target: Point;
    };

    const canvas = d3
      .select(ref.current)
      .append("svg")
      .attr("width", 1000)
      .attr("height", 1000);

    // Use the types when defining the diagonal

    const pathData = d3
      .linkVertical<Link, Point>()
      .x((d) => d.x)
      .y((d) => d.y)({
      source: { x: 10, y: 10 },
      target: { x: 300, y: 300 },
    });

    canvas
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("d", pathData);
  });

  return <div ref={ref} className="m-10"></div>;
}

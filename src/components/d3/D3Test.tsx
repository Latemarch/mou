"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function D3Chart() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Remove any existing SVG
    d3.select(ref.current).selectAll("svg").remove();
    const data = [10, 20, 50, 30, 40, 15];

    const yScale = d3.scaleLinear([0, 60], [0, 300]);

    const colorScale = d3.scaleLinear([0, 60], ["yellow", "blue"]);

    const canvas = d3
      .select(ref.current) //
      .append("svg")
      .attr("width", 1500)
      .attr("height", 1500)
      .attr("transform", "translate(20,50)");

    canvas //
      .selectAll("circle")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", (d) => colorScale(d))
      .attr("width", 20)
      .attr("x", (d, i) => i * 30 + 25)
      .attr("y", 20)
      .attr("height", 0)
      .transition()
      .duration(1000)
      .attr("height", (d) => yScale(d));

    const coordinate = [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 },
    ];

    const line = d3
      .line<{ x: number; y: number }>()
      .x(function (d) {
        return d.x;
      })
      .y(function (d) {
        return d.y;
      });

    console.log("line", line);
    canvas
      .append("g")
      .attr("transform", "translate(100,100)")
      .selectAll("path")
      .data([coordinate])
      .enter()
      .append("path")
      .attr("d", line);

    const yaxis = d3.axisLeft(yScale).ticks(5).tickFormat(d3.format("+d"));
    canvas.append("g").attr("transform", "translate(30,20)").call(yaxis);
  });

  return <div ref={ref} className="m-10"></div>;
}

"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function D3Pie() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Remove any existing SVG
    d3.select(ref.current).selectAll("svg").remove();
    type Datum = { name: string; value: number };
    const data: Array<Datum> = [
      { name: "A", value: 10 },
      { name: "B", value: 20 },
      { name: "C", value: 50 },
      { name: "D", value: 30 },
      { name: "E", value: 40 },
      { name: "F", value: 15 },
    ];

    const width = 500;
    // const height = 1500;

    const height = Math.min(width, 500);
    const radius = Math.min(width, height) / 2;

    const arc = d3
      .arc<d3.PieArcDatum<Datum>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius - 1);

    const pie = d3
      .pie<Datum>()
      .padAngle(1 / radius)
      .sort(null)
      .value((d) => d.value);

    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.name))
      .range(
        d3
          .quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length)
          .reverse()
      );

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    svg
      .append("g")
      .selectAll()
      .data(pie(data))
      .join("path")
      .attr("fill", (d) => color(d.data.name) as string)
      .attr("d", arc)
      .append("title")
      .text((d) => `${d.data.name}: ${d.data.value.toLocaleString()}`);

    svg
      .append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 15)
      .attr("text-anchor", "middle")
      .selectAll()
      .data(pie(data))
      .join("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .call((text) =>
        text
          .append("tspan")
          .attr("y", "-0.5rem")
          .attr("font-weight", "bold")
          .text((d) => d.data.name)
      )
      .call((text) =>
        text
          .filter((d) => d.endAngle - d.startAngle > 0.25)
          .append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text((d) => d.data.value.toLocaleString("en-US"))
      );
  });

  return <div ref={ref} className="m-10"></div>;
}

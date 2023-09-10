'use client'
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export default function D3Tree() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    // Remove any existing SVG
    d3.select(ref.current).selectAll('svg').remove()

    type Point = {
      x: number
      y: number
    }

    type Link = {
      source: Point
      target: Point
    }

    const canvas = d3
      .select(ref.current)
      .append('svg')
      .attr('width', 1000)
      .attr('height', 1000)

    // Use the types when defining the diagonal

    const data = {
      name: 'Eve',
      children: [
        { name: 'Cain' },
        { name: 'Seth', children: [{ name: 'Enos' }, { name: 'Noam' }] },
        { name: 'Abel' },
        { name: 'Awan', children: [{ name: 'Enoch' }] },
        { name: 'Azura' },
      ],
    }

    const treeLayout = d3.tree().size([400, 500])
    const root = d3.hierarchy(data)
    const links = treeLayout(root).links()
    const linkPathGenerator = d3
      .linkHorizontal()
      .x((d) => d.y)
      .y((d) => d.x)
    canvas
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('d', linkPathGenerator)

    console.log(root.descendants())
    canvas
      .selectAll('text')
      .data(root.descendants())
      .enter()
      .append('text')
      .attr('x', (d) => d.y)
      .attr('y', (d) => d.x)
      .attr('dy', '0.32em') // (*)
      .text((d) => d.data.name)
    // canvas
    //   .append('path')
    //   .attr('fill', 'none')
    //   .attr('stroke', 'black')
    //   .attr('d', pathData)
  })

  return <div ref={ref} className="m-10"></div>
}

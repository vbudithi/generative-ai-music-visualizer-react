"use client";

import { useRef, useState, useEffect } from "react";
import p5 from "p5";

export default function Canvas({ note }) {
    let canvasRef = useRef(null);
    const [color, setColor] = useState([0, 255, 0]);
    const canvasWidth = 800;
    const canvasHeight = 400;

    useEffect(() => {
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(canvasWidth, canvasHeight);
                p.clear();
            };
            p.draw = () => {
                p.fill(color);
                p.ellipse(2, 100, 100, 100)
            };
        };
        const canvas = new p5(sketch, canvasRef.current)
        return () => {
            canvas.remove();
        }

    }, [note, color]);

    return <div ref={canvasRef}></div>
}
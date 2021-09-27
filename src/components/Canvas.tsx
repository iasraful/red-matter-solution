import React, { useRef, useEffect } from "react";
import "./canvas.module.css";

const Canvas: React.FC<{}> = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let context = canvasCtxRef.current;

      context!.fillStyle = "yellow";
      context!.fillRect(50, 50, 200, 100);
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;

// FallingBlossom.tsx
import React, { useEffect, useRef } from "react";

const FallingBlossom: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const TOTAL = 40;
    const petalArray: Petal[] = [];

    const petalImg = new Image();
    petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";
    petalImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal(canvas, petalImg));
      }
      render();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
      petalArray.forEach((petal) => petal.animate(ctx)); // Pass only the ctx argument
      window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", // Fixed position to overlay the entire screen
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10, // Set z-index above the homepage content
        pointerEvents: "none", // Ensure interactions pass through to the content
      }}
    ></canvas>
  );
};

class Petal {
  private x: number;
  private y: number;
  private w: number;
  private h: number;
  private opacity: number;
  private flip: number;
  private xSpeed: number;
  private ySpeed: number;
  private flipSpeed: number;
  private canvas: HTMLCanvasElement;
  private petalImg: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, petalImg: HTMLImageElement) {
    this.canvas = canvas;
    this.petalImg = petalImg;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 2 - canvas.height;
    this.w = 25 + Math.random() * 15;
    this.h = 20 + Math.random() * 10;
    this.opacity = this.w / 40;
    this.flip = Math.random();

    // Increased speed for faster movement
    this.xSpeed = 1 + Math.random() * 2; // Previously 0.5 + Math.random() * 1
    this.ySpeed = 0.8 + Math.random() * 1.5; // Previously 0.3 + Math.random() * 0.7
    this.flipSpeed = Math.random() * 0.03;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.y > this.canvas.height || this.x > this.canvas.width) {
      this.x = -this.petalImg.width;
      this.y = Math.random() * this.canvas.height * 2 - this.canvas.height;
      this.xSpeed = 1 + Math.random() * 2; // Reset speed on reposition
      this.ySpeed = 0.8 + Math.random() * 1.5; // Reset speed on reposition
      this.flip = Math.random();
    }
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(
      this.petalImg,
      this.x,
      this.y,
      this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
      this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
    );
  }

  animate(ctx: CanvasRenderingContext2D) {
    this.x += this.xSpeed; // Faster horizontal movement
    this.y += this.ySpeed; // Faster vertical movement
    this.flip += this.flipSpeed;
    this.draw(ctx);
  }
}

export default FallingBlossom;

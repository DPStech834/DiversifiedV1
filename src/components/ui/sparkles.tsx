import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  className?: string;
}

export const SparklesCore: React.FC<SparklesProps> = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 100,
  className,
}) => {
  const [init, setInit] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<Array<{x: number, y: number, dx: number, dy: number, size: number}>>([]);
  const animationFrameId = useRef<number>();
  const lastTime = useRef<number>(0);

  useEffect(() => {
    if (!init) {
      setInit(true);
    }

    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d');
    }

    initCanvas();
    animate();
    window.addEventListener('resize', initCanvas);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', initCanvas);
    };
  }, [init]);

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      const { width, height } = canvasContainerRef.current.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      particles.current = [];
      const particleCount = Math.floor((width * height) / (10000 / particleDensity));
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          dx: (Math.random() - 0.5) * speed,
          dy: (Math.random() - 0.5) * speed,
          size: Math.random() * (maxSize - minSize) + minSize,
        });
      }
    }
  };

  const drawParticles = () => {
    if (!context.current || !canvasRef.current) return;

    context.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    context.current.fillStyle = particleColor;

    particles.current.forEach((particle) => {
      if (!context.current || !canvasRef.current) return;

      context.current.beginPath();
      context.current.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.current.fill();

      particle.x += particle.dx;
      particle.y += particle.dy;

      if (particle.x < 0 || particle.x > canvasRef.current.width) particle.dx *= -1;
      if (particle.y < 0 || particle.y > canvasRef.current.height) particle.dy *= -1;
    });
  };

  const animate = (timestamp = 0) => {
    const elapsed = timestamp - lastTime.current;
    
    if (elapsed > 1000 / 60) { // Cap at ~60 FPS
      drawParticles();
      lastTime.current = timestamp;
    }
    
    animationFrameId.current = requestAnimationFrame(animate);
  };

  return (
    <div ref={canvasContainerRef} className={cn("h-full w-full", className)}>
      <canvas
        ref={canvasRef}
        id={id}
        style={{
          background,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
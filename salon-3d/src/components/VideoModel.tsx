import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function VideoModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const frameCount = 240;
    const currentFrame = (index: number) =>
      `/frames/frame_${(index + 1).toString().padStart(4, '0')}.png`;

    const images: HTMLImageElement[] = [];
    const sequence = {
      frame: 0
    };

    // Preload all images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // Only set src after defining onload for the first image if needed
      img.src = currentFrame(i);
      images.push(img);
    }

    function render() {
      if (images[Math.round(sequence.frame)]) {
        const img = images[Math.round(sequence.frame)];

        // Wait for image to load before drawing
        if (!img.complete) return;

        // Clear canvas
        context!.clearRect(0, 0, canvas!.width, canvas!.height);

        // Calculate cover object-fit
        const canvasRatio = canvas!.width / canvas!.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas!.width;
          drawHeight = canvas!.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas!.height - drawHeight) / 2;
        } else {
          drawHeight = canvas!.height;
          drawWidth = canvas!.height * imgRatio;
          offsetY = 0;
          offsetX = (canvas!.width - drawWidth) / 2;
        }

        context!.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    }

    // Draw the first frame once it loads
    images[0].onload = render;

    // GSAP ScrollTrigger
    const st = gsap.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        // Use requestAnimationFrame for smoother rendering
        requestAnimationFrame(render);
      },
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      st.kill();
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}

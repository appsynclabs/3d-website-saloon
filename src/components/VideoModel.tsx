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
          // Default: scale height to canvas.height, which stretches width
          drawHeight = canvas!.height;
          // Apply a scale factor for portrait phones to avoid zooming in too intensely
          const isMobilePortrait = window.innerWidth < 768 && canvasRatio < 1;
          if (isMobilePortrait) {
            // Shrink the height to 55% of the screen so the width becomes much narrower
            drawHeight = canvas!.height * 0.55;
          }
          drawWidth = drawHeight * imgRatio;
          offsetY = (canvas!.height - drawHeight) / 2;
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
      const dpr = window.devicePixelRatio || 1;
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
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
    <>
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[var(--color-red-500)]/20 md:bg-[var(--color-red-500)]/30 blur-[100px] md:blur-[160px] rounded-full" 
        style={{ zIndex: -2, pointerEvents: 'none' }}
      />
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
    </>
  );
}

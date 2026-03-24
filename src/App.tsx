
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Overlay from './components/Overlay';
import VideoModel from './components/VideoModel';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full text-white bg-transparent">
      {/* 3D Background */}
      <div className="canvas-container">
        <VideoModel />
      </div>

      {/* HTML Scroll Overlay */}
      <Overlay />
    </div>
  );
}

export default App;

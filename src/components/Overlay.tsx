import { CalendarClock, MapPin, Scissors, Star } from "lucide-react";

export default function Overlay() {
  const handleReserveModal = () => {

  }
  return (
    <div className="w-full relative z-10 pointer-events-none">
      {/* Sections must have pointer-events-auto for interactions */}

      <section className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
          MD. ZEN <span className="text-[var(--color-red-500)]">REDS</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray-300 max-w-2xl px-2">
          The pinnacle of men's grooming & style. Experience precision.
        </p>
        <p className="mt-8 uppercase text-xs md:text-sm tracking-[0.3em] animate-pulse text-gray-400">
          Scroll to explore
        </p>
      </section>

      <section className="min-h-[100dvh] flex items-center justify-start px-6 md:px-24">
        <div className="max-w-lg">
          <Scissors className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-red-500)] mb-4 md:mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6 drop-shadow-md">Mastercraft & Precision</h2>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed drop-shadow-sm">
            Every cut is an architectural masterpiece. We blend traditional techniques with avant-garde styling, delivering a look that is distinctly yours.
          </p>
        </div>
      </section>

      <section className="min-h-[100dvh] flex items-center justify-end px-6 md:px-24 text-right">
        <div className="max-w-lg">
          <Star className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-red-500)] mb-4 md:mb-6 ml-auto" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6 drop-shadow-md">Premium Atmosphere</h2>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed drop-shadow-sm">
            Step into our dark, sleek studio. From curated music to fine beverages, every detail is designed for your ultimate relaxation.
          </p>
        </div>
      </section>

      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 md:px-24">
        <div className="max-w-4xl w-full bg-[#0a0a0a]/70 p-6 sm:p-8 md:p-12 backdrop-blur-md border border-white/5 shadow-2xl rounded-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-8 md:mb-12 drop-shadow-md text-center">Our Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-8 gap-x-12 text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray-300 w-fit mx-auto">
            <li className="flex items-center gap-4 hover:text-white transition-colors duration-300">
              <span className="text-[var(--color-red-500)] text-3xl leading-none -mt-1">/</span> Hair Smoothening
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors duration-300">
              <span className="text-[var(--color-red-500)] text-3xl leading-none -mt-1">/</span> Hair Carotene
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors duration-300">
              <span className="text-[var(--color-red-500)] text-3xl leading-none -mt-1">/</span> Hair Colour
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors duration-300">
              <span className="text-[var(--color-red-500)] text-3xl leading-none -mt-1">/</span> Hair Treatment
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors duration-300 md:col-span-2 md:justify-center mt-2 border-t border-white/10 pt-6 md:pt-8">
              <span className="text-[var(--color-red-500)] text-3xl leading-none -mt-1">/</span> Spa Facial
            </li>
          </ul>
        </div>
      </section>

      <section className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 py-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 md:mb-8 drop-shadow-md">Book Your Chair</h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10 md:mb-12">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="text-[var(--color-red-500)] w-6 h-6 md:w-8 md:h-8" />
            <p className="text-gray-300 font-medium text-sm md:text-base px-4">Shop Number 605, Sector 71, Sahibzada Ajit Singh Nagar</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CalendarClock className="text-[var(--color-red-500)] w-6 h-6 md:w-8 md:h-8" />
            <p className="text-gray-300 font-medium text-sm md:text-base">Open Mon - Sun, 7am - 9pm</p>
          </div>
        </div>
        <button onClick={handleReserveModal} className="pointer-events-auto bg-[var(--color-red-500)] text-black px-8 py-3 md:px-12 md:py-4 text-base md:text-lg font-bold tracking-widest uppercase hover:bg-yellow-500 transition-colors duration-300 shadow-xl shadow-yellow-900/20">
          Reserve Now
        </button>
      </section>
    </div>
  );
}

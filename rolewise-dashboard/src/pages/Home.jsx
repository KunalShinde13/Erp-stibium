import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1505691723518-36a1f0bf4e0c",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  ];

  const [index, setIndex] = useState(0);

  // Background loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Easiest way to find your dream home
        </h1>

        <div className="flex bg-white rounded-full overflow-hidden shadow-lg max-w-md w-full">
          <input
            type="text"
            placeholder="Your ZIP code or City, e.g. New York"
            className="flex-grow p-3 text-gray-800 outline-none"
          />
          <button className="bg-teal-700 hover:bg-teal-800 px-6 text-white font-semibold">
            Search
          </button>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="relative z-10 bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🏘️ Featured Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="Luxury Villa"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Luxury Villa in Mumbai</h3>
              <p className="text-gray-600 mb-3">4 BHK • Sea View • Fully Furnished</p>
              <p className="text-teal-700 font-bold">₹2.5 Cr</p>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Modern Apartment"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Modern Apartment in Pune</h3>
              <p className="text-gray-600 mb-3">3 BHK • Near IT Park • Gated Community</p>
              <p className="text-teal-700 font-bold">₹90 Lakh</p>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1599423300746-b62533397364"
              alt="Beach House"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Beach House in Goa</h3>
              <p className="text-gray-600 mb-3">2 BHK • Ocean View • Private Garden</p>
              <p className="text-teal-700 font-bold">₹1.8 Cr</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-800 transition">
            View More Properties
          </button>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#1A0F0A] text-[#FDF5E6] font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1A0F0A] via-transparent to-transparent opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1A0F0A] via-[#1A0F0A]/80 to-transparent pointer-events-none"></div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-120px)] px-8 md:px-16 lg:px-24 pb-20">
        <div className="max-w-2xl mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide text-[#E77D13]">
            Welcome!
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.15] mb-8 tracking-tight text-white drop-shadow-md">
            We serve the richest coffee <br className="hidden md:block"/>
            in the city!
          </h1>
          
          <button className="px-10 py-3.5 bg-[#E77D13] text-white rounded-full font-bold hover:bg-[#c96a0d] hover:shadow-lg hover:shadow-[#E77D13]/30 transition-all duration-300 text-sm md:text-base tracking-wide border border-[#E77D13]">
            Order Now
          </button>
        </div>
      </main>
    </div>
  );
}

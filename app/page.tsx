import Link from "next/link";
import Image from "next/image";

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
      <nav className="relative z-20 w-full h-20 md:h-24 border-b border-white/5 bg-[#1A0F0A]/60 backdrop-blur-md">
        {/* Adjusted padding: symmetrical and professional */}
        <div className="w-full h-full flex items-center justify-between px-8 md:px-16 lg:px-24">
          {/* Left: Logo & Brand Name (Tasteful modern overhang) */}
          <div className="w-1/3 flex justify-start items-center relative h-full">
            <Link href="/" className="absolute top-1/2 -translate-y-1/2 group transition-transform hover:scale-105 duration-300 z-30 flex items-center gap-1">
              <Image 
                src="/logo1.png" 
                alt="Coffee Expedisi Logo" 
                width={100} 
                height={100} 
                className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:rotate-[-5deg]"
                priority
              />
              <div className="hidden lg:flex flex-col justify-center pt-1 -ml-1">
                <span className="text-2xl font-black tracking-widest text-white uppercase leading-none drop-shadow-lg">
                  Coffee
                </span>
                <span className="text-sm font-bold tracking-[0.35em] text-[#E77D13] uppercase mt-1.5 drop-shadow-md pl-1">
                  Expedisi
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Main Links (Enlarged) */}
          <div className="w-1/3 hidden md:flex justify-center h-full gap-12 lg:gap-20 text-base lg:text-lg font-bold tracking-widest items-center uppercase">
            <Link href="#" className="relative group h-full flex items-center">
              <span className="hover:text-[#E77D13] transition-colors">Home</span>
              <span className="absolute bottom-[28%] left-0 w-0 h-[2px] bg-[#E77D13] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group h-full flex items-center">
              <span className="hover:text-[#E77D13] transition-colors">Shop</span>
              <span className="absolute bottom-[28%] left-0 w-0 h-[2px] bg-[#E77D13] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group h-full flex items-center">
              <span className="hover:text-[#E77D13] transition-colors">About</span>
              <span className="absolute bottom-[28%] left-0 w-0 h-[2px] bg-[#E77D13] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right: Utilities */}
          <div className="w-1/3 flex justify-end items-center h-full gap-5 lg:gap-6 text-xs lg:text-sm font-bold tracking-wider uppercase">
            <div className="flex items-center gap-5 lg:gap-6">
              <button className="hover:text-[#E77D13] transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button className="relative hover:text-[#E77D13] transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-[#E77D13] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-md border border-[#1A0F0A]">0</span>
              </button>
            </div>

            <Link href="#" className="hidden lg:flex items-center justify-center px-6 py-2.5 bg-[#6b3512] text-white rounded-full hover:bg-[#4f270d] transition-all duration-300 normal-case font-medium text-sm ml-2">
              Sign in
            </Link>
          </div>
        </div>
      </nav>

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

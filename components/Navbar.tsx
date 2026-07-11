import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full h-20 md:h-24 border-b border-white/5 bg-[#1A0F0A]/80 backdrop-blur-md">
      <div className="w-full h-full flex items-center justify-between px-8 md:px-16 lg:px-24">
        {/* Left: Logo */}
        <div className="w-1/3 flex justify-start items-center relative h-full">
          <Link href="/" className="absolute top-1/2 -translate-y-1/2 transition-transform hover:scale-105 duration-300 z-30">
            <Image 
              src="/logo1.png" 
              alt="Coffee Expedisi Logo" 
              width={120} 
              height={120} 
              className="object-contain drop-shadow-2xl"
              priority
            />
          </Link>
        </div>

        {/* Center: Main Links */}
        <div className="w-1/3 hidden md:flex justify-center h-full gap-12 lg:gap-20 text-base lg:text-lg font-bold tracking-widest items-center uppercase text-[#FDF5E6]">
          <Link href="/" className="relative group h-full flex items-center">
            <span className="hover:text-[#E77D13] transition-colors">Home</span>
            <span className="absolute bottom-[28%] left-0 w-0 h-[2px] bg-[#E77D13] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#" className="relative group h-full flex items-center">
            <span className="hover:text-[#E77D13] transition-colors">Shop</span>
            <span className="absolute bottom-[28%] left-0 w-0 h-[2px] bg-[#E77D13] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative group h-full flex items-center">
            <span className="hover:text-[#E77D13] transition-colors">About</span>
            <span className="absolute bottom-[28%] left-0 w-0 h-[2px] bg-[#E77D13] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right: Utilities */}
        <div className="w-1/3 flex justify-end items-center h-full gap-6 lg:gap-8 text-xs lg:text-sm font-bold tracking-wider uppercase text-[#FDF5E6]">
          <Link href="#" className="hidden lg:flex items-center justify-center px-5 py-2 border-2 border-[#E77D13] text-[#E77D13] rounded-full hover:bg-[#E77D13] hover:text-[#FDF5E6] transition-all duration-300">
            Login
          </Link>
          
          <div className="flex items-center gap-6">
            <button className="hover:text-[#E77D13] transition-colors transform hover:scale-110 duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button className="relative hover:text-[#E77D13] transition-colors transform hover:scale-110 duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-[#E77D13] text-[#FDF5E6] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-md border border-[#1A0F0A]">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

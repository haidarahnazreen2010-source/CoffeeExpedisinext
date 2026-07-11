"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { formatIDR } from "@/utils/formatCurrency";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { cart, isCartOpen, setIsCartOpen, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <>
      <nav className="relative z-20 w-full h-20 md:h-24 border-b border-white/5 bg-[#1A0F0A]/60 backdrop-blur-md">
        <div className="w-full h-full flex items-center justify-between px-8 md:px-16 lg:px-24">
          {/* Left: Logo & Brand Name */}
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

          {/* Center: Main Links */}
          <div className="w-1/3 hidden md:flex justify-center h-full gap-12 lg:gap-20 text-base lg:text-lg font-bold tracking-widest items-center uppercase">
            <Link href="/" className="relative group h-full flex items-center">
              <span className={`transition-colors ${pathname === '/' ? 'text-[#E77D13]' : 'hover:text-[#E77D13]'}`}>Home</span>
              <span className={`absolute bottom-[28%] left-0 h-[2px] bg-[#E77D13] transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <div className="relative group h-full flex items-center">
              <Link href="/shop" className="relative h-full flex items-center">
                <span className={`transition-colors ${pathname.startsWith('/shop') ? 'text-[#E77D13]' : 'group-hover:text-[#E77D13]'}`}>Shop</span>
                <span className={`absolute bottom-[28%] left-0 h-[2px] bg-[#E77D13] transition-all duration-300 ${pathname.startsWith('/shop') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-[#1A0F0A]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2 w-48 flex flex-col">
                  <Link href="/shop/beans" className="px-6 py-3 text-sm text-white hover:text-[#E77D13] hover:bg-white/5 transition-colors">
                    Biji Kopi
                  </Link>
                  <Link href="/shop/drinks" className="px-6 py-3 text-sm text-white hover:text-[#E77D13] hover:bg-white/5 transition-colors">
                    Minuman Kopi
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="relative group h-full flex items-center">
              <span className={`transition-colors ${pathname === '/about' ? 'text-[#E77D13]' : 'hover:text-[#E77D13]'}`}>About</span>
              <span className={`absolute bottom-[28%] left-0 h-[2px] bg-[#E77D13] transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          {/* Right: Utilities */}
          <div className="w-1/3 flex justify-end items-center h-full gap-5 lg:gap-6 text-xs lg:text-sm font-bold tracking-wider uppercase">
            <div className="flex items-center gap-5 lg:gap-6">
              <div className="relative flex items-center">
                <div className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${isSearchOpen ? 'w-32 md:w-48 lg:w-56 opacity-100 mr-2' : 'w-0 opacity-0'}`}>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:outline-none focus:border-[#E77D13] pb-1 text-sm lg:text-base px-1 font-medium normal-case"
                    ref={(input) => { if (input && isSearchOpen) input.focus(); }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setIsSearchOpen(false);
                    }}
                  />
                </div>
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`hover:text-[#E77D13] transition-colors transform hover:scale-110 duration-200 z-10 flex-shrink-0 ${isSearchOpen ? 'text-[#E77D13]' : ''}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <button onClick={() => setIsCartOpen(true)} className="relative hover:text-[#E77D13] transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#E77D13] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-md border border-[#1A0F0A]">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <Link href="#" className="hidden lg:flex items-center justify-center px-6 py-2.5 bg-[#6b3512] text-white rounded-full hover:bg-[#4f270d] transition-all duration-300 normal-case font-medium text-sm ml-2">
              Sign in
            </Link>
          </div>
        </div>
      </nav>

      {/* Cart Slide-over */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 translate-x-0">
              <div className="h-full flex flex-col bg-[#1A0F0A] shadow-2xl border-l border-white/10">
                <div className="px-6 py-6 border-b border-white/10 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white tracking-widest uppercase">Keranjang Anda</h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-white/50 hover:text-[#E77D13] transition-colors">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-white/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p>Keranjang masih kosong</p>
                    </div>
                  ) : (
                    <ul className="space-y-6">
                      {cart.map((item) => (
                        <li key={item.id} className="flex gap-4 border-b border-white/5 pb-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-white/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                          </div>

                          <div className="flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-bold text-white">
                                <h3>{item.name}</h3>
                                <p className="ml-4 text-[#E77D13]">{formatIDR(item.price * item.quantity)}</p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center border border-white/20 rounded-md">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-white/10 text-white">-</button>
                                <span className="px-3 py-1 text-white border-l border-r border-white/20">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-white/10 text-white">+</button>
                              </div>

                              <button onClick={() => removeFromCart(item.id)} type="button" className="font-medium text-white/50 hover:text-red-500 transition-colors">
                                Hapus
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t border-white/10 px-6 py-6 bg-[#2A1B12]/30">
                    <div className="flex justify-between text-lg font-bold text-white mb-6">
                      <p>Total</p>
                      <p className="text-[#E77D13]">{formatIDR(cartTotal)}</p>
                    </div>
                    <button className="w-full flex items-center justify-center rounded-xl bg-[#E77D13] px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-[#c96a0d] transition-colors">
                      Checkout Sekarang
                    </button>
                    <div className="mt-4 flex justify-center text-center text-sm text-white/50">
                      <p>
                        atau{' '}
                        <button onClick={() => setIsCartOpen(false)} className="font-medium text-[#E77D13] hover:text-[#c96a0d]">
                          Lanjut Belanja &rarr;
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

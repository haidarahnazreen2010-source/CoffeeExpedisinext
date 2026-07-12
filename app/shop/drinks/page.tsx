"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import { formatIDR } from "@/utils/formatCurrency";

import { products as allProducts } from "@/data/products";
import Link from "next/link";

export default function DrinksShop() {
  const { addToCart } = useCart();
  const products = allProducts.filter(p => p.category === 'drinks');

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#FDF5E6] font-sans">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative py-16 md:py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1A0F0A] to-[#2A1B12] opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            Minuman <span className="text-[#E77D13]">Kopi</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Nikmati racikan minuman kopi segar buatan barista ahli kami. Dari espresso klasik hingga kreasi manis yang menggugah selera.
          </p>
        </div>
      </div>

      {/* Shop Grid */}
      <main className="px-8 md:px-16 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-[#2A1B12]/40 rounded-2xl overflow-hidden border border-white/5 hover:border-[#E77D13]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E77D13]/10 transform hover:-translate-y-2">
              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden bg-black/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B12] to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-2xl font-black text-white tracking-wider">{formatIDR(product.price)}</span>
                  <button 
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                    className="bg-[#E77D13] hover:bg-[#c96a0d] text-white p-3 rounded-full transition-colors duration-300 shadow-lg group-hover:animate-pulse z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-[#E77D13] transition-colors">{product.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                <Link 
                  href={`/product/${product.id}`}
                  className="w-full py-3 px-4 border border-[#E77D13]/50 text-[#E77D13] rounded-xl font-bold tracking-wider uppercase text-sm hover:bg-[#E77D13] hover:text-white transition-all duration-300 text-center block"
                >
                  Detail Produk
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

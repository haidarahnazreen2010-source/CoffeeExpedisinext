"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
      className="w-full py-4 bg-[#E77D13] text-white rounded-xl font-bold tracking-widest uppercase hover:bg-[#c96a0d] hover:shadow-lg hover:shadow-[#E77D13]/30 transition-all duration-300 flex items-center justify-center gap-3 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Tambah ke Keranjang
    </button>
  );
}

import Navbar from "@/components/Navbar";
import { products } from "@/data/products";
import { formatIDR } from "@/utils/formatCurrency";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.id === parseInt(resolvedParams.id));
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#FDF5E6] font-sans">
      <Navbar />
      
      <main className="px-8 md:px-16 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto">
        <Link href={product.category === 'beans' ? "/shop/beans" : "/shop/drinks"} className="inline-flex items-center text-[#E77D13] hover:text-[#c96a0d] transition-colors mb-10 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Menu
        </Link>
        
        <div className="bg-[#2A1B12]/40 rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative bg-black/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] to-transparent opacity-60 md:hidden"></div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 w-fit">
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{product.category === 'beans' ? 'Biji Kopi' : 'Minuman'}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">{product.name}</h1>
            <p className="text-[#E77D13] text-3xl font-black tracking-wider mb-8">{formatIDR(product.price)}</p>
            
            <div className="space-y-4 mb-10 flex-1">
              <p className="text-white/90 font-medium text-lg border-b border-white/10 pb-4">
                {product.description}
              </p>
              <p className="text-white/60 leading-relaxed font-light pt-2">
                {product.longDescription || product.description}
              </p>
            </div>
            
            {/* Client Component for Add to Cart Button */}
            <ProductDetailClient product={product} />
          </div>
        </div>
      </main>
    </div>
  );
}

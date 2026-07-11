import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#1A0F0A] text-[#FDF5E6] font-sans overflow-hidden">
      {/* Shared Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop')` }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1A0F0A] via-[#1A0F0A]/50 to-transparent"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
            Our <span className="text-[#E77D13]">Story</span>
          </h1>
          <p className="text-lg md:text-xl text-[#FDF5E6]/90 leading-relaxed font-light">
            Born from a passion for the perfect brew, Coffee Expedisi is on a mission to bring the world's finest, ethically sourced beans straight to your cup. Every sip is a journey.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-[#1A0F0A] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E77D13] mb-4">What Drives Us</h2>
            <div className="w-24 h-1 bg-[#E77D13] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-[#E77D13]/20 rounded-full flex items-center justify-center mb-6 text-[#E77D13] group-hover:scale-110 group-hover:bg-[#E77D13] group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Sourcing</h3>
              <p className="text-[#FDF5E6]/70 leading-relaxed">
                We travel across continents to partner with local farmers, ensuring only the highest quality beans make it to our roastery.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-[#E77D13]/20 rounded-full flex items-center justify-center mb-6 text-[#E77D13] group-hover:scale-110 group-hover:bg-[#E77D13] group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Artisan Roasting</h3>
              <p className="text-[#FDF5E6]/70 leading-relaxed">
                Our master roasters treat every batch with precision and care, unlocking the unique flavor profiles hidden within each bean.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-[#E77D13]/20 rounded-full flex items-center justify-center mb-6 text-[#E77D13] group-hover:scale-110 group-hover:bg-[#E77D13] group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community First</h3>
              <p className="text-[#FDF5E6]/70 leading-relaxed">
                From fair trade practices with our farmers to creating a welcoming space for our customers, community is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin / Process Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E77D13]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop"
                alt="Coffee beans roasting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#E77D13] rounded-3xl -z-0 opacity-20"></div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              From Seed to <span className="text-[#E77D13]">Cup</span>
            </h2>
            <p className="text-[#FDF5E6]/80 text-lg mb-6 leading-relaxed">
              We believe that great coffee doesn't happen by accident. It's the result of countless intentional decisions made along a very long chain, starting with the soil and ending in your mug.
            </p>
            <p className="text-[#FDF5E6]/80 text-lg mb-10 leading-relaxed">
              That's why we maintain full transparency in our supply chain. When you drink our coffee, you're tasting the hard work of dedicated farmers, skilled millers, and passionate roasters.
            </p>
            
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-[#E77D13] text-white rounded-full font-bold hover:bg-[#c96a0d] hover:shadow-lg hover:shadow-[#E77D13]/30 transition-all duration-300">
                Explore Our Coffees
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA (Minimal for About Page) */}
      <footer className="py-16 text-center border-t border-white/10 relative z-10 bg-[#1A0F0A]">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to start your expedition?</h3>
        <p className="text-[#FDF5E6]/60 mb-8 max-w-lg mx-auto">Join our community and get access to exclusive roasts, brewing guides, and more.</p>
        <button className="px-10 py-3.5 bg-transparent text-[#E77D13] rounded-full font-bold hover:bg-[#E77D13] hover:text-white transition-all duration-300 border-2 border-[#E77D13]">
          Visit the Shop
        </button>
      </footer>
    </div>
  );
}

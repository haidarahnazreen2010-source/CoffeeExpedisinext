import Navbar from "@/components/Navbar";

export const metadata = {
  title: " About - Coffee Expedisi",
  description: "Learn more about our coffee and story.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#1A0F0A] text-[#FDF5E6] font-sans overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Background Image with Overlay for Header */}
      <div className="relative h-[60vh] w-full pt-24">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop')` }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1A0F0A] to-transparent opacity-100 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1A0F0A]/80 to-transparent pointer-events-none h-32"></div>
        
        {/* Header Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4 tracking-tight text-white drop-shadow-lg">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-[#E77D13] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium tracking-wide">
            Passionate about bringing the finest beans from around the world straight to your cup.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop" 
              alt="Coffee beans" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#1A0F0A]/20 group-hover:bg-transparent transition-all duration-500"></div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
                The Coffee <span className="text-[#E77D13]">Expedisi</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-white/80 leading-relaxed text-base md:text-lg">
              <p>
                Started in 2024, Coffee Expedisi was born from a simple idea: coffee is more than just a drink; it's an experience, a journey. 
                We travel to remote corners of the globe to discover unique flavor profiles and bring them back to you.
              </p>
              <p>
                Every bean is carefully selected, roasted to perfection in small batches, and crafted with love by our expert baristas. 
                Whether you prefer a bold espresso or a creamy latte, we promise a cup that will awaken your senses and brighten your day.
              </p>
            </div>
            
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">50<span className="text-[#E77D13]">+</span></h3>
                <p className="text-white/60 font-medium tracking-wider uppercase text-xs md:text-sm">Coffee Varieties</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">100<span className="text-[#E77D13]">%</span></h3>
                <p className="text-white/60 font-medium tracking-wider uppercase text-xs md:text-sm">Organic Beans</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

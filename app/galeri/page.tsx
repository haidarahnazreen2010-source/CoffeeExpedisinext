import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Galeri - Coffee Expedisi",
  description: "Momen dan keindahan di Coffee Expedisi.",
};

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, url: "https://images.unsplash.com/photo-1495474472201-447545802283?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
  { id: 5, url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 6, url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" }
];

export default function GaleriPage() {
  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#FDF5E6] font-sans">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative py-16 md:py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1A0F0A] to-[#2A1B12] opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            Galeri <span className="text-[#E77D13]">Kami</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Jelajahi momen-momen istimewa dan suasana hangat yang tertangkap di Coffee Expedisi.
          </p>
        </div>
      </div>

      {/* Bento Gallery Grid */}
      <main className="px-8 md:px-16 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((img) => (
            <div 
              key={img.id} 
              className={`relative rounded-3xl overflow-hidden group shadow-xl bg-black/20 ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={`Gallery image ${img.id}`} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center justify-between">
                <span className="text-white font-bold tracking-wider">Coffee Expedisi</span>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

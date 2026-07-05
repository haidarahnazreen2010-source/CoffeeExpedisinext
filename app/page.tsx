import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0c0c0c] text-white font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0c0c0c]">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
          alt="Latar Belakang Biji Kopi"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
        <div className="text-2xl font-bold tracking-widest uppercase">
          Senja <span className="text-[#C19A6B]">Kopi</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <Link href="#" className="hover:text-[#C19A6B] transition-colors">Cerita Kami</Link>
          <Link href="#" className="hover:text-[#C19A6B] transition-colors">Menu</Link>
          <Link href="#" className="hover:text-[#C19A6B] transition-colors">Toko</Link>
          <Link href="#" className="hover:text-[#C19A6B] transition-colors">Kontak</Link>
        </div>
        <button className="hidden md:block px-6 py-2 border border-[#C19A6B] text-[#C19A6B] rounded-full text-sm font-medium hover:bg-[#C19A6B] hover:text-black transition-all duration-300">
          Pesan Sekarang
        </button>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-88px)] px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <p className="text-[#C19A6B] font-medium tracking-[0.2em] mb-4 text-sm md:text-base uppercase">
            Pengalaman Kopi Artisanal
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
            Bangkitkan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C19A6B] to-[#e6d0a7]">
              Semangatmu
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Temukan kekayaan rasa yang kompleks dari biji kopi yang dipanggang secara khusus dan bersumber secara etis. Dibuat untuk Anda yang menghargai seni sejati dalam secangkir kopi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#C19A6B] text-black rounded-full font-semibold hover:bg-[#d4b082] transition-colors duration-300 flex items-center justify-center gap-2 group">
              Jelajahi Menu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
              Tonton Cerita
            </button>
          </div>
        </div>

        {/* Floating Highlight Card */}
        <div className="absolute right-8 md:right-16 lg:right-24 bottom-16 hidden lg:flex flex-col gap-6">
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-72 transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-2xl group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-[#C19A6B]/20 flex items-center justify-center text-[#C19A6B] group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full text-gray-300">Roasting Baru</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Gayo Arabica</h3>
            <p className="text-sm text-gray-400 mb-4">Aroma rempah yang khas dengan sentuhan manis karamel dan earthy.</p>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-[#C19A6B] text-lg">Rp 95.000</span>
              <span className="text-white font-medium hover:text-[#C19A6B] transition-colors">Beli &rarr;</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

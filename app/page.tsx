import Navbar from "@/components/Navbar";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pecinta Kopi",
    content: "Espresso roast-nya benar-benar juara! Rasanya nendang dan pas banget buat nemenin kerja lembur. Suasananya juga bikin betah berlama-lama.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Siti Rahma",
    role: "Mahasiswi",
    content: "Suka banget sama Caramel Macchiato di sini. Manisnya pas, kopinya juga tetep kerasa. Tempat langganan baru buat ngerjain tugas kampus!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Freelancer",
    content: "Cold brew pack-nya sangat praktis. Bisa bikin es kopi seenak di kafe dari rumah aja. Kualitas biji kopinya memang kerasa premium banget.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Rina Amelia",
    role: "Karyawan Swasta",
    content: "Pelayanannya ramah banget, baristanya juga enak diajak ngobrol soal kopi. Colombian Blend-nya wajib dicoba buat yang suka kopi dengan hint cokelat.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Doni Pratama",
    role: "Pengusaha",
    content: "Konsep cafenya unik dan elegan. Cocok untuk meeting santai sama klien. Kopi dan makanannya sangat direkomendasikan.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Maya Sari",
    role: "Ibu Rumah Tangga",
    content: "Matcha espresso-nya unik sekali! Perpaduan pahit kopi dan matcha-nya balance. Bakal sering mampir ke sini setiap habis belanja.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="bg-[#1A0F0A] text-[#FDF5E6] font-sans">
      
      {/* Hero Section Container (Full viewport height) */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image scoped to this container */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.45]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1A0F0A] via-[#1A0F0A]/30 to-transparent opacity-70 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1A0F0A] via-[#1A0F0A]/70 to-transparent pointer-events-none"></div>

        {/* Navigation */}
        <Navbar />

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col justify-center flex-1 px-8 md:px-16 lg:px-24 pb-20">
          <div className="max-w-2xl mt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide text-[#E77D13]">
              Welcome!
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.15] mb-8 tracking-tight text-white drop-shadow-md">
              We serve the richest coffee <br className="hidden md:block"/>
              in the city!
            </h1>
            
            <div className="relative group inline-block">
              <div className="inline-block px-10 py-3.5 bg-[#E77D13] text-white rounded-full font-bold hover:bg-[#c96a0d] hover:shadow-lg hover:shadow-[#E77D13]/30 transition-all duration-300 text-sm md:text-base tracking-wide border border-[#E77D13] cursor-pointer">
                Order Now
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-[#1A0F0A]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2 w-48 flex flex-col">
                  <Link href="/shop/beans" className="px-6 py-3 text-sm text-white hover:text-[#E77D13] hover:bg-white/5 transition-colors normal-case text-center">
                    Biji Kopi
                  </Link>
                  <Link href="/shop/drinks" className="px-6 py-3 text-sm text-white hover:text-[#E77D13] hover:bg-white/5 transition-colors normal-case text-center">
                    Minuman Kopi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modern About Section */}
      <section id="about" className="relative z-10 py-24 md:py-32 px-8 md:px-16 lg:px-24 overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E77D13]/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E77D13]/5 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left side: Images & Badges */}
              <div className="relative">
                 {/* Main Image */}
                 <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/5] max-w-md shadow-2xl shadow-black/50 border border-white/10 group mx-auto lg:mx-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop" 
                      alt="Coffee making process" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/80 via-transparent to-transparent opacity-60"></div>
                 </div>
                 
                 {/* Floating Image / Badge */}
                 <div className="absolute -bottom-6 -right-4 md:-right-8 lg:-right-12 z-20 w-52 md:w-64 p-4 rounded-3xl bg-[#2A1B12]/80 backdrop-blur-xl border border-white/10 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 hidden sm:block">
                    <div className="flex items-center gap-4">
                       <div className="flex-shrink-0 w-12 h-12 bg-[#E77D13] rounded-full flex items-center justify-center">
                         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                       </div>
                       <div>
                         <p className="text-2xl font-black text-white">100<span className="text-[#E77D13]">%</span></p>
                         <p className="text-xs font-bold text-white/60 uppercase tracking-wider">Biji Kopi Asli</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Another floating element */}
                 <div className="absolute top-12 -left-4 md:-left-8 lg:-left-12 z-20 px-6 py-4 rounded-2xl bg-[#1A0F0A]/90 backdrop-blur-md border border-white/10 shadow-xl hidden sm:block">
                    <p className="text-[#E77D13] font-black text-4xl mb-1">50+</p>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Varian Menu</p>
                 </div>
              </div>
              
              {/* Right side: Content */}
              <div className="flex flex-col space-y-8 relative z-10">
                 <div>
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                     <span className="w-2 h-2 rounded-full bg-[#E77D13] animate-pulse"></span>
                     <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Tentang Kami</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                     Lebih dari sekadar <br />
                     <span className="text-[#E77D13] italic">secangkir kopi.</span>
                   </h2>
                 </div>
                 
                 <div className="space-y-5 text-white/70 text-lg leading-relaxed font-light">
                   <p>
                     Berdiri sejak 2024, <strong className="text-white font-medium">Coffee Expedisi</strong> lahir dari kecintaan kami terhadap eksplorasi rasa. Kami menjelajahi berbagai pelosok untuk menemukan biji kopi dengan profil unik dan membawanya langsung ke cangkir Anda.
                   </p>
                   <p>
                     Setiap biji kopi disortir dengan cermat, dipanggang dengan penuh perhitungan, dan diracik oleh barista ahli kami. Baik Anda penikmat espresso pekat maupun latte yang lembut, kami menjanjikan pengalaman menikmati kopi yang tak terlupakan.
                   </p>
                 </div>
                 
                  <div className="pt-6">
                    <div className="relative group/menu inline-block">
                      <div className="group flex items-center gap-4 text-white font-bold tracking-widest uppercase text-sm hover:text-[#E77D13] transition-colors duration-300 w-fit cursor-pointer">
                        <span className="relative">
                          Lihat Menu Kami
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E77D13] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </div>
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 transform translate-y-2 group-hover/menu:translate-y-0 z-50">
                        <div className="bg-[#1A0F0A]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2 w-48 flex flex-col">
                          <Link href="/shop/beans" className="px-6 py-3 text-sm text-white hover:text-[#E77D13] hover:bg-white/5 transition-colors normal-case font-medium">
                            Biji Kopi
                          </Link>
                          <Link href="/shop/drinks" className="px-6 py-3 text-sm text-white hover:text-[#E77D13] hover:bg-white/5 transition-colors normal-case font-medium">
                            Minuman Kopi
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              
            </div>
         </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="relative z-10 py-24 md:py-32 px-8 md:px-16 lg:px-24 overflow-hidden bg-[#150c08]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E77D13]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            Cerita <span className="text-[#E77D13]">Mereka</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Kebahagiaan pelanggan adalah prioritas kami. Lihat apa yang mereka katakan tentang pengalaman menikmati kopi di Coffee Expedisi.
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimoni) => (
            <div key={testimoni.id} className="bg-[#2A1B12]/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-[#E77D13]/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group flex flex-col">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimoni.rating ? 'text-[#E77D13]' : 'text-white/10'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-white/80 leading-relaxed mb-8 italic flex-1">
                "{testimoni.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimoni.avatar} 
                  alt={testimoni.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10 group-hover:border-[#E77D13] transition-colors"
                />
                <div>
                  <h4 className="text-white font-bold">{testimoni.name}</h4>
                  <p className="text-white/50 text-sm">{testimoni.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

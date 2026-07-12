export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  image: string;
  category: 'beans' | 'drinks';
}

export const products: Product[] = [
  // Beans
  {
    id: 1,
    category: 'beans',
    name: "Espresso Roast",
    description: "Kaya, berani, dan sempurna untuk memulai hari Anda.",
    longDescription: "Biji kopi Espresso Roast kami dipanggang hingga mencapai tingkat kegelapan yang pas (dark roast) untuk menghasilkan crema yang tebal, body yang penuh, dan tingkat keasaman yang rendah. Sangat cocok bagi Anda pecinta kopi hitam murni atau campuran berbasis susu seperti latte dan cappuccino. Diperoleh dari biji kopi pilihan yang menjamin kualitas rasa di setiap cangkirnya.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    category: 'beans',
    name: "Colombian Blend",
    description: "Halus dan seimbang dengan sentuhan cokelat dan kacang.",
    longDescription: "Colombian Blend adalah perpaduan biji kopi premium dari dataran tinggi Kolombia. Kopi ini memiliki profil rasa yang sangat seimbang, tingkat kemanisan alami karamel, serta sentuhan akhir (aftertaste) kacang panggang dan cokelat hitam. Sangat cocok untuk metode seduh V60, Chemex, maupun sekadar tubruk harian.",
    price: 55000,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    category: 'beans',
    name: "Ethiopian Yirgacheffe",
    description: "Ringan dan floral dengan sentuhan sitrus yang cerah.",
    longDescription: "Biji kopi dari wilayah Yirgacheffe, Ethiopia, sangat legendaris di kalangan pecinta kopi spesialti (specialty coffee). Profil rasanya cenderung floral seperti bunga melati, dengan keasaman (acidity) sitrus yang cerah dan bersih. Cocok diseduh tanpa gula untuk menikmati kompleksitas rasanya.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    category: 'beans',
    name: "Decaf House Blend",
    description: "Penuh rasa, tanpa membuat Anda gelisah.",
    longDescription: "Ingin minum kopi di malam hari tanpa khawatir tidak bisa tidur? Decaf House Blend adalah solusinya. Kami menggunakan metode dekadefinasi alami yang aman, sehingga rasa asli dan aroma kopinya tetap utuh, hanya kafeinnya yang hilang. Nikmati kehangatan secangkir kopi kapan saja.",
    price: 50000,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    category: 'beans',
    name: "French Roast",
    description: "Kuat, dengan aroma smokey yang sangat kaya rasa.",
    longDescription: "French Roast kami dipanggang pada suhu tinggi dan durasi lebih lama hingga memunculkan minyak alami biji kopi. Hasilnya adalah kopi dengan karakter sangat tebal (heavy body), intens, sedikit pahit yang nikmat, dan sentuhan smokey (asap) yang khas. Sempurna untuk diseduh menjadi Espresso atau Kopi Susu gula aren.",
    price: 48000,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    category: 'beans',
    name: "Cold Brew Pack",
    description: "Digiling khusus untuk racikan cold brew yang menyegarkan.",
    longDescription: "Paket biji kopi giling kasar yang diformulasikan khusus untuk metode perendaman air dingin (Cold Brew). Biji kopi ini akan mengekstraksi rasa yang lebih halus, lebih manis, dan jauh lebih rendah asam dibandingkan penyeduhan air panas. Sangat menyegarkan diminum dengan es batu di siang hari yang terik.",
    price: 75000,
    image: "https://images.unsplash.com/photo-1517701550927-30cf0baabcfa?q=80&w=600&auto=format&fit=crop"
  },
  
  // Drinks
  {
    id: 101,
    category: 'drinks',
    name: "Iced Americano",
    description: "Kopi hitam dingin yang menyegarkan, diseduh sempurna.",
    longDescription: "Double shot espresso premium yang dituangkan di atas es batu dan air dingin. Menghadirkan rasa kopi hitam murni yang kuat, rendah kalori, namun sangat menyegarkan. Sempurna sebagai pendorong energi Anda di tengah hari tanpa tambahan gula.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 102,
    category: 'drinks',
    name: "Caffe Latte",
    description: "Espresso dengan susu hangat dan busa lembut di atasnya.",
    longDescription: "Perpaduan klasik antara sepertiga espresso dan dua pertiga susu segar yang disteam dengan sempurna, diakhiri dengan lapisan busa susu (microfoam) yang lembut. Rasanya milky dan creamy, namun karakter espresso-nya tetap bisa Anda rasakan.",
    price: 30000,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 103,
    category: 'drinks',
    name: "Cappuccino",
    description: "Rasa espresso yang kuat dipadukan dengan busa susu tebal.",
    longDescription: "Perpaduan klasik Italia dengan rasio seimbang antara espresso, susu hangat (steamed milk), dan lapisan busa susu yang tebal (milk foam). Memberikan sensasi minum kopi yang kaya rasa dan sangat lembut di mulut. Pilihan tepat untuk memulai pagi hari.",
    price: 30000,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 104,
    category: 'drinks',
    name: "Caramel Macchiato",
    description: "Susu vanilla manis dengan siraman espresso dan saus karamel.",
    longDescription: "Minuman favorit para pencinta kopi manis. Terbuat dari sirup vanilla dan susu segar yang dicampur perlahan dengan tembakan espresso kuat (macchiato), kemudian diakhiri dengan pola melintang dari saus karamel kental yang manis dan gurih.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 105,
    category: 'drinks',
    name: "Matcha Espresso",
    description: "Perpaduan unik antara matcha Jepang premium dan espresso.",
    longDescription: "Kombinasi unik yang mengejutkan: bubuk matcha teh hijau asli dari Jepang dipadukan dengan susu murni dan espresso. Layer warnanya yang cantik menghadirkan tiga dimensi rasa: manis lembutnya susu, umami-nya matcha, dan tendangan khas kopi espresso.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 106,
    category: 'drinks',
    name: "Mochaccino",
    description: "Kopi, susu, dan cokelat manis yang memanjakan lidah Anda.",
    longDescription: "Bagi Anda yang tak bisa memilih antara cokelat dan kopi. Mochaccino (atau Mocha) merupakan paduan dari saus cokelat premium, espresso murni, dan susu hangat yang disteam. Rasanya seperti memakan kue cokelat lezat yang lumer di dalam mulut.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?q=80&w=600&auto=format&fit=crop"
  }
];

import { useState, useEffect } from 'react'

function App() {
  // Data Hadits dengan tambahan
  const hadiths = [
    {
      id: 1,
      arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
      translation: "Sesungguhnya setiap amal perbuatan tergantung pada niatnya.",
      source: "HR. Bukhari & Muslim",
      category: "Niat"
    },
    {
      id: 2,
      arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
      translation: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya.",
      source: "HR. Bukhari",
      category: "Al-Qur'an"
    },
    {
      id: 3,
      arabic: "الصَّلاَةُ عِمَادُ الدِّينِ",
      translation: "Shalat adalah tiang agama.",
      source: "HR. Baihaqi",
      category: "Shalat"
    },
    {
      id: 4,
      arabic: "وَتَصَدَّقُوا فَإِنَّ الصَّدَقَةَ تَطْفِئُ الْخَطِيئَةَ",
      translation: "Dan bersedekahlah, karena sedekah dapat menghapus dosa.",
      source: "HR. Tirmidzi",
      category: "Sedekah"
    },
    {
      id: 5,
      arabic: "الدِّيْنُ النَّصِيْحَةُ",
      translation: "Agama adalah nasihat.",
      source: "HR. Muslim",
      category: "Akhlak"
    },
    {
      id: 6,
      arabic: "الطَّهُوْرُ شَطْرُ الإِيْمَانِ",
      translation: "Bersuci itu separuh dari iman.",
      source: "HR. Muslim",
      category: "Thaharah"
    },
    {
      id: 7,
      arabic: "مَنْ كَانَ يُؤْمِنُ بِاللّٰهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
      translation: "Barangsiapa beriman kepada Allah dan hari akhir, hendaklah dia berkata baik atau diam.",
      source: "HR. Bukhari & Muslim",
      category: "Adab"
    },
    {
      id: 8,
      arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيْهِ مَا يُحِبُّ لِنَفْسِهِ",
      translation: "Tidak sempurna iman salah seorang di antara kalian hingga dia mencintai untuk saudaranya apa yang dia cintai untuk dirinya sendiri.",
      source: "HR. Bukhari & Muslim",
      category: "Iman"
    },
    {
      id: 9,
      arabic: "بِسْمِ اللّٰهِ وَتَوَكَّلْتُ عَلَى اللّٰهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ",
      translation: "Dengan nama Allah, aku bertawakkal kepada Allah. Tiada daya dan kekuatan kecuali dengan pertolongan Allah.",
      source: "HR. Abu Daud",
      category: "Doa"
    },
    {
      id: 10,
      arabic: "اِتَّقِ اللّٰهَ حَيْثُمَا كُنْتَ",
      translation: "Bertakwalah kepada Allah di mana saja engkau berada.",
      source: "HR. Tirmidzi",
      category: "Takwa"
    }
  ];

  const [currentHadithIndex, setCurrentHadithIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Efek untuk rotasi hadith
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHadithIndex((prevIndex) => 
        (prevIndex + 1) % hadiths.length
      );
      setTimeLeft(15);
    }, 15000);

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, [hadiths.length]);

  // Efek untuk update jam setiap detik
  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockTimer);
  }, []);

  // Saldo Tabungan Masjid
  const saldoMasjid = 10000;
  
  // Get current date
  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('id-ID', options);
  };
  
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(angka);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 font-sans relative">
      
      {/* Islamic Pattern Background - Premium Gold */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 20L95 55L60 90L25 55L60 20Z' fill='none' stroke='%23FFD700' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: '140px 140px'
        }}></div>
      </div>

      {/* Ambient Light Orbs - Gold & Emerald */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Header */}
      <header className="relative h-[15vh] px-8 pt-4 z-10">
        <div className="flex items-start justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl shadow-2xl flex items-center justify-center border-2 border-amber-300">
                <span className="text-3xl text-white drop-shadow-lg">🕌</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 tracking-wide">
                MASJID AL IHSAN BAKRIE PT.CPM
              </h1>
              <p className="text-xs text-emerald-300 tracking-wider mt-0.5">BERKAH • ISTIQOMAH • BERDAYA</p>
            </div>
          </div>

          {/* Date and Time Card - Premium Gold */}
          <div className="bg-gradient-to-br from-emerald-900/90 to-emerald-950/90 backdrop-blur-2xl rounded-3xl px-8 py-3 shadow-2xl border border-amber-500/50">
            <div className="text-4xl font-light text-amber-300 tabular-nums drop-shadow-lg">
              {formatTime(currentTime)}
            </div>
            <div className="text-sm text-emerald-200 text-right font-light mt-1">
              {getCurrentDate()}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-[80vh] px-8 flex gap-6 z-10 relative">
        
        {/* Left Column - Hadits Card (70%) */}
        <div className="w-[70%] flex flex-col h-full">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-3 flex-shrink-0">
            <div className="w-1 h-5 bg-amber-500 rounded-full"></div>
            <h2 className="text-xs font-medium tracking-[0.2em] text-amber-400 uppercase drop-shadow">
              HADITS PILIHAN
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
            
            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-300">Next in</span>
              <div className="w-16 h-1.5 bg-emerald-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-1000"
                  style={{ width: `${(timeLeft / 15) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-amber-400 font-mono font-medium">{timeLeft}s</span>
            </div>
          </div>

          {/* Hadits Card */}
          <div className="flex-1 bg-gradient-to-br from-emerald-900/80 to-emerald-950/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-amber-500/50 overflow-hidden min-h-0">
            
            <div className="h-full flex flex-col">
              {/* Category Badge - Premium */}
              <div className="px-8 pt-6 flex-shrink-0">
                <span className="inline-block px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-amber-50 text-xs font-semibold tracking-wide shadow-xl border border-amber-400">
                  {hadiths[currentHadithIndex].category.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 px-8 py-5 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-emerald-800">
                
                {/* Arabic Text */}
                <div className="text-right mb-5">
                  <p className="text-amber-300 break-words drop-shadow-lg"
                     style={{ 
                       fontFamily: "'Amiri', 'Traditional Arabic', serif",
                       direction: 'rtl',
                       fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                       lineHeight: '2.5',
                       wordSpacing: '0.05em'
                     }}>
                    {hadiths[currentHadithIndex].arabic}
                  </p>
                </div>

                {/* Translation */}
                <div className="mb-4">
                  <p className="text-base text-amber-200/90 leading-relaxed border-l-4 border-amber-500 pl-4 italic">
                    "{hadiths[currentHadithIndex].translation}"
                  </p>
                </div>

                {/* Source & Pagination */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm text-amber-400 bg-emerald-800/50 px-4 py-2 rounded-full border border-amber-500/30">
                    {hadiths[currentHadithIndex].source}
                  </span>
                  
                  {/* Pagination Dots - Gold */}
                  <div className="flex items-center gap-2">
                    {hadiths.map((_, index) => (
                      <button
                        key={index}
                        className={`rounded-full transition-all duration-500 ${
                          index === currentHadithIndex 
                            ? 'w-8 h-2 bg-gradient-to-r from-amber-500 to-amber-600 shadow-md' 
                            : 'w-2 h-2 bg-emerald-700 hover:bg-amber-600'
                        }`}
                        onClick={() => {
                          setCurrentHadithIndex(index);
                          setTimeLeft(15);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Info & Finance (30%) */}
        <div className="w-[30%] flex flex-col gap-4 h-full">
          
          {/* Quick Info Card - Premium */}
          <div className="bg-gradient-to-br from-emerald-900/80 to-emerald-950/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-500/50 p-5 flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-sm text-white">📊</span>
              </div>
              <h3 className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Informasi Masjid
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-emerald-200">Jumlah Hadits</span>
                <span className="text-amber-300 font-bold text-sm">{hadiths.length}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-emerald-200">Rotasi</span>
                <span className="text-amber-300 font-bold text-sm">15 detik</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-emerald-200">Status</span>
                <span className="text-amber-300 font-bold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  Aktif
                </span>
              </div>
            </div>
          </div>

          {/* Finance Card - Premium Green & Gold */}
          <div className="flex-1 bg-gradient-to-br from-emerald-900/80 to-emerald-950/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-500/50 overflow-hidden min-h-0 flex flex-col">
            
            {/* Card Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-4 border-b border-amber-500/50 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-sm text-white">💰</span>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-amber-100 uppercase tracking-wider">
                    Kas Masjid
                  </h3>
                  <p className="text-xs text-amber-200 font-light">Hari ini</p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-emerald-800">
              <div className="mb-4">
                <p className="text-3xl font-bold text-amber-300 mb-2 drop-shadow-lg">
                  {formatRupiah(saldoMasjid)}
                </p>
                <p className="text-xs text-emerald-200 font-light">
                  Total saldo tersedia
                </p>
              </div>

              {/* Stats - Enhanced */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-emerald-800/50 rounded-xl p-3 border border-amber-500/30">
                  <p className="text-xs text-emerald-200 font-light">Pemasukan</p>
                  <p className="text-sm text-amber-300 font-bold mt-1">+10.5%</p>
                </div>
                <div className="bg-emerald-800/50 rounded-xl p-3 border border-amber-500/30">
                  <p className="text-xs text-emerald-200 font-light">Pengeluaran</p>
                  <p className="text-sm text-amber-300 font-bold mt-1">-5.3%</p>
                </div>
              </div>

              {/* Progress Bar - Premium */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-emerald-200 font-light">Target Infaq</span>
                  <span className="text-amber-300 font-bold">78%</span>
                </div>
                <div className="w-full h-2.5 bg-emerald-800 rounded-full overflow-hidden">
                  <div className="w-[78%] h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg shadow-amber-500/50"></div>
                </div>
              </div>

              {/* Islamic Quote - Elegant */}
              <div className="mt-5 pt-4 border-t border-amber-500/30">
                <p className="text-xs text-amber-200 italic text-center leading-relaxed">
                  "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain"
                </p>
                <p className="text-[10px] text-amber-300 text-center mt-2 font-arabic" style={{fontFamily: "'Amiri', serif"}}>
                  خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Enhanced Green & Gold */}
      <footer className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-950 to-emerald-900 border-t border-amber-500/50 py-3 z-10">
        <div className="px-8 flex items-center justify-between text-xs">
          <p className="text-amber-300">
            © 2026 Masjid Al Ihsan Bakrie PT.CPM
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
            <p className="text-amber-400 font-bold tracking-wide">
              Team ITE CPM
            </p>
            <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
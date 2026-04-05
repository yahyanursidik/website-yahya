import type { FC } from 'react';

const TopNavBar: FC = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#f9f9f9]/80 glass-nav">
    <div className="flex justify-between items-center max-w-5xl mx-auto px-8 py-6 w-full">
      <a className="text-xl font-semibold tracking-tighter text-[#1a1c1c] font-headline" href="#">Yahya Nursidik</a>
      <div className="hidden md:flex items-center space-x-8 font-body text-sm tracking-wide">
        <a className="text-primary font-medium" href="#">Beranda</a>
        <a className="text-stone-500 hover:text-primary transition-colors" href="#profil">Profil</a>
        <a className="text-stone-500 hover:text-primary transition-colors" href="#">Kegiatan</a>
        <a className="text-stone-500 hover:text-primary transition-colors" href="#">Kontak</a>
      </div>
    </div>
  </nav>
);

const Hero: FC = () => (
  <section className="pt-40 pb-20 px-8 max-w-5xl mx-auto text-center">
    <span className="text-primary-container font-medium tracking-[0.3em] text-[10px] uppercase mb-4 block">Edukator &amp; Akademisi</span>
    <h1 className="font-headline text-5xl md:text-6xl text-primary leading-tight mb-8">Yahya Nursidik</h1>
    <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10 font-body">
      Mentransformasi ekosistem pembelajaran melalui pendekatan kurikulum berbasis nilai dan teknologi humanis.
    </p>
    <div className="flex justify-center gap-4">
      <button className="bg-primary-container text-on-primary px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-all">
        Lihat Jadwal Kegiatan
      </button>
    </div>
  </section>
);

const ProfileBrief: FC = () => (
  <section className="py-24 px-8 max-w-5xl mx-auto scroll-mt-20" id="profil">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
        <img alt="Atmospheric study space with a wooden desk, ancient books, and soft morning light through a window" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm6YcQ1zyJhG-ePeRSC5PcmzHDLT0txoMENlerWZYYfVz88WOEtbU4XSKMlEQ8OO313q_dXCumelEhKaYKMs9PIhR7UI08FaNUitooLSyZbGgI7oF5JbC_wXsvK-BMc4TBBBHA6AXO2gcKIvsyhwx-0maZsFMISSW3Met45usEZ5sGjnCyoMXq8Kz8pXxx_f8hWQ3Yowha9YCWL5bQkGhY_H5SfOV6SSALYSMJsN9Ph2x4TkLQTOBqapeFX9YEN-ohpJuYnx8SqtuP" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
      </div>
      <div className="space-y-6">
        <h2 className="font-headline text-3xl text-primary">Mengenal Yahya Nursidik</h2>
        <div className="w-12 h-1 bg-primary-container/30"></div>
        <p className="text-on-surface-variant leading-relaxed">
          Perjalanan saya banyak dekat dengan dunia pendidikan, keluarga, dan pembelajaran berbasis nilai-nilai Islam. Saya belajar bahwa setiap anak, orang tua, guru, dan lembaga memiliki kebutuhan yang unik. Dari pengalaman itulah saya terus terlibat dalam pengembangan kurikulum, desain pembelajaran dan desain pengalaman pembelajaran, program belajar, parenting, dan berbagai ruang pembelajaran yang diharapkan bisa memberi manfaat yang nyata dan berkelanjutan, ditambah keyakinan bahwa pendidikan semestinya membantu menyiapkan generasi rabbani—generasi yang dibina dengan ilmu, adab, dan proses yang bertahap. Sebagaimana para ulama menjelaskan, pribadi rabbani adalah pribadi yang berilmu, bijak, dan membimbing manusia sedikit demi sedikit menuju kebaikan.
        </p>
      </div>
    </div>
  </section>
);

const BriefAbout: FC = () => (
  <section className="py-20 px-8 max-w-3xl mx-auto text-center border-y border-outline-variant/20">
    <p className="text-xl text-on-surface leading-relaxed font-headline italic">
      "Pendidikan bukan hanya tentang transfer informasi, melainkan pembentukan karakter yang berakar pada nilai luhur dan adaptif terhadap masa depan."
    </p>
    <div className="mt-8">
      <a className="text-primary font-medium text-sm border-b border-primary/20 hover:border-primary transition-all pb-1" href="#">
        Baca Profil Selengkapnya
      </a>
    </div>
  </section>
);

const ClassesEvents: FC = () => (
  <section className="py-24 px-8 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="font-headline text-3xl text-primary mb-4">Kelas / Seminar yang Sedang Dibuka</h2>
      <div className="w-12 h-0.5 bg-primary-container/30 mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl flex flex-col h-full hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Pelatihan</span>
          <span className="text-on-surface-variant text-[10px] uppercase font-medium">Online</span>
        </div>
        <h3 className="font-headline text-lg mb-4 text-primary leading-snug flex-grow">Implementasi Root Cause Analysis (RCA)</h3>
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span>Kuota Terbatas</span>
        </div>
        <a href="https://goakal.com/ihsan-cendekia/rca-islam-terpadu" target="_blank" rel="noreferrer" className="block text-center w-full bg-primary-container text-on-primary py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
          Daftar
        </a>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl flex flex-col h-full hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Pelatihan</span>
          <span className="text-on-surface-variant text-[10px] uppercase font-medium">Online</span>
        </div>
        <h3 className="font-headline text-lg mb-4 text-primary leading-snug flex-grow">Kepala Sekolah Islam Terpadu (Level 1)</h3>
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span>Segera Hadir</span>
        </div>
        <a href="https://goakal.com/ihsan-cendekia/pelatihan-kepsek-sd-mi-sederajat-islam-terpadu" target="_blank" rel="noreferrer" className="block text-center w-full bg-primary-container text-on-primary py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
          Daftar
        </a>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl flex flex-col h-full hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Program</span>
          <span className="text-on-surface-variant text-[10px] uppercase font-medium">LMS Daring</span>
        </div>
        <h3 className="font-headline text-lg mb-4 text-primary leading-snug flex-grow">Ushuluna Angkatan 1</h3>
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span>Program 1 Semester</span>
        </div>
        <a href="https://goakal.com/ihsan-cendekia/ushuluna-1" target="_blank" rel="noreferrer" className="block text-center w-full bg-primary-container text-on-primary py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
          Daftar
        </a>
      </div>
    </div>
  </section>
);

const FeaturedBooks: FC = () => (
  <section className="py-24 px-8 max-w-5xl mx-auto border-t border-outline-variant/10">
    <div className="text-center mb-16">
      <h2 className="font-headline text-3xl text-primary mb-4">Karya Pilihan</h2>
      <div className="w-12 h-0.5 bg-primary-container/30 mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="group">
        <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 shadow-lg bg-surface-container transition-transform duration-500 group-hover:-translate-y-2">
          <img alt="Elegant minimalist book cover showing stylized botanical leaf shadows on parchment paper" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXz4-3P25yC8E_4-mK_j0FwW4S-1o8S1X2v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v" />
        </div>
        <h3 className="font-headline text-xl text-primary mb-2">Manhaj Pendidikan Islami</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">Sebuah telaah mendalam mengenai integrasi nilai tauhid dalam kurikulum pendidikan dasar kontemporer.</p>
      </div>
      <div className="group">
        <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 shadow-lg bg-surface-container transition-transform duration-500 group-hover:-translate-y-2">
          <img alt="Artistic book cover with complex Islamic geometric patterns in gold and deep emerald green" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-8-I0S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v" />
        </div>
        <h3 className="font-headline text-xl text-primary mb-2">Etika Digital bagi Pendidik</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">Navigasi moral di era algoritma: Bagaimana menjaga muru'ah dan keberkahan ilmu di ruang siber.</p>
      </div>
      <div className="group">
        <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 shadow-lg bg-surface-container transition-transform duration-500 group-hover:-translate-y-2">
          <img alt="Simple academic book cover with a close-up of ink and traditional calligraphy tools on a wooden surface" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-8-I0S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v-7I2N6l6-1H2y-3o-S1v" />
        </div>
        <h3 className="font-headline text-xl text-primary mb-2">Filosofi Belajar Mandiri</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">Panduan praktis menumbuhkan gairah tholabul ilmi yang berkelanjutan berdasarkan atsar para ulama salaf.</p>
      </div>
    </div>
    <div className="text-center">
      <a className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all border-b border-primary/20 pb-1" href="#">
        Lihat Semua Buku
        <span className="material-symbols-outlined text-base">arrow_forward</span>
      </a>
    </div>
  </section>
);

const InstagramFeed: FC = () => (
  <section className="bg-surface-container-low py-24 px-8">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl text-primary mb-2">Dari Instagram</h2>
        <p className="text-on-surface-variant text-sm">@yahya_nursidik — Insights harian seputar pendidikan.</p>
      </div>
      <div className="w-full mb-10 min-h-[400px]">
        {/* Kontainer untuk Widget Instagram Elfsight */}
        <div className="elfsight-app-1f2388b2-5089-44c4-be9f-c0d3812ad4c9" data-elfsight-app-lazy></div>
      </div>
      <div className="flex justify-center gap-4">
        <a className="flex items-center gap-2 border border-primary/20 text-primary px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-surface-container transition-all" href="https://www.instagram.com/yahyanursidik/" target="_blank" rel="noreferrer">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
          Instagram
        </a>
        <a className="flex items-center gap-2 border border-primary/20 text-primary px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-surface-container transition-all" href="https://www.linkedin.com/in/yahya-nursidik-499aa653/" target="_blank" rel="noreferrer">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

const CollaborationCTA: FC = () => (
  <section className="py-24 px-8 max-w-3xl mx-auto text-center">
    <h2 className="font-headline text-3xl text-primary mb-8">Mulai Kolaborasi Bermakna</h2>
    <button className="bg-primary-container text-on-primary px-10 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-all shadow-lg shadow-primary-container/10">
      Hubungi via WhatsApp
    </button>
  </section>
);

const Footer: FC = () => (
  <footer className="bg-surface-container-high py-16 px-8 border-t border-outline-variant/20">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
      <div>
        <h3 className="text-lg font-bold text-primary font-headline mb-2">Yahya Nursidik</h3>
        <p className="text-stone-500 text-xs font-body tracking-wide uppercase">Dedikasi untuk Masa Depan Pendidikan Indonesia</p>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a className="text-stone-500 hover:text-primary transition-colors" href="https://www.instagram.com/yahyanursidik/" target="_blank" rel="noreferrer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
          </a>
          <a className="text-stone-500 hover:text-primary transition-colors" href="https://www.linkedin.com/in/yahya-nursidik-499aa653/" target="_blank" rel="noreferrer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
          </a>
        </div>
      </div>
      <div className="flex gap-8 text-sm text-stone-500">
        <a className="hover:text-primary transition-colors" href="#">Kebijakan Privasi</a>
        <a className="hover:text-primary transition-colors" href="#">Media Kit</a>
        <a className="hover:text-primary transition-colors" href="#">Kontak</a>
      </div>
    </div>
    <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-outline-variant/10 text-center">
      <p className="text-stone-400 text-[10px] uppercase tracking-widest">© 2024 Yahya Nursidik. Academic Serenity.</p>
    </div>
  </footer>
);

function App() {
  return (
    <>
      <TopNavBar />
      <main className="hero-gradient">
        <Hero />
        <ProfileBrief />
        <BriefAbout />
        <ClassesEvents />
        <FeaturedBooks />
        <InstagramFeed />
        <CollaborationCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;

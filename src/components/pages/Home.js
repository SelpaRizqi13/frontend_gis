import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <h1>GIS</h1>
      <h2>(Geographical Information System)</h2>

      <p>
      GIS RKS adalah aplikasi untuk menyajikan informasi tentang ragam kesenian Sunda yang dikelompokkan sesuai rumpun keseniannya, serta informasi tentang lokasi wilayah di mana kesenian itu hidup dan berkembang.

Ragam kesenian dikelompokkan ke dalam rumpun tertentu guna memudahkan pengguna dalam mencari data kesenian yang dibutuhkan.

Lokasi wilayah dan sebaran kesenian Jawa Barat disajikan dalam bentuk peta, dilengkapi dengan multimedia (teks, image, audio visual); menjadikan tampilan GIS RKS lebih praktis dan dinamis.
      </p>
      <Footer />
    </>
  );
}

export default Home;

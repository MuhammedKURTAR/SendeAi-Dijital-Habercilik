import React from 'react';
import './Home.css';  // CSS dosyasını import ediyoruz
import Slider from './Slider';  // Slider bileşenini import ediyoruz

const Home = () => {
  return (
    <div className="container mt-5 home-container">
      <Slider /> {/* Slider bileşenini en üste ekliyoruz */}
      <h2 className="text-center mb-4 home-title">SENDEAI Hakkında</h2>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card h-100 border-primary shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">SENDEAI'nin Amacı</h5>
              <p className="card-text">
                SENDEAI projesi nitelikli insan kaynaklarını en verimli şekilde kullanarak,
                habercilik alanında karşılaşılan bilgi kirliliğini ve kısıtlılığını aşmayı
                hedefleyen bir projedir. Dijital çağın hızla evrilen dinamiklerinde, gerçekliği
                sorgulamadan yayılan bilgiler, toplumun sağlıklı, doğru ve tarafsız bilgiye
                ulaşmasını engelliyor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card h-100 border-primary shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">SENDEAI Nasıl Çalışır?</h5>
              <p className="card-text">
                Bu projede, halkın doğrudan haber katkısını ödüllendirerek teşvik ediyoruz.
                Sosyal medya platformlarından otomatik haber toplama mekanizmalarımız ve
                yapay zeka destekli algoritmalarımız sayesinde, haberlerin doğruluğunu,
                kaynağını ve benzerlik derecelerini detaylı bir şekilde analiz ediyoruz.
                Ancak sadece teknolojinin değil, insanın dokunuşunun da değerli ve önemli
                olduğunu biliyoruz. Bu nedenle, yapay zeka tarafından filtrelenmiş ve seçilen
                haberleri, manuel kontrollerle titizlikle değerlendiriyor ve doğruluğunu teyit
                ediyoruz. Ödül mekanizmamız sayesinde, halkın doğru ve değerli haberleri
                bizimle paylaşmasını teşvik ediyor ve bu katkıları için onlara ödüller sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

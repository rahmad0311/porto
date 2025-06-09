import React from 'react';
import { Code, TrendingUp, Palette, Video } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      description: "Mengembangkan aplikasi web dan mobile dengan teknologi terdepan seperti React, Node.js, dan Python untuk solusi yang scalable."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Merancang strategi pemasaran digital yang efektif, SEO optimization, dan kampanye media sosial yang menghasilkan ROI tinggi."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Illustration",
      description: "Menciptakan ilustrasi digital yang memukau untuk branding, UI/UX design, dan konten visual yang engaging."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation",
      description: "Menghasilkan konten multimedia berkualitas tinggi untuk berbagai platform digital dengan storytelling yang kuat."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Halo! Saya Rahmad, seorang multi-disciplinary digital professional yang passionate dalam 
              menggabungkan teknologi, strategi pemasaran, dan kreativitas. Dengan pengalaman bertahun-tahun 
              di industri digital, saya mengkhususkan diri dalam menciptakan solusi holistik yang tidak hanya 
              fungsional secara teknis, tetapi juga efektif secara komersial dan menarik secara visual.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Perjalanan saya dimulai dari ketertarikan pada teknologi, kemudian berkembang ke dunia 
              pemasaran digital ketika saya menyadari pentingnya strategi dalam kesuksesan produk digital. 
              Passion terhadap seni dan storytelling membawa saya ke dunia ilustrasi dan content creation, 
              melengkapi skill set yang unik dan komprehensif.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Filosofi kerja saya adalah "Technology × Strategy × Creativity = Impact". Setiap proyek 
              yang saya kerjakan selalu mengintegrasikan ketiga elemen ini untuk menghasilkan solusi 
              yang tidak hanya inovatif, tetapi juga memberikan value nyata bagi klien dan end-users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <button>FRONT END</button>
          <h2>SEO com React</h2>
          <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, 
            ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. 
            Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
        </div>
        <img src="/src/assets/images/player.png" alt="Banner Image" />
      </div>
    </section>
  );
};

export default Banner;
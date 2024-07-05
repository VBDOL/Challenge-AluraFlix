// Footer.jsx
import React from 'react';
import { SocialIcon } from 'react-social-icons'; // Importe o componente SocialIcon
import { SiAcademia } from "react-icons/si";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src="src/assets/images/LogoMain.png" alt="Logo da Aluraflix" />
        <div className="social-icons">
          <ul>
            <li>
              <SocialIcon url="https://www.linkedin.com/in/victor-b-o-leme-dev/" target="_blank" rel="noopener noreferrer" style={{ height: 35, width: 35 }} />
            </li>
            <li>
              <SocialIcon url="https://github.com/VBDOL" target="_blank" rel="noopener noreferrer" style={{ height: 35, width: 35 }} />
            </li>
            <li>
              <SocialIcon url="https://www.instagram.com/vbdol.dev" target="_blank" rel="noopener noreferrer" style={{ height: 35, width: 35 }} />
            </li>
            <li>
              <a href="https://cursos.alura.com.br/user/vbdol-dev" target="_blank" rel="noopener noreferrer">
                <SiAcademia style={{ height: 32, width: 32 }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

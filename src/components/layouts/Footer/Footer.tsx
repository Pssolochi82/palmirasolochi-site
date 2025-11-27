// src/components/layouts/Footer/Footer.tsx
'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

// Passo 1: Import image.
import LogoWebP from '../../../assets/Logo.webp';
import LogoLegal from '../../../assets/theHumanTechBlogLogo.webp';
// -----------------------------------------------------------------

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer' role='contentinfo'>
      <div className='footer__top'>
        <Link to='/' className='footer__brand' aria-label='Palmira Solochi - Home'>
          <img src={LogoWebP} alt='Logótipo Palmira Solochi' />
        </Link>

        <nav className='footer__cols' aria-label='Footer menus'>
          <div className='footer__col'>
            <h3 className='footer__heading'>Site</h3>
            <ul className='footer__list'>
              <li>
                <Link className='footer__link' to='/about'>
                  Sobre
                </Link>
              </li>
              <li>
                <Link className='footer__link' to='/projects'>
                  Projetos
                </Link>
              </li>
              <li>
                <Link className='footer__link' to='/contact'>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer__col'>
            <h3 className='footer__heading'>Redes</h3>
            <ul className='footer__list'>
              <li>
                <a
                  className='footer__link'
                  href='https://www.linkedin.com/in/palmira-solochi-79a1a3317/'
                  aria-label='LinkedIn'
                  target='_blank'
                  rel='noopener noreferrer'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className='footer__link'
                  href='https://github.com/Pssolochi82'
                  aria-label='GitHub'
                  target='_blank'
                  rel='noopener noreferrer'>
                  GitHub
                </a>
              </li>
              <li>
                <a className='footer__link' href='mailto:contact@palmirasolochi.com'>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='footer__bottom'>
        <small className='footer__legal'>
          © {year} Todos os direitos reservados. Desenvolvido por &nbsp;&nbsp;&nbsp;
          <a
            className='footer__link--legal'
            href='https://thehumantechblog.com/about'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src={LogoLegal}
              alt='Logótipo The Human Tech Blog'
              className='footer__logo--legal'
            />
            &nbsp; <span className='footer__link--name'>The Human Tech Digitals.</span>
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;

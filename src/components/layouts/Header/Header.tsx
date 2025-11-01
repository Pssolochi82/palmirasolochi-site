// src/components/layouts/Header/Header.tsx
'use strict';

import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

//  Import image.
import LogoWebP from '../../../assets/Logo.webp';
// -----------------------------------------------------------------

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  // Fechar o menu ao navegar
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Fechar menu ao clicar fora (mobile)
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [open]);

  return (
    <header className='header' role='banner'>
      <div className='header__inner'>
        <Link to='/' className='header__brand' aria-label='Palmira Solochi - Home'>
          <img className='header__logo' src={LogoWebP} alt='Logótipo Palmira Solochi' />
        </Link>

        {/* Botão mobile */}
        <button
          className='header__toggle'
          aria-label='Abrir/Fechar menu'
          aria-expanded={open}
          aria-controls='primary-nav'
          onClick={() => setOpen((v) => !v)}>
          <span className='header__bar' aria-hidden='true' />
          <span className='header__bar' aria-hidden='true' />
          <span className='header__bar' aria-hidden='true' />
        </button>

        <div
          id='primary-nav'
          ref={navRef}
          className={`header__nav ${open ? 'header__nav--open' : ''}`}
          role='navigation'
          aria-label='Menu principal'>
          <NavLink to='/about' className='header__link'>
            Sobre
          </NavLink>
          <NavLink to='/projects' className='header__link'>
            Projetos
          </NavLink>
          <NavLink to='/contact' className='header__link header__link--cta'>
            Contacto
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

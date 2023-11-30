'use client';

import React from 'react';
import Logo from '../../assets/sigla_mica.png';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    const element = document.querySelector<HTMLElement>('html');
    if (element) {
      element.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-base-200 shadow-2xl border-b">
      <div className="navbar-start">
        <div className={`dropdown ${menuOpen ? 'open' : ''}`}>
          <button
            tabIndex={0}
            onClick={handleMenuToggle}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <ul
            className={`space-y-2 border menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 md:absolute absolute ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            <li className="border rounded-md shadow-sm">
              <Link tabIndex={0} onClick={handleMenuToggle} aria-expanded={menuOpen} className='btn py-3' href="/admission"><button type='button'>Admitere</button></Link>
            </li>

            <li className="border rounded-md shadow-sm">
              <Link tabIndex={0} onClick={handleMenuToggle} aria-expanded={menuOpen} className='btn py-3' href="/about"><button type='button'>Despre noi</button></Link>
            </li>

            <li className="border rounded-md shadow-sm">
              <Link tabIndex={0} onClick={handleMenuToggle} aria-expanded={menuOpen} className='btn py-3' href="/underconstruction"><button type='button'>Învățământ</button></Link>
            </li>

            <li className="border rounded-md shadow-sm">
              <Link tabIndex={0} onClick={handleMenuToggle} aria-expanded={menuOpen} className='btn py-3' href="/underconstruction"><button type='button'>Cercetare</button></Link>
            </li>
    
            <li className="border rounded-md shadow-sm">
              <Link tabIndex={0} onClick={handleMenuToggle} aria-expanded={menuOpen} className='btn py-3' href="/underconstruction"><button type='button'>Comunitate</button></Link>
            </li>

            <li className="border rounded-md shadow-sm">
              <Link tabIndex={0} onClick={handleMenuToggle} aria-expanded={menuOpen} className='btn py-3' href="/underconstruction"><button type='button'>Media</button></Link>
            </li>

            <li className="border rounded-md shadow-sm">
              <Link tabIndex={0} onClick={handleMenuToggle} aria-expanded={menuOpen} className='btn py-3' href="/underconstruction"><button type='button'>Servicii</button></Link>
            </li>

            <li className="border rounded-md shadow-sm">
              <Link tabIndex={0} onClick={handleMenuToggle} aria-expanded={menuOpen} className='btn py-3' href="/underconstruction"><button type='button'>Manifestări</button></Link>
            </li>

          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src={Logo} alt="LOGO" height="50"></Image>
          {/* Conditionally render text based on screen width */}
          <span className="hidden md:inline">Facultatea de Automatică, Calculatoare și Electronică</span>
          <span className="md:hidden">ACE</span>
        </Link>
      </div>

      <div className="navbar-end">
        <div className='px-2'>
          <FontAwesomeIcon icon={faSun} />
        </div>
        <label className="swap swap-rotate">
        
          <input
            onClick={toggleTheme}
            type="checkbox"
            value="default"
            className="toggle theme-controller bg-blue-600 border-gray-600 [--tglbg:theme(colors.gray.100)] checked:bg-gray-600 checked:border-gray-600 checked:[--tglbg:theme(colors.black)] row-start-1 col-start-1 col-span-2"
          />
          <div className="swap-on"></div>
          <div className="swap-off"></div>
        </label>
        <div className='px-2'>
          <FontAwesomeIcon icon={faMoon} />
        </div>
        
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
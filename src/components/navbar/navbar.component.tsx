'use client';
import Link from 'next/link';
import React from 'react';
import Logo from '../../assets/sigla_mica.png';
import Image from 'next/image';

export default function Navbar() {
  const [theme, setTheme] = React.useState('dark');
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
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link className='btn' href="/admission">Admitere</Link>
            </li>
            <li>
              <Link className='btn' href="/about">Despre noi</Link>
            </li>
            <li >
              <Link className='btn' href="/underconstruction">Învățământ</Link>
            </li>
            <li>
              <Link className='btn' href="/underconstruction">Cercetare</Link>
            </li>
            <li>
              <Link className='btn' href="/underconstruction">Comunitate</Link>
            </li>
            <li>
              <Link className='btn' href="/underconstruction">Media</Link>
            </li>
            <li>
              <Link className='btn' href="/underconstruction">Servicii</Link>
            </li>
            <li>
              <Link className='btn' href="/underconstruction">Manifestări</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src={Logo} alt="LOGO" height="50"></Image>
          {/* Conditionally render text based on screen width */}
          <span className="hidden md:inline">Facultatea de Automatică, Calculatoare și Electronică</span>
          <span className="md:hidden">FACE</span>
        </Link>
      </div>

      <div className="navbar-end">
        <label className="swap swap-rotate">
          <input
            onClick={toggleTheme}
            type="checkbox"
            value="default"
            className="toggle theme-controller bg-gray-800 border-gray-600 [--tglbg:theme(colors.slate.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
          />
          <div className="swap-on"></div>
          <div className="swap-off"></div>
        </label>
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
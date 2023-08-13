'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-10">
      <nav className="flex flex-row mx-auto w-5/6 mt-5">
        <div className="flex-1 text-3xl text-gray-100 py-1 hover:text-blue-400 transition-colors duration-300">
          <Link href="/">Wildeveloper</Link>
        </div>

        {/* Menu icon for mobile */}
        <button className="lg:hidden px-2 py-1 text-4xl text-gray-100" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Nav links for desktop */}
        <ul className="hidden lg:flex space-x-8">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <li key={item} className="text-2xl text-gray-100 hover:text-blue-400 transition-colors duration-300">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dropdown Nav links for mobile */}
      <ul
        className={`absolute top-full mt-2 w-full lg:hidden overflow-hidden transition-max-height duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        } bg-gray-800 shadow-md`}
      >
        {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
          <li
            key={item}
            className="text-2xl text-center text-gray-100 py-1 border-b hover:text-blue-400 transition-colors duration-300"
          >
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

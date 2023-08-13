'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-row mx-auto w-5/6 mt-5">
      <div className="flex-1 text-3xl text-gray-100">
        <Link href="/">Wildeveloper</Link>
      </div>
      <ul className="flex flex-row space-x-8">
        <li className="text-2xl text-gray-100">
          <Link href="/about">About</Link>
        </li>
        <li className="text-2xl text-gray-100">
          <Link href="/services">Services</Link>
        </li>
        <li className="text-2xl text-gray-100">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="text-2xl text-gray-100">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

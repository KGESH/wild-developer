import Link from 'next/link';
import { findMeButtonId } from '@/components/map/google-map.types';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-full px-4 md:px-10">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-100 mb-4">Hi, I&#39;m Wild Developer</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 mb-4">Full Stack Freelancer Digital Nomad</h2>
        <p className="text-lg md:text-xl text-gray-100 mb-4">
          Mastering full-stack web development, I bridge the digital realm with the tangible through IoT and firmware
          expertise. With a knack for crafting seamless web experiences, I also breathe life into smart devices. Every
          line of code is a step towards a more connected world.
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-2/3 space-y-4 md:space-y-0 md:space-x-24 mx-auto">
          <Link
            href={`#${findMeButtonId}`}
            className="flex justify-center items-center text-2xl md:text-3xl text-gray-100 w-full md:w-1/2 h-12 md:h-14 border-2 rounded-lg bg-blue-500 border-blue-500 font-normal"
          >
            Where am I
          </Link>
          <Link
            href="/contact"
            className="flex justify-center items-center text-2xl md:text-3xl text-blue-500 w-full md:w-1/2 h-12 md:h-14 border-2 rounded-lg border-blue-500 font-normal bg-transparent"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

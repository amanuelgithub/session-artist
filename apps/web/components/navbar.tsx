'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center p-4  md:px-24 border-b border-gray-200 z-10">
      {/* mobile */}
      <div className="visible md:hidden">
        <Image
          src="/images/magnifying-glass.svg"
          alt="mobile-menu"
          width={20}
          height={20}
        />
      </div>

      {/* logo */}
      <div className="flex gap-1 w-[125px] h-[54px]">
        <Image src="/images/logo.svg" alt="logo" width={52} height={50} />
        <Link href="/">
          <div className="flex flex-col gap-2 justify-center items-end">
            <span className="text-md md:text-lg font-bold uppercase">
              Session
            </span>
            <span className="text-sm md:text-md font-semibold lowercase">
              Artist
            </span>
          </div>
        </Link>
      </div>

      {/* mobile menu */}
      <div className="visible md:hidden">
        <Image
          src="/images/menu.svg"
          alt="mobile-menu"
          width={20}
          height={20}
        />
      </div>

      {/* desktop content */}
      <div className="hidden md:block relative ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="focus:outline-none focus:border-gray-400 max-w-96 w-96 py-2 border bottom-2 border-gray-300 rounded-md px-3 placeholder:text-black bg-[#fffbf6]"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 transform translate-y-[65%] -translate-x-1/2"
        >
          <Image
            src="/images/magnifying-glass.svg"
            alt="search"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className="hidden md:flex md:items-center md:justify-between w-100">
        <div className="flex justify-between items-center gap-4">
          <button
            type="button"
            className="border border-green-600 rounded-md text-green-600 hover:bg-green-50 py-2 px-6"
            onClick={() => router.push('/signin')}
          >
            Login
          </button>
          <button
            type="button"
            className="rounded-md text-white bg-green-600 py-2 px-6 hover:bg-green-700"
            onClick={() => router.push('/signup')}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

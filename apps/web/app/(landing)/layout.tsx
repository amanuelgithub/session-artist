import React from 'react';
import Image from 'next/image';
import Navbar from 'apps/web/components/navbar';
import Footer from 'apps/web/components/footer';

export default function Landing({ children }: { children?: React.ReactNode }) {
  return (
    <main className="relative flex flex-col justify-start min-h-screen h-screen bg-[#fffbf6]">
      {/* <Image src="/images/background.svg" alt="background-lines" layout="fill" objectFit="cover" /> */}
      <Image
        src="/images/background.svg"
        alt="background-lines"
        className="absolute top-0 left-0 transform -translate-y-[10%] overflow-clip min-w-full min-h-full"
        // width={200}
        // height={200}
        width={1920}
        height={500}
      />

      <div className="absolute top-1/4 left-[45%] w-36 h-36 rounded-full bg-green-600/50 blur-3xl"></div>
      <div className="absolute top-1/4 left-[50%] w-36 h-36 rounded-full bg-amber-600/50 blur-3xl"></div>

      <Navbar />

      <section className="">{children}</section>

      <Footer />
    </main>
  );
}

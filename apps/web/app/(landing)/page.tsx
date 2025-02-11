'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const categoryImages = [
  {
    id: 1,
    title: 'Guitar',
    url: '/images/Guitar.png',
  },
  {
    id: 2,
    title: 'Piano',
    url: '/images/piano.png',
  },
  {
    id: 3,
    title: 'Drum',
    url: '/images/drum.png',
  },
  {
    id: 4,
    title: 'Voice Over',
    url: '/images/microphone.png',
  },
  {
    id: 5,
    title: 'Recording',
    url: '/images/camera.png',
  },
  {
    id: 6,
    title: 'Other',
    url: '/images/organ-player.png',
  },
];

export default function Home() {
  const router = useRouter();

  const handleSignUpWithGoogle = () => {
    // window.history.pushState({}, '', '/auth/google');
    console.log('signing in with google');
    router.push('http://localhost:4000/api/auth/google/login');
  };

  return (
    <>
      {/* <main>
      <h1>Landing page.....</h1>

      <button
        className="px-4 py-2 rounded-md border border-gray-400 bg-black text-white"
        onClick={handleSignUpWithGoogle}
      >
        Sign in with Google
      </button>
    </main> */}

      <section className="flex flex-col items-center justify-start py-14">
        <div className="relative max-w-96">
          <h1 className="text-3xl text-center font-extrabold text-wrap ">
            Session Artists for your dream project.
          </h1>

          <span className="absolute bottom-0 right-[20%] w-[60px] py-1 bg-amber-800/50"></span>
        </div>

        <h3 className="py-4 text-md text-gray-800 font-normal">
          Select Category
        </h3>

        <div className="flex z-10 gap-2 py-4">
          <button
            type="button"
            className="border border-amber-600 rounded-md text-amber-600 bg-amber-50 px-4 py-1"
            onClick={() => alert('find an artist')}
          >
            Find an Artist
          </button>
          <button
            type="button"
            className="border border-green-600 rounded-md text-green-600 bg-green-50 px-4 py-1"
          >
            Become Seller
          </button>
        </div>

        {/* category list with a scroll viw */}
        <div className="flex flex-wrap justify-center gap-4 z-20 py-16">
          {/*  */}
          <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory ">
            <div className="flex space-x-4 p-4">
              {categoryImages.map((category) => (
                <div
                  className="w-fit h-fit snap-center flex-shrink-0"
                  key={category.id}
                >
                  <div className="relative group">
                    <Image
                      src={category.url}
                      alt={category.title}
                      width={200}
                      height={200}
                      // className=" bg-yellow-300 hover:bg-green-800 cursor-pointer "
                    />

                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full hover:bg-green-100/40 cursor-pointer  transition-all duration-200 ease-in-out">
                      <span className="opacity-0 text-white font-bold text-2xl group-hover:opacity-100 transition-opacity duration-300">
                        {category.title}.
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

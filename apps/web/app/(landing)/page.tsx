'use client';

import { useRouter } from 'next/navigation';

// import {} from 'next';

export default function Home() {
  const router = useRouter();

  const handleSignUpWithGoogle = () => {
    // window.history.pushState({}, '', '/auth/google');
    console.log('signing in with google');
    router.push('http://localhost:4000/api/auth/google/login');
  };

  return (
    <main>
      <h1>Landing page.....</h1>

      <button
        className="px-4 py-2 rounded-md border border-gray-400 bg-black text-white"
        onClick={handleSignUpWithGoogle}
      >
        Sign in with Google
      </button>
    </main>
  );
}

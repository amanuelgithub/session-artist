import React from 'react';

export default function Landing({ children }: { children?: React.ReactNode }) {
  return (
    <main>
      <h1>Welcome to landing!</h1>
      <div>{children}</div>
    </main>
  );
}

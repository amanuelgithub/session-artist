import React from 'react';

export default function ArtistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Welcome to artist!</h1>
      <div>{children}</div>
    </main>
  );
}

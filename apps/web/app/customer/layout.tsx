import React from 'react';

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Welcome to customer!</h1>
      <div>{children}</div>
    </main>
  );
}

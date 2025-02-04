import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Welcome to admin!</h1>
      <div>{children}</div>
    </main>
  );
}

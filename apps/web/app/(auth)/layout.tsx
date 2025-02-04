import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Welcome to auth!</h1>
      <div>{children}</div>
    </main>
  );
}

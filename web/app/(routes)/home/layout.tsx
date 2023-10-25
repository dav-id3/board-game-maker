import '../globals.css';

import Nav from './nav';
import { Suspense } from 'react';


export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <Nav />
      </Suspense>
      {children}
    </>
        
  );
}

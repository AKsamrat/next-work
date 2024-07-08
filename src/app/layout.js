import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/component/Navbar';

import EmailJs from '@/component/EmailJs';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anuwarul kabir',
  description: 'Generated by Samrat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>

        <div>{children}</div>
        <Toaster />
        <EmailJs></EmailJs>
      </body>
    </html>
  );
}

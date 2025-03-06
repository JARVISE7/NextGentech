import { Geist } from 'next/font/google';
import Header from '@components/Header';
import Footer from '@components/Footer';
import '@styles/globals.css';
import { WishlistProvider } from '../context/WishlistContext';
import { ThemeProvider } from "../context/ThemeContext";
import { CartProvider } from "../context/CartContext";


const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata = {
  title: 'My E-Commerce Store',
  description: 'Best electronics at unbeatable prices',
  icons: "/favicon.png",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ThemeProvider>
            <WishlistProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </WishlistProvider>
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}






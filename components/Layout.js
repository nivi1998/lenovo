import Head from 'next/head';
import Link from 'next/link';
import React, { Children, useEffect } from 'react';
import { useContext, useState } from 'react';
import { Store } from '../utils/Store';

function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0)); // save the cart content on  home page
  }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>{title ? title + '- Craftsy' : 'Craftsy'}</title>
        <meta name="description" content="E-commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className=" text-lg font-bold"> Craftsy </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-l rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4"> {children} </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright @2022 Craftsy </p>
        </footer>
      </div>
    </>
  );
}

export default Layout;

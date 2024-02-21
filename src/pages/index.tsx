import Image from "next/image";
import Head from 'next/head';

import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Center from '../components/Center'
import About from '../components/About'

export default function Home() {
  return (
    <>

      {/* Metadata */}
      <Head>
        <title>Andrew Finsand's Portfolio</title>
        <meta
          name='description'
          content='Andrew Finsands portfolio'
        />
        <meta
          name='keywords'
          content=''
        />
        <meta
          name='author'
          content='Andrew Finsand'
        />
        <meta
          name='viewport'
          content='width=device-width'
        />
      </Head>

      <main className='flex flex-col items-center overflow-hidden font-poppins'>
        <div id='background'></div>
        <div id='foreground'></div>
        <Navbar />
        <Landing />
        <div id='about' className='flex flex-col'>
          <Center />
          <About />
        </div>
      </main>

    </>
  );
}

import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header'
import Landing from '../components/Landing'
import Center from '../components/Center'
import About from '../components/About'

export default function Home() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>

      {/* Metadata */}
      <Head>
        <title>Andrew Finsands Portfolio</title>
        <meta name='description' content='Andrew Finsands portfolio' />
        <meta name='keywords' content='' />
        <meta name='author' content='Andrew Finsand' />
        <meta name='viewport' content='width=device-width' />
        {/* Preload background image */}
        <link rel='preload' href='/background-sky-green.png' as='image' />
      </Head>

      <main className='flex flex-col items-center overflow-hidden font-poppins'>
        <div id='background'></div>
        <div
          data-aos='fade-up'
          data-aos-once='true'
          id='foreground'>
        </div>
        <Header />
        <Landing />
        <Center />
        {/* <div id='about' className='flex flex-col w-screen'> */}
          {/* <Center /> */}
          {/* <About /> */}
        {/* </div> */}
      </main>

    </>
  );
}

import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header'
import Landing from '../components/Landing'
import Center from '../components/Center'
import Fade from '../components/Fade'

export default function Home() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>

      {/* Metadata */}
      <Head>
        <title>Andrew Finsands Portfolio</title>
        <meta name='description' content='Andrew Finsands software developer portfolio' />
        <meta name='keywords' content='Andrew Finsand, Developer, Python, Django, Flask, React, Next.js, MySQL, Javascript, HTML5, CSS3, Tailwind, APIs, Figma, Docker, AI, design' />
        <meta name='author' content='Andrew Finsand' />
        <meta name='viewport' content='width=device-width' />
        <meta name="google-site-verification" content="NaDSZfAj1DbjfdG6_tgPr7XvX2ar9z36JMEQPvjkcds" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preload background images */}
        <link rel='preload' href='/background-sky-green.jpg' as='image' />
        <link rel='preload' href='/foreground.png' as='image' />
      </Head>

      <main className='flex flex-col items-center overflow-hidden font-poppins'>
        <div id='background'></div>
        <div
          data-aos='fade-up'
          data-aos-once='true'
          id='foreground'
        >
        </div>
        <Header />
        <Landing />
        <Fade />
        <Center />
      </main>

    </>
  );
}

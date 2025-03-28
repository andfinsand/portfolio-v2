import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SkillCard from './SkillCard';
import 'aos/dist/aos.css';

const About = () => {
    const titles = ['Web Developer', 'Software Engineer', 'UI/UX Designer'];
    const [index, setIndex] = useState(0);

    // Cycling professional titles
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => (index + 1) % titles.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [titles.length]);

    // Background parallax effect
    useEffect(() => {
        document.addEventListener('scroll', function () {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('about');
            let speed = 0.5;

            if (parallaxElement) {
                parallaxElement.style.backgroundPosition = `center ${-scrollPosition * speed}px`;
            }
        });

        return () => {
            document.removeEventListener('scroll', function () { });
        };
    }, []);

    return (
        <>
            <div id='about' className='flex justify-center items-center min-h-[800px] rounded-3xl mt-28 md:py-6 md:mt-32 lg:py-20 lg:h-fit xl:h-[800px] 3xl:h-[850px] 3xl:min-h-[580px]'>

                {/* About container including headshot */}
                <div className='flex flex-col justify-center items-center rounded-3xl text-white w-11/12 max-w-[1250px] h-4/5 min-h-[1000px] gap-8 lg:h-[385px] lg:px-14 xl:flex xl:flex-row xl:justify-between 2xl:max-w-[1350px] 3xl:w-11/12 3xl:max-w-[1550px] 3xl:h-4/6 3xl:max-h-[550px] 3xl:min-h-[490px]'>

                    {/* Content - text container and skills */}
                    <div className='flex flex-col order-1 gap-8 max-w-[700px] mx-1 sm:mx-10 lg:gap-9 lg:mr-14 lg:ml-0 3xl:max-w-[800px] 3xl:gap-12 3xl:mr-20'>

                        {/* Text container */}
                        <div
                            data-aos='fade-down'
                            data-aos-duration='600'
                            data-aos-once='true'
                            data-aos-offset='200'
                            className='flex flex-col gap-5 lg:gap-9'
                        >

                            {/* Intro */}
                            <h1 className='text-sm 3xl:text-base'>
                                HELLO THERE, WELCOME TO MY SITE
                            </h1>

                            {/* Cycling professional titles */}
                            <div className='flex flex-col text-3xl tracking-wide font-poppinsSemiBold sm:gap-1 sm:text-4xl 3xl:gap-2 3xl:text-5xl'>
                                <h2>
                                    I&apos;m Andrew
                                </h2>
                                <h3 className='-mt-1'>
                                    <span className={`animated-text-${index} gradient-text font-poppinsBold`}>{titles[index]}</span>
                                </h3>
                            </div>

                            {/* Main */}
                            <div className='text-sm leading-relaxed tracking-wide 3xl:text-base'>
                                I have a passion for problem solving, building, and being creative. Contact me for web development services, full stack projects, or design ideas.
                            </div>
                            <div className='text-sm tracking-wide 3xl:text-base' >
                                Cheers!
                            </div>

                        </div>

                        {/* Skills */}
                        <div
                            data-aos='fade-up'
                            data-aos-duration='600'
                            data-aos-once='true'
                            data-aos-offset='200'
                            className='flex justify-between gap-2 sm:gap-7'
                        >

                            <SkillCard
                                label='Languages'
                                first='Python'
                                second='JavaScript'
                                third='HTML / CSS'
                            />

                            <SkillCard
                                label='Frameworks'
                                first='Django / Flask'
                                second='React / Next.js'
                                third='WordPress'
                            />

                            <SkillCard
                                label='Design'
                                first='Figma'
                                second='Gimp'
                                third='Stable Diffusion'
                            />

                        </div>
                    </div>

                    {/* Headshot */}
                    <Image
                        data-aos='fade-left'
                        data-aos-duration='600'
                        data-aos-once='true'
                        data-aos-offset='200'

                        src='/headshot2x.webp'
                        alt='Headshot of Andrew Finsand'
                        width={897}
                        height={897}
                        className='self-center object-cover rounded-full shadow-customShadow w-[340px] h-[340px] lg:h-[400px] lg:w-[400px] xl:order-last 3xl:h-[520px] 3xl:w-[520px]'
                    />

                </div>
            </div>
        </>
    );
}

export default About;

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TechnologyCard from './TechnologyCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const descriptions = ["Web Developer", "Software Engineer", "UI/UX Designer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => (index + 1) % descriptions.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='flex justify-center items-center h-screen min-h-[784px]'>

                {/* About container */}
                <div
                    data-aos='fade-in'
                    data-aos-duration='3000'
                    data-aos-once='true'
                    className='flex flex-col justify-center items-center rounded-3xl text-white w-11/12 max-w-[1250px] h-4/5 min-h-[720px] gap-8 sm:w-11/12 sm:gap-8 lg:flex lg:flex-row lg:justify-between lg:h-[385px] lg:min-h-0 lg:px-14 2xl:w-11/12 2xl:max-w-[1650px] 2xl:h-4/6 2xl:max-h-[550px] 2xl:min-h-[490px]'
                >

                    {/* Content - text container and skills */}
                    <div className='flex flex-col order-1 gap-8 max-w-[800px] mx-1 sm:mx-10 lg:gap-9 lg:mr-14 lg:ml-0 2xl:gap-12 2xl:mr-20'>

                        {/* Text container */}
                        <div className='flex flex-col gap-5 lg:gap-9'>

                            {/* Intro */}
                            <h1 className='text-sm 2xl:text-base'>
                                HELLO THERE, WELCOME TO MY SITE
                            </h1>

                            {/* Cycling professional titles */}
                            <div className='flex flex-col text-3xl sm:gap-1 sm:text-4xl 2xl:gap-2 2xl:text-5xl'>
                                <h2>
                                    I'm Andrew
                                </h2>
                                <h3 className='-mt-1'>
                                    <span className={`animated-text-${index} gradient-text font-poppinsBold`}>{descriptions[index]}</span>
                                </h3>
                            </div>

                            {/* Content main */}
                            <div className='text-sm tracking-wide 2xl:text-base'>
                                I have a passion for problem solving, building, and being creative. Contact me for web development services, full stack projects, or design ideas.
                            </div>
                            <div className='text-sm tracking-wide 2xl:text-base' >
                                Cheers!
                            </div>

                        </div>

                        {/* Content - Technologies */}
                        <div className='flex justify-between gap-2 sm:gap-6'>

                            <TechnologyCard
                                label='Languages'
                                first='Python'
                                second='JavaScript'
                                third='HTML / CSS'
                            />

                            <TechnologyCard
                                label='Frameworks'
                                first='Django / Flask'
                                second='React / Next.js'
                                third='WordPress'
                            />

                            <TechnologyCard
                                label='Design'
                                first='Figma'
                                second='Gimp'
                                third='Stable Diffusion'
                            />

                        </div>
                    </div>

                    {/* Headshot */}
                    <Image
                        src='/headshot-mobile.png'
                        alt='Headshot of Andrew Finsand'
                        width={897}
                        height={897}
                        priority={true}
                        className='self-center object-cover rounded-full shadow-customShadow w-[340px] h-[340px] lg:order-last lg:h-[400px] lg:w-[400px] 2xl:h-[470px] 2xl:w-[470px]'
                    />

                </div>
            </div>
        </>
    );
}

export default About;
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
                    // className='flex flex-col justify-center items-center bg-white/20 backdrop-blur-3xl rounded-3xl text-white w-11/12 max-w-[1050px] h-3/5 min-h-[720px] gap-8 sm:w-4/5 sm:gap-0 lg:flex lg:flex-row lg:justify-between lg:h-[385px] lg:min-h-0 2xl:w-4/5 2xl:max-w-[1500px] 2xl:h-4/6 2xl:max-h-[550px] 2xl:min-h-[490px]'
                    className='flex flex-col justify-center items-center rounded-3xl text-white w-11/12 max-w-[1250px] h-3/5 min-h-[720px] gap-8 lg:px-10 sm:w-11/12 sm:gap-8 lg:flex lg:flex-row lg:justify-between lg:h-[385px] lg:min-h-0 2xl:w-11/12 2xl:max-w-[1600px] 2xl:h-4/6 2xl:max-h-[550px] 2xl:min-h-[490px]'
                >

                    {/* Content */}
                    <div className='flex flex-col order-1 gap-8 max-w-[800px] mx-1 sm:mx-10 lg:gap-10 lg:mr-14 lg:ml-0 2xl:gap-12 2xl:mr-20'>
                    {/* <div className='flex flex-col gap-8 mx-6 sm:mx-10 xl:mx-14 2xl:gap-12 2xl:mx-20'> */}

                        {/* Content - Text */}
                        <div className='flex flex-col gap-5 lg:gap-10 2xl:gap-12'>
                            <h1 className='text-3xl font-poppinsBold 2xl:text-6xl'>
                                Hi I'm Andrew
                            </h1>

                            {/* Cycling descriptors */}
                            <h2 className='text-lg 2xl:text-3xl'>
                                A <span className={`gradient-text font-poppinsBold animated-text-${index}`}>{descriptions[index]}</span>
                            </h2>

                            <p className='text-sm tracking-wide 2xl:text-base'>
                                I have a passion for problem solving, building, and being creative. Contact me for web development services, full stack projects, or design ideas.
                            </p>
                            <p className='text-sm tracking-wide 2xl:text-base' >
                                Cheers!
                            </p>
                        </div>

                        {/* Content - Technologies */}
                        <div className='flex justify-between gap-2 sm:gap-6 '>

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
                        className='self-center object-cover rounded-full shadow-customShadow w-[345px] h-[345px] mb-0 sm:mb-5 lg:order-last lg:mb-0 lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]'
                    />

                </div>
            </div>
        </>
    );
}

export default About;

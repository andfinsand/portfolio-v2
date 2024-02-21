import React, { useEffect } from 'react';
import Image from "next/image";
import TechnologyCard from './TechnologyCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({duration: 1200});
    }, []);

    return (
        <>
            <div className='flex justify-center items-center h-screen min-h-[784px]'>

                {/* About card */}
                <div
                    data-aos="fade-in"
                    data-aos-once="true"
                    className='flex flex-col justify-center items-center bg-white/20 backdrop-blur-3xl text-white w-11/12 max-w-[1050px] h-3/5 min-h-[720px] gap-8 sm:w-4/5 sm:gap-0 lg:flex lg:flex-row lg:justify-between lg:h-[385px] lg:min-h-0 2xl:w-4/5 2xl:max-w-[1500px] 2xl:h-4/6 2xl:max-h-[550px] 2xl:min-h-[490px]'
                >

                    {/* Headshot - Mobile */}
                    <Image
                        src='/headshot-mobile.png'
                        alt='Headshot of Andrew Finsand'
                        width={897}
                        height={897}
                        priority={true}
                        className='self-center object-cover rounded-full w-80 h-80 mb-0 sm:mb-5 lg:hidden'
                    />

                    {/* Headshot - Desktop */}
                    <Image
                        src='/headshot.png'
                        alt='Headshot of Andrew Finsand'
                        width={897}
                        height={984}
                        priority={true}
                        className='self-center hidden object-cover lg:flex lg:h-[90%] lg:self-end lg:w-fit'
                    />

                    {/* Content */}
                    <div className='flex flex-col gap-8 mx-6 sm:mx-10 xl:mx-14 2xl:gap-12 2xl:mx-20'>

                        {/* Content - Text */}
                        <div className='flex flex-col gap-5 2xl:gap-7'>
                            <h1 className='text-2xl font-semibold 2xl:text-4xl'>
                                Hi, I'm Andrew.
                            </h1>
                            <p className='text-sm tracking-wide 2xl:text-base'>
                                I have a passion for problem solving, building, and being creative. Contact me for web development services, full stack projects, or design ideas.
                            </p>
                            <p className='text-sm tracking-wide 2xl:text-base' >
                                Cheers!
                            </p>
                        </div>

                        {/* Content - Technologies */}
                        <div className='flex justify-between gap-2 sm:gap-6 lg:gap-8 2xl:gap-0'>

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
                </div>
            </div>
        </>
    );
}

export default About;

import React, { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            // mirror: false
        });
    }, []);

    return (
        <>
            <div
                data-aos="fade-in"
                className='flex flex-row justify-between absolute w-full z-50'
            >

                {/* Logo */}
                <div>
                    <Image
                        src='/af-logo-white.png'
                        alt='Andrew Finsand logo'
                        width={437}
                        height={324}
                        priority={true}
                        className='w-[45px] m-7'
                    />
                </div>

                {/* Contact info */}
                <div className='flex flex-row self-center gap-7 sm:gap-14 m-7'>

                    {/* Resume */}
                    <a
                        href='resume.pdf'
                        target='_blank'
                    >
                        <Image
                            src='/resume.svg'
                            alt='Resume logo'
                            width={100}
                            height={100}
                            priority={true}
                            className='w-[16px]'
                        />
                    </a>

                    {/* Linkedin */}
                    <a
                        href='https://www.linkedin.com/in/andrewfinsand/'
                        target='_blank'
                    >
                        <Image
                            src='/linkedin.svg'
                            alt='Linkedin logo'
                            width={100}
                            height={100}
                            priority={true}
                            className='w-[16px]'
                        />
                    </a>

                    {/* Github */}
                    <a
                        href='https://github.com/andfinsand'
                        target='_blank'
                    >
                        <Image
                            src='/github.svg'
                            alt='Github logo'
                            width={100}
                            height={100}
                            priority={true}
                            className='w-[16px]'
                        />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:andfinsand@gmail.com"
                    >
                        <Image
                            src='/email.svg'
                            alt='Email logo'
                            width={100}
                            height={100}
                            priority={true}
                            className='w-[16px]'
                        />
                    </a>

                </div>
            </div>
        </>
    );
}

export default Navbar;

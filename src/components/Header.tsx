import React, { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1800,
        });
    }, []);

    return (
        <>
            <div
                data-aos="fade-down"
                className='flex flex-row justify-between absolute w-full z-50'
            >

                {/* Logo */}
                <div>
                    <Image
                        src='/af-logo-303030.png'
                        alt='Andrew Finsand logo'
                        width={437}
                        height={324}
                        priority={true}
                        className='w-[45px] m-7'
                    />
                </div>

                {/* Contact info */}
                <div className='flex flex-row self-center gap-3 sm:gap-7 xl:gap-10 m-7'>

                    {/* Resume */}
                    <a
                        href='resume.pdf'
                        target='_blank'
                        className='group flex justify-center w-[35px] h-[35px] hover:bg-offBlack hover:rounded-full hover:p-1 duration-200'

                    >
                        <Image
                            src='/resume.svg'
                            alt='Resume logo'
                            width={100}
                            height={100}
                            priority={true}
                            className='self-center brightness-[.3] w-[16px] group-hover:brightness-100 duration-200'
                        />
                    </a>

                    {/* Linkedin */}
                    <a
                        href='https://www.linkedin.com/in/andrewfinsand/'
                        target='_blank'
                        className='group flex justify-center w-[35px] h-[35px] hover:bg-offBlack hover:rounded-full hover:p-2 duration-200'

                    >
                        <Image
                            src='/linkedin.svg'
                            alt='Linkedin logo'
                            width={100}
                            height={100}
                            priority={true}
                            className='self-center brightness-[.3] w-[16px] group-hover:brightness-100 duration-200'
                        />
                    </a>

                    {/* Github */}
                    <a
                        href='https://github.com/andfinsand'
                        target='_blank'
                        className='group flex justify-center w-[35px] h-[35px] hover:bg-offBlack hover:rounded-full hover:p-1 duration-200'
                    >
                        <Image
                            src='/github.svg'
                            alt='Github logo'
                            width={100}
                            height={100}
                            priority={true}
                            className='self-center brightness-[.3] w-[16px] mr-0.5 group-hover:brightness-100 duration-200'
                        />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:andfinsand@gmail.com"
                        className='group flex justify-center w-[35px] h-[35px] hover:bg-offBlack hover:rounded-full hover:p-1 duration-200'

                    >
                        <Image
                            src='/email.svg'
                            alt='Email logo'
                            width={100}
                            height={100}
                            priority={true}
                            className='self-center brightness-[.3] w-[16px] group-hover:brightness-100 duration-200'
                        />
                    </a>

                </div>
            </div>
        </>
    );
}

export default Header;

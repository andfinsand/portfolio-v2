import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [divPosition, setDivPosition] = useState(0);
    const amplifiedScrollY = scrollTop * 2;

    // AOS fade-in title
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    // Animate title down on scroll
    useEffect(() => {

        // Update scrollTop on scroll
        const handleScroll = () => {
        setScrollTop(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    // Update div position
    useEffect(() => {

          // Calculate max scroll position
        const maxScrollY = document.body.scrollHeight - window.innerHeight;

        // If amplified value exceeds max, continue scrolling
        if (amplifiedScrollY > maxScrollY) {
            setDivPosition(maxScrollY + (amplifiedScrollY - maxScrollY));
        } else {
            setDivPosition(amplifiedScrollY);
        }
        }, [scrollTop]);

    return (
        <>
            <div
                className='flex flex-col justify-center h-screen pb-80'
                style={{ transform: `translateY(${divPosition}px)`}}
            >
                <h1
                    data-aos='fade-in'
                    data-aos-delay='1200'
                    className='text-center text-[#303030] text-3xl font-semibold drop-shadow-[0_0_3px_rgba(140,140,140,.5)] sm:text-5xl xl:text-6xl'
                >
                    ANDREW FINSAND
                </h1>
                <h2
                    data-aos='fade-in'
                    data-aos-delay='1200'
                    className='text-center text-[#303030] text-lg font-poppinsLight drop-shadow-[0_0_1px_rgba(140,140,140,.6)] sm:text-2xl xl:text-3xl'
                >
                    Software Developer
                </h2>
                {/* <div className='flex justify-center self-center text-center text-white text-sm font-poppinsLight gap-3 m-8 xl:gap-4 xl:text-base'>
                    <div className='bg-white/20 backdrop-blur rounded-full w-[100px] py-1.5 xl:w-[120px] xl:py-2'>Full Stack</div>
                    <div className='bg-white/20 backdrop-blur rounded-full w-[100px] py-1.5 xl:w-[120px] xl:py-2'>Web Dev</div>
                    <div className='bg-white/20 backdrop-blur rounded-full w-[100px] py-1.5 xl:w-[120px] xl:py-2'>UI/UX</div>
                </div> */}
            </div>
        </>
    );
}

export default Landing;

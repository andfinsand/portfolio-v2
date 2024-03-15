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

    }, [amplifiedScrollY]);

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
                className='flex flex-col justify-center h-screen pb-[470px] pt-[150px]'
                style={{ transform: `translateY(${divPosition}px)`}}
            >
                <h1
                    data-aos='fade-in'
                    data-aos-delay='1200'
                    className='text-center text-[#303030] text-4xl font-semibold drop-shadow-[0_0_3px_rgba(140,140,140,.5)] sm:text-5xl xl:text-6xl'
                >
                    ANDREW FINSAND
                </h1>
                <h2
                    data-aos='fade-in'
                    data-aos-delay='1200'
                    className='text-center text-[#303030] text-xl font-poppinsLight drop-shadow-[0_0_1px_rgba(140,140,140,.6)] sm:text-2xl xl:text-3xl'
                >
                    Software Developer
                </h2>
            </div>
        </>
    );
}

export default Landing;

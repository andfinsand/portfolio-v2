import { useEffect, useState } from 'react';

const Landing = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [divPosition, setDivPosition] = useState(0);
    const amplifiedScrollY = scrollTop * 2;

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
                className='flex flex-col justify-center h-screen'
                style={{ transform: `translateY(${divPosition}px)`}}
            >
                <h1 className='text-center text-white text-5xl font-semibold 2xl:text-6xl'>
                    ANDREW FINSAND
                </h1>
                <h2 className='text-center text-white text-2xl font-poppinsLight 2xl:text-3xl'>
                    Software Developer
                </h2>
                <div className='flex justify-center self-center w-full gap-3 text-white text-sm font-poppinsLight m-8 2xl:gap-4 2xl:text-base'>
                    <div className='text-center bg-white/20 backdrop-blur rounded-full w-[100px] py-1.5 2xl:w-[120px] 2xl:py-2'>Full Stack</div>
                    <div className='text-center bg-white/20 backdrop-blur rounded-full w-[100px] py-1.5 2xl:w-[120px] 2xl:py-2'>Web Dev</div>
                    <div className='text-center bg-white/20 backdrop-blur rounded-full w-[100px] py-1.5 2xl:w-[120px] 2xl:py-2'>UI/UX</div>
                </div>
            </div>
        </>
    );
}

export default Landing;

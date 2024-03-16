import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {

        // Background parallax effect
        document.addEventListener('scroll', function() {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner');
            let speed = 0.5;

            if (parallaxElement) {
            parallaxElement.style.backgroundPosition = `center ${-scrollPosition * speed}px`;
        }
        });

        return () => {
            document.removeEventListener('scroll', function() {});
        };
        }, []);

    return (
        <>
            <div id='banner' className='flex justify-center relative rounded-3xl w-full h-[1000px]'>

                {/* Quote */}
                <div className='flex flex-col self-center text-center text-lg text-white font-poppinsMedium z-10 px-5 md:px-16 sm:gap-1 lg:gap-3 xl:gap-7'>
                    <div
                        data-aos='fade-in'
                        data-aos-once='true'
                        className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl 4xl:text-6xl'
                    >
                        <span className='gradient-text text-2xl tracking-wide font-poppinsBlack sm:text-4xl lg:text-5xl xl:text-7xl 4xl:text-8xl'>Developing </span>
                        <span data-aos='fade-in' data-aos-once='true' data-aos-delay='1000'>
                            the
                            <span className='gradient-text text-2xl tracking-wide font-poppinsBlack sm:text-4xl lg:text-5xl xl:text-7xl 4xl:text-8xl'> tools </span>
                        </span>
                        <span data-aos='fade-in' data-aos-once='true' data-aos-delay='2000'>today...</span>
                    </div>

                    <div
                        data-aos='fade-in'
                        data-aos-delay='3000'
                        data-aos-once='true'
                        className='text-white text-sm sm:text-xl lg:text-2xl xl:text-4xl 4xl:text-5xl'
                    >
                        that will
                        <span className='gradient-text text-xl tracking-wide font-poppinsBlack sm:text-3xl lg:text-4xl xl:text-5xl 4xl:text-6xl'> shape </span>
                        <span data-aos='fade-in' data-aos-once='true' data-aos-delay='4000'>our tomorrow</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;

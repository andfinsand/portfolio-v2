import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {

        // Background parallax effect
        document.addEventListener('scroll', function () {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner');
            let speed = 0.4;

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
            <div id='banner' className='flex justify-center rounded-3xl w-full h-[800px] 3xl:h-[850px]'>

                {/* Quote container */}
                <div className='flex justify-center mr-12 md:mr-[70px] lg:mr-[60px]'>
                    {/* Vertical text - requires wrapper with rotation for fade in(right) animation */}
                    <div className='self-center -rotate-90 h-fit'>
                        <div
                            data-aos='fade-right'
                            data-aos-duration='700'
                            data-aos-once='true'
                            data-aos-anchor='#trigger-animation'
                            data-aos-anchor-placement='bottom-bottom' /* Triggers animation when bottom of div (first 'bottom') reaches bottom of screen (second 'bottom') */
                            className='self-center tracking-tight text-[#F6FDFF] text-6xl font-poppinsBlack md:text-8xl lg:text-9xl'
                        >
                            SHAPING
                        </div>
                    </div>
                    {/* Content container */}
                    <div
                        id='trigger-animation' /* Trigger point for all animations */
                        data-aos='fade-down'
                        data-aos-duration='700'
                        data-aos-once='true'
                        data-aos-anchor='#trigger-animation'
                        data-aos-anchor-placement='bottom-bottom'
                        className='overflow-hidden bg-[#F6FDFF] w-[275px] h-[276px] rounded-br-full -ml-[111px] md:w-[345px] md:h-[385px] md:-ml-[177px] lg:w-[445px] lg:h-[490px] lg:-ml-[235px] xl:w-[530px] xl:h-[561px] 2xl:h-[539px] 3xl:h-[564px]'
                    >
                        <div className='flex self-center h-full'>
                            <div className='flex flex-col self-center text-[#303030] mt-6 ml-6 md:gap-1.5 md:mt-0 md:ml-9 xl:gap-4 xl:mt-10 xl:ml-12'>
                                {/* Content */}
                                <div
                                    data-aos='reveal-text'
                                    data-aos-once='true'
                                    data-aos-anchor='#trigger-animation'
                                    data-aos-anchor-placement='bottom-bottom'
                                    className='reveal-delay-1 tracking-tight text-[#595959] text-lg font-robotoCondensedMedium md:text-xl lg:text-2xl xl:text-3xl'
                                >
                                    the
                                    <span className='gradient-text-reverse text-2xl md:text-3xl lg:text-4xl xl:text-[40px]'> future </span>
                                    of
                                </div>
                                <div
                                    data-aos='reveal-text'
                                    data-aos-once='true'
                                    data-aos-anchor='#trigger-animation'
                                    data-aos-anchor-placement='bottom-bottom'
                                    className='reveal-delay-2 text-[40px] tracking-wider leading-[2.8rem] font-robotoCondensedMedium font-bold md:leading-[3.5rem] md:text-[55px] lg:leading-[5rem] lg:text-[75px] xl:text-[90px]'>WEB</div>
                                <div
                                    data-aos='reveal-text'
                                    data-aos-once='true'
                                    data-aos-anchor='#trigger-animation'
                                    data-aos-anchor-placement='bottom-bottom'
                                    className='reveal-delay-2 text-[40px] tracking-wider leading-[2.8rem] font-robotoCondensedMedium font-bold md:leading-[3.5rem] md:text-[55px] lg:leading-[5rem] lg:text-[75px] xl:text-[90px]'>DESIGN</div>
                                <div
                                    data-aos='reveal-text'
                                    data-aos-once='true'
                                    data-aos-anchor='#trigger-animation'
                                    data-aos-anchor-placement='bottom-bottom'
                                    className='reveal-delay-3 tracking-tighter text-4xl font-poppinsBlack text-[#303030] md:text-5xl lg:text-6xl xl:text-[65px]'>
                                    <span className='gradient-text-reverse'>
                                        20
                                    </span>
                                    25
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({duration: 3000});

        // Add event listener for scroll
        document.addEventListener('scroll', function() {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner');
            let speed = 0.5; // Adjust the speed as needed
            if (parallaxElement) {
            parallaxElement.style.backgroundPosition = `center ${-scrollPosition * speed}px`;
        }
        });

        return () => {
            // Clean up the event listener when the component is unmounted
            document.removeEventListener('scroll', function() {});
        };
        }, []);

    return (
        <>
            {/* <div id='banner' className='flex justify-center relative bg-gradient-to-b from-bannerColorFrom to-bannerColorTo w-[95%] h-4/6 mt-32'> */}
            <div id='banner' className='flex justify-center relative rounded-3xl w-full h-[1000px]'>

                {/* Quote */}
                <div className='self-center flex flex-col text-center text-lg text-white font-poppinsMedium z-10 px-5 md:px-16 xl:gap-8'>
                    <div
                        data-aos="fade-in"
                        data-aos-once="true"
                        className='gradient-text text-2xl font-poppinsBold sm:text-4xl lg:text-5xl xl:text-7xl'
                        >
                        Developing the tools today...
                    </div>
                    <div
                        data-aos="fade-in"
                        data-aos-delay="1300"
                        data-aos-once="true"
                        className='text-white text-base tracking-wider sm:text-2xl lg:text-3xl xl:text-4xl'>that will shape our tomorrow
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;

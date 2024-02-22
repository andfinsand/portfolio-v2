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
            <div id='banner' className='flex justify-center relative w-full h-[800px]'>

                {/* Quote */}
                <div className='self-center text-center text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-white italic z-10 px-16'>
                    <div
                        data-aos="fade-in"
                        data-aos-once="true"
                        >
                        Developing the tools today...
                        <span
                            data-aos="fade-in"
                            data-aos-delay="1300"
                            data-aos-once="true"
                        >
                            that will shape our tomorrow.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;

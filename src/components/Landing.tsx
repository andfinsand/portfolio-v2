import { useEffect} from 'react';
import 'aos/dist/aos.css';
import lax from 'lax.js';

const SCROLL_AMPLIFICATION = 2;

const Landing = () => {

    useEffect(() => {
        lax.init();

        // Custom driver to amplify scroll
        lax.addDriver('scrollY', () => {
            return Math.min(
                document.documentElement.scrollHeight - window.innerHeight,
                window.scrollY * SCROLL_AMPLIFICATION
            );
        });

        lax.addElements('.lax-title', {
            scrollY: {
                translateY: [
                    ['0', 'pageHeight'],
                    ['0', 'pageHeight'],
                    {
                        easing: 'linear'
                    }
                ]
            }
        });

        return () => {
            lax.removeElements('.lax-title');
        };
    }, []);

    return (
        <>
            <div
                className='flex justify-center h-screen w-full pt-60 sm:pt-0'
            >
                <div className='lax-title fixed text-[#303030] sm:top-[28%]'>
                    <h1
                        data-aos='fade-in'
                        data-aos-delay='1200'
                        className='text-4xl font-semibold drop-shadow-[0_0_3px_rgba(140,140,140,.5)] sm:text-5xl xl:text-6xl'
                    >
                        ANDREW FINSAND
                    </h1>
                    <h2
                        data-aos='fade-in'
                        data-aos-delay='1200'
                        className='text-center text-xl font-poppinsLight drop-shadow-[0_0_1px_rgba(140,140,140,.6)] sm:text-2xl xl:text-3xl'
                    >
                        Software Developer
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Landing;

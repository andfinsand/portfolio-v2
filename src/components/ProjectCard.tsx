import { useState, useRef } from 'react';
import Image from "next/image";

const ProjectCard= () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<any>(null);
    const [showSlide, setShowSlide] = useState<boolean>(false);
    const [showVideo, setShowVideo] = useState(false);

    // Toggle video display to continue playing when button is clicked
    const toggleVideo = () => {
        setShowVideo(!showVideo);
        setShowVideo(true);
    };

    // Display slide
    const toggleSlider = () => {
        setShowSlide(!showSlide);
    }

    // Play video on hover and pause when hover is stopped
    const handleMouseEnter = () => {
        setIsHovered(true);
        setShowVideo(true);
        if (!isVideoPlaying) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (!showSlide) {
            setShowVideo(false);
        }
        if (isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    }

    // Opacity styling for video on hover
    const videoStyle = {
        opacity: showVideo ? 1 : 0,
        transition: 'opacity 100ms',
        zIndex: showVideo ? 2 : 1,
    };

    // Show and increase project footer height on hover
    const projectFooter = isHovered ? {
        height: '15%',
        transition: 'all 0.2s',
    } : {
        height: '6%',
        transition: 'all 0.2s',
    };

    return (
        <>
            <div className='flex relative overflow-hidden rounded-3xl shadow-customShadowLarge w-full h-[350px] md:h-[400px] 2xl:h-[600px]'>

                {/* Top layer */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ overflow: 'hidden' }}
                    className={`group absolute overflow-hidden w-full  ${showSlide ? 'z-10' : 'z-30'}`}
                >

                    {/* Link to project */}
                    <a
                        href='https://pixelangelo.io/'
                        target='_blank'
                        className='flex w-full h-[350px] md:h-[400px] 2xl:h-[600px] '
                    >

                        {/* Video */}
                        <video
                            autoPlay
                            loop
                            muted
                            preload='metadata'
                            ref={videoRef}
                            style={videoStyle}
                            className='absolute object-cover rounded-3xl w-full h-[350px] md:h-[400px] 2xl:h-[600px]'
                        >
                            <source
                                src='/pixelangelo-demo.mp4'
                                type='video/mp4'
                            />
                        </video>

                        {/* Image */}
                        <Image
                            src='/pixelangelo.png'
                            alt='Pixelangelo logo'
                            width={897}
                            height={897}
                            priority={true}
                            className='absolute object-cover rounded-3xl h-[350px] md:h-[400px] 2xl:h-[600px] 2xl:w-full'
                        />

                    </a>

                    {/* Footer wrapper - contains footer and slide */}
                    {/* Footer */}
                    <div
                        style={projectFooter}
                        className='absolute h-full bottom-0 bg-projectFooter backdrop-blur-lg rounded-b-3xl text-white w-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out'
                    >

                        {/* Wrapper for name, github, and button */}
                        <div className='flex justify-between items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out px-5 lg:px-7'>

                            {/* Project name */}
                            <a
                                href='https://pixelangelo.io/'
                                target='_blank'
                                className='tracking-wide duration-100 hover:text-[#363636] lg:font-poppinsMedium 2xl:text-xl'
                            >
                                PixelAngelo
                            </a>

                            <div className='flex gap-6'>

                                {/* Github icon */}
                                <a
                                    href='https://github.com/andfinsand/PixelAngelo'
                                    target='_blank'
                                >
                                    <Image
                                        src='/github-project.svg'
                                        alt='Github logo'
                                        width={100}
                                        height={100}
                                        priority={true}
                                        className='w-6 hover:brightness-[.25] duration-100 2xl:w-8'
                                    />
                                </a>

                                {/* Info button to display project slide */}
                                <button
                                    onClick={toggleSlider}
                                    className='flex justify-center bg-white/40 hover:bg-black/30 duration-100 rounded-[4px] w-6 2xl:w-8'>
                                    <span className='caret self-center'></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hidden slide - make component */}
                {/* Footer expanded to top */}
                <div className={`absolute bg-projectFooterExpand text-white w-full z-20 ${showSlide ? 'translate-y-0 duration-700 bottom-[85%] h-[15%] rounded-t-3xl' : 'translate-y-full duration-700 bottom-[20%]'}`}>

                    {/* Wrapper for name, github, and button */}
                    <div className={`flex justify-between items-center h-full px-5 lg:px-7 ${showSlide ? '' : ''}`}>

                        {/* Project name */}
                        <a
                            href='https://pixelangelo.io/'
                            target='_blank'
                            className='tracking-wide hover:text-[#363636] duration-100 lg:font-poppinsMedium 2xl:text-xl'
                        >
                            PixelAngelo
                        </a>

                        <div className='flex gap-6'>

                            {/* Github icon */}
                            <a
                                href='https://github.com/andfinsand/PixelAngelo'
                                target='_blank'
                            >
                                <Image
                                    src='/github-project.svg'
                                    alt='Github logo'
                                    width={100}
                                    height={100}
                                    priority={true}
                                    className='w-6 hover:brightness-[.25] duration-100 2xl:w-8'
                                />
                            </a>

                            {/* Info button to display project slide */}
                            <button
                                onClick={toggleSlider}
                                className='flex justify-center bg-white/40 hover:bg-black/30 duration-100 rounded-[4px] w-6 2xl:w-8'>
                                <span className={`caret self-center ${showSlide ? 'transform rotate-180 duration-700' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide info */}
                <div className={`absolute rounded-b-3xl bg-white w-full z-10 ${showSlide ? 'bottom-0 h-[85%] duration-700' : 'top-full h-8'}`}> {/* Starting height and top value is necessary to match the starting height of the footer to maintain rounded corners. */}
                    <div className={`flex flex-col gap-5 p-10 lg:p-14 xl:p-20 ${showSlide ? 'opacity-100 transition-opacity duration-[1000ms]' : 'opacity-0'}`}>
                        <div className='font-poppinsSemiBold text-lg'>Description</div>
                        <div>A web application harnessing the power of the Real-ESRGAN AI model to upscale images by 2x. Simply select an image file, or drag and drop an image over the drop zone, and wait for the model to upscale the image. Once complete, compare and contrast the difference in quality using the slider.</div>
                    </div>
                </div>

        </div>


        </>
    );
}

export default ProjectCard;

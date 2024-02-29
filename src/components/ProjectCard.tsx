import { useState, useRef } from 'react';
import Image from "next/image";

const ProjectCard= () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<any>(null);

    // Play video on hover with pause when hover is stopped
    const handleMouseEnter = () => {
        setIsHovered(true);
        if (!isVideoPlaying) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    }

    // Styling for video and image thumbnail to alternate opacity on hover
    const videoStyle = {
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 100ms',
        zIndex: isHovered ? 2 : 1,
    };

    return (
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='project-card-container relative w-full group'
            >

                {/* Link to project */}
                <a
                    href='https://pixelangelo.io/'
                    target='_blank'
                    className='flex w-full h-[450px] 2xl:h-[650px]'
                >

                    {/* Video demo */}
                    <video
                        autoPlay
                        loop
                        muted
                        preload='metadata'
                        ref={videoRef}
                        style={videoStyle}
                        className='absolute h-[450px] 2xl:h-[650px] object-cover rounded-3xl w-full'
                    >
                        <source src='/pixelangelo-demo.mp4' type='video/mp4' />
                    </video>

                    {/* Image */}
                    <Image
                        src='/pixelangelo.png'
                        alt='Pixelangelo logo'
                        width={897}
                        height={897}
                        priority={true}
                        className='absolute h-[450px] 2xl:h-[650px] rounded-3xl object-cover 2xl:w-full'
                    />

                </a>

                {/* Footer on hover */}
                <div className='project-footer absolute bottom-0 left-0 invisible bg-projectFooter backdrop-blur-lg rounded-b-3xl text-white z-10 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                    <div className='flex justify-between items-center h-full px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out lg:px-7'>
                        <a
                            href='https://pixelangelo.io/'
                            target='_blank'
                            className='2xl:text-xl'>PixelAngelo</a>

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
                                className='w-7 2xl:w-9'
                            />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectCard;

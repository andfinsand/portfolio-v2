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
                className='project-card-container relative w-full'
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
                <div className='project-footer absolute bottom-0 left-0 w-full bg-white/40 backdrop-blur-lg text-white invisible rounded-b-3xl px-6'>
                    <div className='flex flex-row justify-between'>
                        <div className=''>PixelAngelo</div>
                        <div className='bg-white w-7 h-7 rounded-full'></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectCard;

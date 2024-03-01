import { useState, useRef } from 'react';
import Image from "next/image";

const ProjectCard= () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<any>(null);
    const [displayContent, setDisplayContent] = useState<boolean>(false);

    // Play video on hover and pause when hover is stopped
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

    // Opacity styling for video on hover
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
                className='project-card-container group relative w-full'
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
                        className='absolute object-cover rounded-3xl w-full h-[450px] 2xl:h-[650px] '
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
                        className='absolute object-cover rounded-3xl h-[450px] 2xl:h-[650px] 2xl:w-full'
                    />

                </a>

                {/* Footer on hover */}
                <div className='project-footer absolute bottom-0 left-0 bg-projectFooter backdrop-blur-lg rounded-b-3xl text-white z-10 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                    <div className='flex justify-between items-center h-full px-5 lg:px-7 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out'>

                        {/* Project name */}
                        <a
                            href='https://pixelangelo.io/'
                            target='_blank'
                            className='tracking-wide hover:drop-shadow-[0_0px_2px_rgba(255,255,255,0.35)] hover:text-[17px] duration-100 lg:font-poppinsMedium 2xl:text-xl 2xl:hover:text-[21px]'
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
                                    className='w-6 2xl:w-8'
                                />
                            </a>

                            {/* Info button */}
                            <button
                                onClick={() => setDisplayContent(!displayContent)}
                                className='flex justify-center bg-white/40 hover:bg-white/25 duration-100 rounded-[4px] w-6 2xl:w-8'>
                                <span className={`caret self-center ${displayContent ? 'transform rotate-180 duration-200' : 'transform rotate-0 duration-200'}`}></span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectCard;

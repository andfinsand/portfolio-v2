import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import ProjectCardSlider from '../components/ProjectCardSlider'

type ProjectCardProps = {
    name: string;
    thumbnail: string;
    demo: string;
    projectUrl: string;
    github: string;
    description: string;
    technical: string;
    technologyLabel: string[];
    exampleImages: string;
};

const ProjectCard= ({ name, thumbnail, demo, projectUrl, github, description, technical, technologyLabel, exampleImages }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<any>(null);
    const [showSlide, setShowSlide] = useState<boolean>(false);
    const [showVideo, setShowVideo] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect device type, mobile vs desktop
    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    }, []);

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
        if (videoRef.current && !isVideoPlaying) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (!showSlide) {
            setShowVideo(false);
        }
        if (videoRef.current && isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    };

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
        height: '0%',
        transition: 'all 0.2s',
    };

    return (
        <>
            <div className='flex relative overflow-hidden rounded-3xl shadow-customShadowLarge w-full h-[350px] md:h-[450px] 2xl:h-[600px]'>

                {/* Top layer */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ overflow: 'hidden' }}
                    className={`group absolute overflow-hidden w-full  ${showSlide ? 'z-10' : 'z-30'}`}
                >

                    {/* Link to project */}
                    <a
                        href={projectUrl}
                        target='_blank'
                        className='flex w-full h-[350px] md:h-[450px] 2xl:h-[600px] '
                    >

                        {/* Video */}
                        {!isMobile && (
                            <video
                                autoPlay
                                loop
                                muted
                                preload='metadata'
                                ref={videoRef}
                                style={videoStyle}
                                className='absolute object-cover rounded-3xl w-full h-[350px] md:h-[450px] 2xl:h-[600px]'
                            >
                                <source
                                    src={demo}
                                    type='video/mp4'
                                />
                            </video>
                        )}

                        {/* Image */}
                        <Image
                            src={thumbnail}
                            alt='Project logo'
                            width={1200}
                            height={1029}
                            // priority={true}
                            loading='lazy'
                            className='absolute object-cover rounded-3xl h-[350px] md:h-[450px] 2xl:h-[600px] 2xl:w-full'
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
                                href={projectUrl}
                                target='_blank'
                                className='tracking-wide duration-100 hover:text-[#363636] lg:font-poppinsMedium 2xl:text-xl'
                            >
                                {name}
                            </a>

                            <div className='flex gap-6'>

                                {/* Github icon */}
                                {github && (
                                    <a
                                        href={github}
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
                                )}

                                {/* Info button to display project slide */}
                                <button
                                    onClick={toggleSlider}
                                    className='flex justify-center bg-white/40 hover:bg-black/30 duration-100 rounded-[4px] w-6 h-[23.5px] 2xl:w-8 2xl:h-[31.3px]'>
                                    <span className='caret self-center'></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project information slide */}
                <ProjectCardSlider
                    showSlide={showSlide}
                    toggleSlider={toggleSlider}
                    name={name}
                    projectUrl={projectUrl}
                    github={github}
                    description={description}
                    technical={technical}
                    technologyLabel={technologyLabel}
                    exampleImages={exampleImages}
                />

            </div>
        </>
    );
}

export default ProjectCard;

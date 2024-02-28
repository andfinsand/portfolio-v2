import { useState } from 'react';
import Image from "next/image";

const ProjectCard= () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex overflow-hidden w-full'>

                {/* Link to project */}
                <a
                    href='https://pixelangelo.io/'
                    target='_blank'
                    className='flex w-full h-[450px] 2xl:h-[650px]'
                >

                    {/* Video demo */}
                    {isHovered ? (
                        <video autoPlay loop muted className='object-cover rounded-3xl w-full'>
                            <source src='/pixelangelo-demo.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>

                    ) : (

                        // Image
                        <Image
                            src='/pixelangelo.png'
                            alt='Pixelangelo logo'
                            width={897}
                            height={897}
                            priority={true}
                            className='rounded-3xl object-cover 2xl:w-full'
                        />

                    )}
                </a>

                {/* Footer on hover */}
                <div className='absolute bottom-0 left-0 w-full bg-[rgba(0, 0, 0, 0.6)] image-overlay '>
                    Pixelangelo
                </div>

            </div>
        </>
    );
}

export default ProjectCard;

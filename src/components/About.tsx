import Image from "next/image";
import TechnologyCard from './TechnologyCard';

const About = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>

                {/* About card */}
                <div className='flex justify-between items-center bg-white/20 backdrop-blur-3xl text-white w-4/5 h-4/6'>

                    {/* Headshot */}
                    <Image
                        src='/headshot.png'
                        alt='Headshot of Andrew Finsand'
                        width={897}
                        height={984}
                        priority={true}
                        className='w-fit h-[90%] self-end object-cover'
                    />

                    {/* Content */}
                    <div className='flex flex-col gap-12 mx-20'>

                        {/* Content - Text */}
                        <div className='flex flex-col gap-7'>
                            <h1 className='text-4xl font-semibold'>
                                Hi, I'm Andrew.
                            </h1>
                            <p className='tracking-wide'>
                                I have a passion for building, problem solving, and being creative. Contact me for web development services, full-stack projects, or design ideas.
                            </p>
                            <p>
                                Cheers!
                            </p>
                        </div>

                        {/* Content - Technologies */}
                        <div className='flex justify-between'>

                            <TechnologyCard
                                label='Languages'
                                first='Python'
                                second='JavaScript'
                                third='HTML / CSS'
                            />

                            <TechnologyCard
                                label='Frameworks'
                                first='Django / Flask'
                                second='React / Next.js'
                                third='WordPress'
                            />

                            <TechnologyCard
                                label='Design'
                                first='Figma'
                                second='Gimp'
                                third='Stable Diffusion'
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

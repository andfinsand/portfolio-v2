import Image from "next/image";

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

                        {/* Content - text */}
                        <div className='flex flex-col gap-7'>
                            <h1 className='text-4xl'>
                                Hi, I'm Andrew.
                            </h1>
                            <h2 className=''>
                                I have a passion for building, problem solving, and being creative. Contact me for web development services, full-stack projects, or design ideas.
                            </h2>
                            <p className=''>
                                Cheers!
                            </p>
                        </div>

                        {/* Content - Technologies */}
                        <div className='flex justify-between'>
                            <div className='flex flex-col justify-around text-center bg-white/20 backdrop-blur-lg w-[200px] h-[150px] rounded-3xl shadow-customShadow'>
                                <div className='border-b-2'>Languages</div>
                                <div className='flex flex-col gap-2 text-sm'>
                                    <div>Python</div>
                                    <div>Javascript</div>
                                    <div>HTML/CSS</div>
                                </div>
                            </div>

                            <div className='text-center bg-white/20 backdrop-blur-lg w-[200px] h-[150px] rounded-3xl'>
                                <div>Frameworks</div>
                            </div>

                            <div className='text-center bg-white/20 backdrop-blur-lg w-[180px] h-[150px] rounded-3xl'>
                                <div>Design</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

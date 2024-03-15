import Image from "next/image";
import TechnologyBubble from "./TechnologyBubble";
import SliderImage from "./SliderImage";

type ProjectCardSliderProps = {
    showSlide: boolean;
    toggleSlider: () => void;
    name: string;
    projectUrl: string;
    github: string;
    description: string;
    technical: string;
    technologyLabel: string[];
    exampleImages: string;
};

const ProjectCardSlider = ({ showSlide, toggleSlider, name, projectUrl, github, description, technical, technologyLabel, exampleImages }: ProjectCardSliderProps) => {
    return (
        <>

            {/* Footer expanded to top */}
            <div className={`absolute bg-projectFooter backdrop-blur-lg firefox-bg text-white w-full z-20 ${showSlide ? 'translate-y-0 duration-700 bottom-[85%] h-[15%] rounded-t-3xl visible' : 'translate-y-full duration-700 bottom-[20%] invisible'}`}>

                {/* Wrapper for name, github, and button */}
                <div className='flex justify-between items-center h-full px-5 lg:px-7'>

                    {/* Project name */}
                    <a
                        href={projectUrl}
                        target='_blank'
                        className='tracking-wide hover:text-[#363636] duration-100 lg:font-poppinsMedium 2xl:text-xl'
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
                                    // priority={true}
                                    loading='lazy'
                                    className='w-6 hover:brightness-[.25] duration-100 2xl:w-8'
                                />
                            </a>
                        )}

                        {/* Info button to display project slide */}
                        <button
                            onClick={toggleSlider}
                            className='flex justify-center bg-white/40 hover:bg-black/30 duration-100 rounded-[4px] w-6 h-[23.5px] 2xl:w-8 2xl:h-[31.3px]'>
                            <span className={`caret self-center ${showSlide ? 'transform rotate-180 duration-700' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Slide info */}
            <div className={`absolute overflow-auto rounded-b-3xl bg-white w-full ${showSlide ? 'bottom-0 h-[85%] duration-700 z-40' : 'top-full h-8 z-10'}`}> {/* Starting height and top value is necessary to match the starting height of the footer to maintain rounded corners. */}
                <div className={`flex flex-col gap-7 px-6 py-7 xs:gap-10 xs:px-12 xs:py-10 lg:gap-12 lg:px-16 lg:py-12 2xl:gap-16 2xl:px-20 2xl:py-16 ${showSlide ? 'opacity-100 transition-opacity duration-[1000ms]' : 'opacity-0'}`}>

                    {/* Description */}
                    <div className='flex flex-col gap-4'>
                        <div className='font-poppinsSemiBold 2xl:text-lg'>Description</div>
                        <div className='leading-normal tracking-wide text-sm 2xl:text-base'>{description}</div>
                    </div>

                    {/* Technical */}
                    <div className='flex flex-col gap-4'>
                        <div className='font-poppinsSemiBold 2xl:text-lg'>Technical</div>
                        <div className='leading-normal tracking-wide text-sm 2xl:text-base'>{technical}</div>
                    </div>

                    {/* Map languages and frameworks */}
                    <div className='flex flex-wrap justify-around self-center w-full text-white text-sm gap-x-2 gap-y-4 xs:justify-between 2xl:gap-4 2xl:text-base 3xl:justify-around'>
                        {technologyLabel.map((label, index) => (
                            <TechnologyBubble key={index} label={label} />
                        ))}
                    </div>

                    {/* Example images if applicable */}
                    <SliderImage exampleImages={exampleImages} />

                </div>
            </div>
        </>
    );
}

export default ProjectCardSlider;

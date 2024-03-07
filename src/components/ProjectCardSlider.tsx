import Image from "next/image";

type ProjectCardSliderProps = {
    showSlide: boolean;
    toggleSlider: () => void;
};

const ProjectCardSlider = ({ showSlide, toggleSlider }: ProjectCardSliderProps) => {
    return (
        <>

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
        </>
    );
}

export default ProjectCardSlider;

import Image from "next/image";
import TechnologyBubble from "./TechnologyBubble";
import SliderImage from "./SliderImage";

type ProjectCardSliderProps = {
    showSlide: boolean;
    toggleSlider: () => void;
};

const ProjectCardSlider = ({ showSlide, toggleSlider }: ProjectCardSliderProps) => {
    return (
        <>

            {/* Footer expanded to top */}
            <div className={`absolute bg-projectFooterGray text-white w-full z-20 ${showSlide ? 'translate-y-0 duration-700 bottom-[85%] h-[15%] rounded-t-3xl' : 'translate-y-full duration-700 bottom-[20%]'}`}>

                {/* Wrapper for name, github, and button */}
                <div className='flex justify-between items-center h-full px-5 lg:px-7'>

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
                                // priority={true}
                                loading='lazy'
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
            <div className={`absolute overflow-auto rounded-b-3xl bg-white w-full ${showSlide ? 'bottom-0 h-[85%] duration-700 z-40' : 'top-full h-8 z-10'}`}> {/* Starting height and top value is necessary to match the starting height of the footer to maintain rounded corners. */}
                <div className={`flex flex-col gap-7 px-6 py-7 xs:gap-10 xs:px-12 xs:py-10 lg:gap-12 lg:px-16 lg:py-12 2xl:gap-16 2xl:px-20 2xl:py-16 ${showSlide ? 'opacity-100 transition-opacity duration-[1000ms]' : 'opacity-0'}`}>

                    {/* Description */}
                    <div className='flex flex-col gap-4'>
                        <div className='font-poppinsSemiBold 2xl:text-lg'>Description</div>
                        <div className='leading-normal tracking-wide text-sm 2xl:text-base'>A web application harnessing the power of the Real-ESRGAN AI model to upscale images by 2x. Simply select an image file, or drag and drop an image over the drop zone, and wait for the model to upscale the image. Once complete, compare and contrast the difference in quality using the slider.</div>
                    </div>

                    {/* Technical */}
                    <div className='flex flex-col gap-4'>
                        <div className='font-poppinsSemiBold 2xl:text-lg'>Technical</div>
                        <div className='leading-normal tracking-wide text-sm 2xl:text-base'>PixelAngelo is built with Next.JS on the front end and Flask on the back end. Once the image is submitted through the front end, the back end redirects the image to a Backblaze B2 bucket. The back end instructs a Runpod container to obtain the image from the bucket and utilizes the RealESRGAN upscaling model to upscale the image with cloud-based GPUs. Once upscaled, the new image is returned to the storage bucket where the front end fetches both original and upscaled images for display.</div>
                    </div>

                    {/* Languages and frameworks */}
                    <div className='flex flex-wrap justify-between self-center w-full text-white text-sm gap-x-2 gap-y-4 3xl:justify-around 2xl:gap-4 2xl:text-base'>
                        <TechnologyBubble label='Next.js' />
                        <TechnologyBubble label='Flask' />
                        <TechnologyBubble label='Docker' />
                        <TechnologyBubble label='Cloud GPU' />
                        <TechnologyBubble label='Cloud Storage' />
                    </div>

                    {/* Example images if applicable */}
                    <SliderImage />

                </div>
            </div>
        </>
    );
}

export default ProjectCardSlider;

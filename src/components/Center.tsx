import Image from "next/image";
import Banner from './Banner'
import ProjectCard from './ProjectCard'

const Center = () => {
    return (
        <>
            <div className=' flex flex-col justify-center bg-[#EFEFEF] backdrop-blur-3xl h-fit px-5 py-32 md:px-14'>
                <Banner />
                <div className='flex flex-col'>
                    <div className='flex flex-col justify-between gap-14 mt-32 md:flex md:flex-row'>
                        <ProjectCard
                            name='PixelAngelo'
                            thumbnail={'/thumbnail-pixelangelo.png'}
                            demo={'/demo-pixelangelo.mp4'}
                            projectUrl={'https://pixelangelo.io/'}
                            github={'https://github.com/andfinsand/PixelAngelo'}
                            description={'A web application harnessing the power of the Real-ESRGAN AI model to upscale images by 2x. Simply select an image file, or drag and drop an image over the drop zone, and wait for the model to upscale the image. Once complete, compare and contrast the difference in quality using the slider.'}
                            technical={'PixelAngelo is built with Next.JS on the front end and Flask on the back end. Once the image is submitted through the front end, the back end redirects the image to a Backblaze B2 bucket. The back end instructs a Runpod container to obtain the image from the bucket and utilizes the RealESRGAN upscaling model to upscale the image with cloud-based GPUs. Once upscaled, the new image is returned to the storage bucket where the front end fetches both original and upscaled images for display.'}
                            exampleImages={'/pixelangelo-system-design.png'}
                        />
                        <ProjectCard
                            name='Gradient Wizard'
                            thumbnail={'/thumbnail-gradient-wizard.png'}
                            projectUrl={'https://gradientwizard.io/'}
                            github={'https://github.com/andfinsand/gradient-wizard'}
                            description={'A web application that utilizes the OpenAI API and gpt-3.5-turbo model to create two or three-tone gradients based on user input. The generated gradients are accompanied by hex codes, a unique name, and a description for why the colors were chosen.'}
                            exampleImages={''}
                        />
                    </div>
                    <div className='flex flex-col justify-between gap-16 mt-16 md:flex md:flex-row'>
                        <ProjectCard
                            name='Finsand Design'
                            thumbnail={'/thumbnail-finsand-design.png'}
                            demo={'/demo-finsand-design.mp4'}
                            projectUrl={'https://finsanddesign.com/'}
                            github={''}
                            description={'Architectural portfolio showcasing designs for residential homes, commercial buildings, and government centers. Learn about ADUs or the process of working with an architect to design your custom dream home.'}
                            exampleImages={''}
                        />
                        <ProjectCard
                            name='JCC Heating and Cooling'
                            thumbnail={'/thumbnail-jcc.png'}
                            demo={'/demo-jcc.mp4'}
                            projectUrl={'https://hvac-bayarea.nl/'}
                            github={''}
                            description={'Commercial website for JCC Heating and Cooling, a family-owned HVAC business serving Contra Costa, California. This responsive website serves as an online presence for showcasing their services, company history, and service areas to customers across the region.'}
                            technical={'/'}
                            exampleImages={''}
                        />
                    </div>
                    <div className='flex flex-col justify-between gap-16 mt-16 md:flex md:flex-row'>
                        <ProjectCard
                            name='Apefolio'
                            thumbnail={'/thumbnail-apefolio.png'}
                            demo={'/demo-apefolio2.mp4'}
                            projectUrl={'https://crypto-portfolio-production.up.railway.app/'}
                            github={'https://github.com/dna-projects/crypto-portfolio'}
                            description={'A Django web app to monitor your cryptocurrency portfolio. View overall portfolio balance with profit and loss percentages. Add new tokens to your portfolio and view calculated holdings based on live prices. View global cryptocurrency market cap data and search for specific tokens.'}
                            technical={''}
                            exampleImages={''}
                        />
                        <ProjectCard
                            name='Ai Chatbot'
                            thumbnail={'/thumbnail-chatbot2.png'}
                            demo={'/demo-ai-chatbot.mp4'}
                            projectUrl={'https://www.andrewfinsand.dev/'}
                            github={''}
                            description={'An Ai chatbot trained on data about myself to answer any questions you may have about about my background and experience. Training data is retreived from Botpress, an open-source platform for building, managing, and deploying conversational AI chatbots. Simply click on the chat bubble to start a conversation!'}
                            technical={'Developed with Botpress using a graphical interface to visually build and connect dialogue flows. A knowledge base was designed to guide users through information on my background, experience, projects, and skills. Custom intents are used to handle diverse questions that are not covered by the bots suggestions. Low frequency questions that are also not covered in the knowledge base are answered using a fallback web search.'}
                            exampleImages={'/botpress-flow.png'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Center;

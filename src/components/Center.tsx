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
                            projectUrl={'https://pixelangelo.io/'}
                        />
                        <ProjectCard
                            name='Gradient Wizard'
                            thumbnail={'/thumbnail-gradient-wizard.png'}
                            projectUrl={'https://gradientwizard.io/'}
                        />
                    </div>
                    <div className='flex flex-col justify-between gap-16 mt-16 md:flex md:flex-row'>
                        <ProjectCard
                            name='Finsand Design'
                            thumbnail={'/thumbnail-finsand-design.png'}
                            projectUrl={'https://finsanddesign.com/'}
                        />
                        <ProjectCard
                            name='JCC Heating and Cooling'
                            thumbnail={'/thumbnail-jcc.png'}
                            projectUrl={'https://hvac-bayarea.nl/'}
                        />
                    </div>
                    <div className='flex flex-col justify-between gap-16 mt-16 md:flex md:flex-row'>
                        <ProjectCard
                            name='Apefolio'
                            thumbnail={'/thumbnail-apefolio.png'}
                            projectUrl={'https://crypto-portfolio-production.up.railway.app/'}
                        />
                        <ProjectCard
                            name='Ai Chatbot'
                            thumbnail={'/thumbnail-chatbot2.png'}
                            projectUrl={'https://www.andrewfinsand.dev/'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Center;

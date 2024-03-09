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
                        <ProjectCard thumbnail={'/thumbnail-pixelangelo.png'}/>
                        <ProjectCard thumbnail={'/thumbnail-gradient-wizard.png'}/>
                    </div>
                    <div className='flex flex-col justify-between gap-16 mt-16 md:flex md:flex-row'>
                        <ProjectCard thumbnail={'/thumbnail-finsand-design.png'} />
                        <ProjectCard thumbnail={'/thumbnail-jcc.png'} />
                    </div>
                    <div className='flex flex-col justify-between gap-16 mt-16 md:flex md:flex-row'>
                        <ProjectCard thumbnail={'/thumbnail-apefolio.png'} />
                        <ProjectCard thumbnail={'/thumbnail-chatbot.png'} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Center;

import Image from "next/image";
import Banner from './Banner'
import ProjectCard from './ProjectCard'

const Center = () => {
    return (
        <>
            <div className=' flex flex-col justify-center bg-[#EFEFEF] backdrop-blur-3xl h-fit px-5 py-32 md:px-14'>
            <Banner />
            <div className='flex flex-col'>
                <div className='flex flex-col justify-between gap-16 sm:flex sm:flex-row mt-32'>
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className='flex flex-col justify-between gap-16 sm:flex sm:flex-row mt-16'>
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className='flex flex-col justify-between gap-16 sm:flex sm:flex-row mt-16'>
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            </div>
        </>
    );
}

export default Center;

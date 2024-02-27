import Image from "next/image";
import Banner from './Banner'
import ProjectCard from './ProjectCard'

const Center = () => {
    return (
        <>
            <div className=' flex flex-col justify-center bg-[#EFEFEF] backdrop-blur-3xl h-fit px-14 py-32'>
            <Banner />
            <div className='flex flex-col'>
                <div className='flex flex-col sm:flex sm:flex-row justify-between mt-32'>
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className='flex flex-col sm:flex sm:flex-row justify-between mt-16'>
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className='flex flex-col sm:flex sm:flex-row justify-between mt-16'>
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            </div>
        </>
    );
}

export default Center;

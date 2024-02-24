import Image from "next/image";
import Banner from './Banner'
import ProjectCard from './ProjectCard'

const Center = () => {
    return (
        <>
            <div className=' flex flex-col justify-center bg-[#F5F5F5] backdrop-blur-3xl h-fit px-10 py-32'>
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

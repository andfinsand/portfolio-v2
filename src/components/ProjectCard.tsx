import Image from "next/image";

const ProjectCard= () => {
    return (
        <>
            <div className='border w-full sm:w-[48%]'>
                <Image
                    src='/pixelangelo.png'
                    alt='Pixelangelo logo'
                    width={897}
                    height={897}
                    priority={true}
                    className='w-full'
                />
            </div>
        </>
    );
}

export default ProjectCard;

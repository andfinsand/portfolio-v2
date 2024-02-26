import Image from "next/image";

const ProjectCard= () => {
    return (
        <>
            <div className='w-full sm:w-[48%]'>
                <Image
                    src='/pixelangelo.png'
                    alt='Pixelangelo logo'
                    width={897}
                    height={897}
                    priority={true}
                    className='rounded-3xl w-full'
                />
            </div>
        </>
    );
}

export default ProjectCard;

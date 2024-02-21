import Image from "next/image";
import Banner from './Banner'

const Center = () => {
    return (
        <>
            <div className='flex justify-center bg-[#E0E0E0]/60 backdrop-blur-3xl h-screen'>
            <Banner />
            </div>
        </>
    );
}

export default Center;

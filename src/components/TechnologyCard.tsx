import Image from "next/image";
import Divider from './Divider';

type TechnologyCardProps = {
    label: string;
    first: string;
    second: string;
    third: string;
};

const TechnologyCard = ({ label, first, second, third }: TechnologyCardProps) => {
    return (
        <>
            <div className='flex flex-col text-center bg-white/20 backdrop-blur-lg rounded-3xl shadow-customShadow w-1/2 min-w-[200px] mx-5'>
                <div>
                    <div className='my-4 font-semibold'>{label}</div>
                    <Divider />
                </div>

                <div className='flex flex-col text-sm font-poppinsLight gap-2.5 mt-4 mb-5'>
                    <div>{first}</div>
                    <div>{second}</div>
                    <div>{third}</div>
                </div>
            </div>
        </>
    );
}

export default TechnologyCard;

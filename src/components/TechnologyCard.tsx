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
            <div className='flex flex-col text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-customShadow w-4/5 min-w-[120px] sm:rounded-2xl sm:w-1/3 xl:max-w-[210px] 2xl:rounded-3xl'>
                <div>
                    <div className='text-xs font-semibold my-2.5 sm:text-sm lg:my-3 2xl:text-base 2xl:my-4'>{label}</div>
                    <Divider />
                </div>

                <div className='flex flex-col text-xs font-poppinsLight gap-1 mt-2.5 mb-3 lg:gap-2 lg:mt-3 lg:mb-3.5 2xl:gap-2.5 2xl:text-sm 2xl:mt-4 2xl:mb-5'>
                    <div>{first}</div>
                    <div>{second}</div>
                    <div>{third}</div>
                </div>
            </div>
        </>
    );
}

export default TechnologyCard;
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
            <div className='flex flex-col text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-customShadow w-4/5 min-w-[110px] sm:rounded-2xl sm:w-1/3 xl:max-w-[190px] 3xl:max-w-[210px] 3xl:rounded-3xl'>
                <div>
                    <div className='text-xs font-semibold my-3 sm:text-sm sm:my-4 3xl:text-base'>{label}</div>
                    <Divider />
                </div>

                <div className='flex flex-col text-xs font-poppinsLight opacity-80 gap-2 mt-3 mb-3.5 sm:gap-3 sm:mt-3.5 sm:mb-4 3xl:text-sm 3xl:mt-4 3xl:mb-5'>
                    <div>{first}</div>
                    <div>{second}</div>
                    <div>{third}</div>
                </div>
            </div>
        </>
    );
}

export default TechnologyCard;

type TechnologyBubbleProps = {
    label: string;
};

const TechnologyBubble = ({ label }: TechnologyBubbleProps) => {
    return (
        <>
            <div className='text-center bg-technologyBubblesGray rounded-full max-h-10 px-5 py-2 2xl:py-2'>{label}</div>
        </>
    );
}

export default TechnologyBubble;

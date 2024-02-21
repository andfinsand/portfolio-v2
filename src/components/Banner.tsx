const Banner = () => {
    return (
        <>
            <div className='flex justify-center relative bg-gradient-to-b from-bannerColorFrom to-bannerColorTo w-11/12 h-4/6 mt-32'>
                {/* Gradient layer */}
                <div className='absolute bg-gradient-to-bl from-layerColorFrom to-layerColorTo w-full h-full'></div>
                {/* Quote */}
                <div className='self-center text-4xl text-white italic z-10'>
                    Developing the tools today that will shape our tomorrow.
                </div>
            </div>
        </>
    );
}

export default Banner;

import Image from "next/image";

type TechnologyCarouselImageProps = {
    thumbnail: string;
    alt: string;
};

const TechnologyCarouselImage= ({ thumbnail, alt }: TechnologyCarouselImageProps) => {
    return (
        <>
            <Image
                src={thumbnail}
                alt={alt}
                width={300}
                height={150}
                // Class widths must be a specific size to prevent the carousel from jumping. Resizing the resolution will result in jumpy animation - refresh page.
                className='self-center w-20 max-h-11 mx-5 sm:w-24 sm:max-h-14 sm:mx-8 xl:w-32 xl:max-h-[73px] xl:mx-16 2xl:w-40 2xl:max-h-[88px]'
            />
        </>
    );
};

export default TechnologyCarouselImage;

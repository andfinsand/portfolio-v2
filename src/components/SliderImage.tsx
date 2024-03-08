import { useState } from 'react';
import Image from "next/image";

const SliderImage = () => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleImageClick = () => {
        setIsEnlarged(true);
    };

    const handleOverlayClick = () => {
        setIsEnlarged(false);
    };

    return (
        <>
            <Image
                src='/pixelangelo-system-design.png'
                alt='Example image of the system design for PixelAngelo'
                width={1971}
                height={880}
                priority={true}
                className='rounded-2xl w-full'
            />
        </>
    );
}

export default SliderImage;

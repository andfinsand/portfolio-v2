import { useState } from 'react';
import Image from "next/image";

type SliderImageProps = {
    exampleImages: string;
}

const SliderImage = ( {exampleImages}: SliderImageProps) => {
    // const [imageModal, setImageModal] = useState(false);
    // const selectedImage = '/pixelangelo-system-design.png';

    return (
        <>
            {exampleImages && (
                <Image
                    src={exampleImages}
                    alt='Example image of the system design for PixelAngelo'
                    width={1971}
                    height={880}
                    priority={true}
                    className='rounded-2xl w-full'
                    // onClick={() => {
                    //     setImageModal(true)
                    // }}
                />
            )}

            {/* {imageModal && (
                <div
                    className='image-modal'
                    onClick={(event) => {
                    const target = event.target as HTMLElement;
                    if (!target.closest('.enlarged-image')) {
                        setImageModal(false);
                    }
                    }}
                >
                    Enlarged image
                    <img src={selectedImage} alt='Enlarged Project Image' className='enlarged-image rounded-2xl' />
                </div>
            )} */}

        </>
    );
}

export default SliderImage;

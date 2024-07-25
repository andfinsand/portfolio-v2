import { useEffect, useRef, useState } from 'react';
import TechnologyCarouselImage from './TechnologyCarouselImage'

type TechnologyCarouselProps = {
    isMobile: boolean;
};

const TechnologyCarousel= ({ isMobile }: TechnologyCarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);

    // Repeat list twice for extra wide resolutions, otherwise items are not appended to end of list off screen and does not appear seamless.
    // Current list does not need to repeat - long enough for 3100px width
    const [items, setItems] = useState([
        { thumbnail: '/logo-html.webp', alt: 'HTML logo' },
        { thumbnail: '/logo-css.webp', alt: 'CSS logo' },
        { thumbnail: '/logo-javascript.webp', alt: 'JavaScript logo' },
        { thumbnail: '/logo-react.webp', alt: 'React logo' },
        { thumbnail: '/logo-nextjs.webp', alt: 'Next.js logo' },
        { thumbnail: '/logo-wordpress.webp', alt: 'WordPress logo' },
        { thumbnail: '/logo-python.webp', alt: 'Python logo' },
        { thumbnail: '/logo-flask.webp', alt: 'Flask logo' },
        { thumbnail: '/logo-django.webp', alt: 'Django logo' },
        { thumbnail: '/logo-figma.webp', alt: 'Figma logo' },
        { thumbnail: '/logo-gimp.webp', alt: 'GIMP logo' },
    ]);

    // Technology carousel animation
    // NOTE: If actively adjusting the viewport width, the carousel will become jumpy. A browser refresh is required for a smooth effect.
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const firstItem = container.children[0] as HTMLElement;
        const itemWidth = firstItem.offsetWidth;
        // This line calculates the total width occupied by each item in the carousel, including its margins.
        // These margins are located in the TechnologyCarouselImage component
        const itemFullWidth = itemWidth + parseFloat(getComputedStyle(firstItem).marginRight) + parseFloat(getComputedStyle(firstItem).marginLeft);
        const speed = 35; // Control speed of carousel here - pixels per second

        let startTime: number;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / 1000; // Convert to seconds

            let newTranslateX = progress * speed;

            if (newTranslateX >= itemFullWidth) {
                // Move first item to end of list
                setItems(prevItems => {
                    const newItems = [...prevItems.slice(1), prevItems[0]];
                    return newItems;
                });
                newTranslateX = 0;
                startTime = timestamp;
            }

            setTranslateX(-newTranslateX);

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    if (isMobile) {
        return null; // Don't render the carousel on mobile
    }

    return (
        <>
            <div className='carouselWrapper flex overflow-hidden w-full mt-14 3xl:mt-28'>
                <div
                    ref={containerRef}
                    className='flex flex-row'
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {items.map((item, index) => (
                        <TechnologyCarouselImage
                            key={`${item.thumbnail}-${index}`}
                            thumbnail={item.thumbnail}
                            alt={item.alt}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TechnologyCarousel;

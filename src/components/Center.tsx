import React, { useState, useEffect } from 'react';

import Banner from './Banner'
import TechnologyCarousel from './TechnologyCarousel'
import ProjectCard from './ProjectCard'
import About from './About'

const Center = () => {

    // Disable technology carousel if mobile - carousel jumps on mobile
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    }, []);

    return (
        <>
            <div className='flex flex-col justify-center bg-[#F6FDFF] h-fit w-screen z-20 px-5 py-28 md:py-32 md:px-14'>

                {/* <Banner /> */}
                <Banner />

                {/* Technology skill carousel */}
                <TechnologyCarousel isMobile={isMobile} />

                {/* Projects */}
                <div className='flex flex-col'>
                    <div className={`flex flex-col justify-between gap-14 ${isMobile ? 'mt-32' : 'mt-14'} lg:flex lg:flex-row 3xl:mt-28`}>

                        {/* That's What She Threads */}
                        <ProjectCard
                            name="That's What She Threads"
                            thumbnail={'/thumbnail-thats-what-she-threads.webp'}
                            demo={'/demo-thats-what-she-threads.mp4'}
                            projectUrl={'https://thatswhatshethreads.shop/'}
                            github={''}
                            description={'An e-commerce hub for That’s What She Threads, a Santa Cruz-based t-shirt retailer blending premium quality with playful wit. Designed for the professionally unprofessional, it offers durable, well-fitted tees and a smooth shopping experience, from cart to delivery.'}
                            technical={'That’s What She Threads is a responsive e-commerce platform built with Next.js, leveraging MongoDB for order tracking and Sanity CMS for real-time product updates (titles, pricing, mockups). Stripe powers payments, with webhooks syncing orders to the Printful API for seamless print-on-demand fulfillment and automated shipping updates. Optimized for performance and SEO, it achieves Lighthouse scores of 98+ across desktop metrics, with UI/UX designed in Figma and enhanced by scripts automating content uploads and image optimization via Cloudinary.'}
                            technologyLabel={['Next.js', 'MongoDB', 'Sanity', 'Stripe']}
                            exampleImages={''}
                        />

                        {/* PixelAngelo */}
                        <ProjectCard
                            name='PixelAngelo'
                            thumbnail={'/thumbnail-pixelangelo.webp'}
                            demo={'/demo-pixelangelo.mp4'}
                            projectUrl={'https://pixelangelo.io/'}
                            github={'https://github.com/andfinsand/PixelAngelo'}
                            description={'A web application harnessing the power of the Real-ESRGAN AI model to upscale images by 2x. Simply select an image file, or drag and drop an image over the drop zone, and wait for the model to upscale the image. Once complete, compare and contrast the difference in quality using the slider, then download the image.'}
                            technical={'PixelAngelo is built with Next.js on the front end and Flask on the back end. When an image is uploaded, it is redirected to a Backblaze B2 storage bucket. The back end instructs a customized Runpod container to obtain the image from the B2 bucket, then utilize the RealESRGAN upscaling model to upscale the image by 2x with cloud-based GPUs. Once upscaled, the new image is returned to the B2 storage bucket where the front end fetches both original and upscaled images for display. All images are automatically deleted after 48 hours. Logo design created with Midjourney and customized with Gimp.'}
                            technologyLabel={['Next.js', 'Flask', 'Docker', 'Cloud GPU', 'Cloud Storage']}
                            exampleImages={'/pixelangelo-system-design.png'}
                        />

                    </div>
                    <div className='flex flex-col justify-between gap-16 mt-16 lg:flex lg:flex-row'>

                        {/* Gradient Wizard */}
                        <ProjectCard
                            name='Gradient Wizard'
                            thumbnail={'/thumbnail-gradient-wizard.webp'}
                            demo={'/demo-gradient-wizard.mp4'}
                            projectUrl={'https://gradientwizard.io/'}
                            github={'https://github.com/andfinsand/gradient-wizard'}
                            description={'A web application that utilizes the OpenAI API and gpt-3.5-turbo model to create two or three-tone gradients based on user input. The generated gradients are accompanied by hex codes, a unique name, and a description for why the colors were chosen. Users can navigate between generated gradients and easily copy hex codes.'}
                            technical={"Gradient Wizard is built with React on the front end and Django on the back end. The user's input is sent through the OpenAI API to the GPT-3.5 Turbo model in prompt format. The API response returns hex codes, a unique name, and description in JSON format that dynamically updates the front end. The history of gradients is managed within the React component's state, allowing users to easily switch between gradients. Logo design created with Midjourney and customized with Gimp."}
                            technologyLabel={['React', 'Django', 'Docker', 'TailwindCSS', 'OpenAI API']}
                            exampleImages={''}
                        />

                        {/* HVAC Demo */}
                        <ProjectCard
                            name='HVAC Demo'
                            thumbnail={'/thumbnail-hvac-demo.webp'}
                            demo={'/demo-hvac-demo.mp4'}
                            projectUrl={'https://hvac-website-demo.netlify.app/'}
                            github={'https://github.com/andfinsand/hvac-demo'}
                            description={'A 5-page web application demo for a mock Bay Area HVAC business, showcasing responsive design and interactive features. Built with a modern UI, the site integrates Google Maps for location interactivity and achieves near-perfect Lighthouse scores (98/95/100/100), demonstrating optimized performance and client-ready web development.'}
                            technical={'Bay Area HVAC Demo is developed with Next.js and TypeScript for a robust, type-safe front end. Tailwind CSS drives the responsive, utility-first styling, ensuring seamless mobile-to-desktop compatibility. Interactive Google Maps integration is embedded for dynamic location display, while performance optimizations yield Lighthouse scores of 98 (Performance), 95 (Accessibility), 100 (Best Practices), and 100 (SEO).'}
                            technologyLabel={['Next.js', 'TypeScript', 'TailwindCSS', 'HTML5', 'Figma']}
                            exampleImages={''}
                        />



                        {/* JCC Heating and Cooling */}
                        {/* <ProjectCard
                            name='JCC Heating and Cooling'
                            thumbnail={'/thumbnail-jcc.webp'}
                            demo={'/demo-jcc.mp4'}
                            projectUrl={'https://hvac-bayarea.nl/'}
                            github={''}
                            description={'Commercial website for JCC Heating and Cooling, a family-owned HVAC business serving Contra Costa, California. This responsive website serves as an online presence for showcasing their services, company history, and service areas to customers across the region.'}
                            technical={'JCC Heating and Cooling was built with WordPress and customized with PHP and Javascript for dynamic functionality. The logo and visual aesthetics were designed with Figma.'}
                            technologyLabel={['WordPress', 'Javascript', 'CSS', 'PHP', 'Figma']}
                            exampleImages={''}
                        /> */}
                    </div>
                    <div className='flex flex-col justify-between gap-16 mt-16 lg:flex lg:flex-row'>

                        {/* Finsand Design */}
                        <ProjectCard
                            name='Finsand Design'
                            thumbnail={'/thumbnail-finsand-design.webp'}
                            demo={'/demo-finsand-design.mp4'}
                            projectUrl={'https://finsanddesign.com/'}
                            github={''}
                            description={'An architectural portfolio showcasing designs for residential homes, commercial buildings, and government centers. Learn about ADUs or the process of working with an architect to design your custom dream home.'}
                            technical={'Finsand Design was built with WordPress and customized with PHP and Javascript for dynamic functionality. Sass was leveraged to organize and manage CSS styling. Images were originally archived and AI image upscalers and Gimp were used for restoration. The logo and visual aesthetics were designed with Figma.'}
                            technologyLabel={['WordPress', 'Javascript', 'Sass', 'PHP', 'Figma']}
                            exampleImages={''}
                        />

                        {/* Apefolio */}
                        <ProjectCard
                            name='Apefolio'
                            thumbnail={'/thumbnail-apefolio.webp'}
                            demo={'/demo-apefolio.mp4'}
                            projectUrl={'https://crypto-portfolio-production.up.railway.app/'}
                            github={'https://github.com/dna-projects/crypto-portfolio'}
                            description={'A web application to monitor your cryptocurrency portfolio. View overall portfolio balance with profit and loss percentages. Add new tokens to your portfolio and view calculated holdings based on live prices. View global cryptocurrency market cap data and search for specific tokens.'}
                            technical={'Apefolio is a fullstack application developed with Django. The front end utilizes TailwindCSS and the Django template language while SQLite manages the database. Class-based views in Python are used on the server to modularize back end functionality. APIs fetch data from CoinGecko.com to display live token prices, as well as additional token information when using the search feature.'}
                            technologyLabel={['Python', 'Django', 'HTML5', 'TailwindCSS', 'SQLite']}
                            exampleImages={''}
                        />

                        {/* AI Chatbot */}
                        {/* <ProjectCard
                            name='AI Chatbot'
                            thumbnail={'/thumbnail-chatbot.webp'}
                            demo={'/demo-ai-chatbot.mp4'}
                            projectUrl={'https://andrewfinsand.netlify.app'}
                            github={''}
                            description={'An AI chatbot trained on data about myself to answer any questions you may have about me. Training data is retrieved from Botpress, an open-source platform for building, managing, and deploying conversational AI chatbots. Simply click on the chat bubble to start a conversation!'}
                            technical={'Developed with Botpress using a graphical interface to visually build and connect dialogue flows. A knowledge base was designed to guide users through information on my background, experience, projects, and skills. Custom intents are used to handle diverse questions that are not covered by the bots suggestions. Low frequency questions that are also not covered in the knowledge base are answered using a fallback web search.'}
                            technologyLabel={['Botpress', 'API', 'CSS', 'Dialogue Manager', 'Knowledge Base']}
                            exampleImages={'/botpress-flow.png'}
                        /> */}

                    </div>
                </div>

                {/* About me section */}
                <About />

            </div>
        </>
    );
}

export default Center;

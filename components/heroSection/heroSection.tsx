import React, { useState, useEffect } from "react";
import house1 from '../../public/images/house1.avif';
import house2 from '../../public/images/house2.avif';
import house3 from '../../public/images/house3.avif';
import house4 from '../../public/images/house4.avif';
import house5 from '../../public/images/house5.avif';
import house6 from '../../public/images/house6.avif';
import Link from "next/link";

const HeroArray = [house1, house2, house3, house4, house5, house6];

export const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [nextImage, setNextImage] = useState((currentImage + 1) % HeroArray.length);
    const [transitionClass, setTransitionClass] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitionClass('slide-out');

            setTimeout(() => {
                setCurrentImage(nextImage);
                setNextImage((nextImage + 1) % HeroArray.length);
                setTransitionClass('slide-in');
            }, 1000); // Duration of the slide-out animation

        }, 5000); // Duration of the image display

        return () => clearInterval(interval);
    }, [nextImage]);

    const [imagesLoaded, setImagesLoaded] = useState(false);

useEffect(() => {
    const handleLoad = () => setImagesLoaded(true);
    const img = new Image();
    img.src = HeroArray[currentImage].src;
    img.onload = handleLoad;

    return () => img.removeEventListener('load', handleLoad);
}, [currentImage]);

    return (
        <>
             <div
                className={`background-image  pt-[100px] pb-[100px] md:py-[100px]  lg:py-[130px] min-h-[100vh] md:min-h-[50vh] lg:min-h-[100vh] after:absolute after:h-full after:bg-tpr after:w-full after:left-0 after:right-0 after:top-0`}
                style={{
                    backgroundSize : "cover",
                    backgroundImage: `url(${HeroArray[currentImage].src})`,
                }}
            />
            <div
                className={`background-image after:absolute after:h-full pt-[100px] pb-[100px] md:py-[100px]  lg:py-[130px] after:bg-tpr after:w-full after:left-0 after:right-0 after:top-0 r min-h-[100vh] md:min-h-[50vh] lg:min-h-[100vh] relative flex items-center px-[30px] bg-cover z-[1] ${transitionClass === 'slide-in' ? 'slide-in' : ''}`}
                style={{
                    backgroundSize : "cover",
                    backgroundImage: `url(${HeroArray[nextImage].src})`,
                }}
            />
          
            <div className="relative max-w-[700px] text-light text-justify md:text-center z-[100] px-[30px] pt-[100px] pb-[100px] md:py-[100px]  lg:py-[130px] flex flex-col gap-[30px] justify-center items-center min-h-[100vh] md:h-full lg:h-full">
                

                <h1 className="font-bold text-light text-center  text-[20px] md:text-[25px] lg:text-[30px] uppercase ">Real estate agency</h1>
                <p className="text-light  font-semibold text-[25px] md:text-[40px] lg:text-[50px] leading-[40px] md:leading-[60px] capitalize">Your Gateway to the Perfect Home</p>
                <p className="text-light  text-[15px] md:text-[20px] ">When you step into our world, you're not just browsing listings—you’re beginning your journey to find the home of your dreams. Explore our expertly curated properties, tailored to fit your lifestyle and needs.</p>
                <Link href='/about' className="bg-btn-primary text-[15px] md:text-[20px]  hover:bg-[#FFFFFF] hover:text-textTitle px-[25px] py-[20px] ">Make An Enquiry</Link>
            </div>
           
            </>
       
    );
};

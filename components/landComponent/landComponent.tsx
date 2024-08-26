import { IoCameraSharp } from "react-icons/io5";
import { RiFolderVideoFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import house1 from '../../public/images/land1.avif';
import house2 from '../../public/images/land1.avif';
import house3 from '../../public/images/land1.avif';
import { landType, propertyOverview } from "../types/types";
import Image from "next/image";
import Link from "next/link";


export const LandComponent = ({ allTheLand }: { allTheLand : landType[] | any}) => {

   

    const featuredProps: propertyOverview[] = [
        {
            name: "New House here",
            price: '9000',
            location: "Enugu, Nigeria",
            bedroom: "3",
            bathroom: "2",
            car: "2",
            status: "for sale",
            imageNo: "2",
            video: "1",
            images : house1
        },
        {
            name: "New Land here",
            price: '9000',
            location: "Enugu, Nigeria",
            bedroom: "3",
            bathroom: "2",
            car: "2",
            status: "for sale",
            imageNo: "2",
            video: "1",
            images : house2
        },
        {
            name: "New Land here",
            price: '9000',
            location: "Enugu, Nigeria",
            bedroom: "3",
            bathroom: "2",
            car: "2",
            status: "for sale",
            imageNo: "2",
            video: "1",
            images : house3
        },
       
    ]

    return <div className="py-[100px] px-[30px] ">
{/* 
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full  py-[10px] font-bold w-fit '>Our Properties</h2>
            <h1 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] text-textTitle ">Featured Properties</h1>
        </div> */}
        <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
            {
                allTheLand.map((land: landType, index: number) => {
                    return <Link href='/land/:slug' key={index} className="border">
                        <div className="relative">
                            <Image width={500} height={500} src={land.images[0]} alt={`${land.name} image`} className="h-[350px]" />
                            <h1 className="bg-btn-primary text-light font-medium px-[20px] py-[5px] absolute top-[30px] right-[30px] uppercase ">for sale</h1>
                            <div className=" absolute bottom-0  flex justify-between w-full py-[10px] px-[20px] ">
                                <p className="flex items-center text-[12px] md:text-[15px] lg:text-[20px] bg-whiteTp px-[20px] gap-3 rounded text-secondaryText "><FaLocationDot className="text-[15px]"/> {land.location}</p>
                                <div className="flex items-center gap-[10px] ">
                                    <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 rounded-full "><IoCameraSharp className="text-[15px]" /></p>
                                      <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 px-[10px] rounded-full "><RiFolderVideoFill className="text-[15px]"/></p>
                                </div>
                            </div>
</div>
                        <div className="flex flex-row justify-between items-center gap-[20px] px-[20px] py-[20px] ">
                            <h1 className="text-btn-primary font-medium text-[12px] md:text-[15px] lg:text-[20px] ">N 40000</h1>
                            <h1 className="font-bold text-textTitle text-[15px] md:text-[25px] lg:text-[30px] ">{land.name}</h1>
                        </div>
                    </Link>
                })
}
        </div>


    </div> 
}
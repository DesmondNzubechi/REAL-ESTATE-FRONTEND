import { IoCameraSharp } from "react-icons/io5";
import { RiFolderVideoFill } from "react-icons/ri";
import { MdBedroomParent } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import house1 from '../../public/images/house8.avif';
import house2 from '../../public/images/house3.avif';
import house3 from '../../public/images/house5.avif';
import { propertyOverview } from "../types/types";
import Image from "next/image";


export const FeaturedProperty = () => {


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
            name: "New House here",
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
            name: "New House here",
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

<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full  py-[10px] font-bold w-fit '>Our Properties</h2>
            <h1 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] text-textTitle ">Featured Properties</h1>
        </div>
        <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
            {
                featuredProps.map((property: propertyOverview, index: number) => {
                    return <div key={index} className="border">
                        <div className="relative">
                            <Image src={property.images} alt={`${property.name} image`} className="h-[350px]" />
                            <h1 className="bg-btn-primary text-light font-medium px-[20px] py-[5px] absolute top-[30px] right-[30px] uppercase ">{property.status}</h1>
                            <div className=" absolute bottom-0  flex justify-between w-full py-[10px] px-[20px] ">
                                <p className="flex items-center bg-whiteTp px-[20px] gap-5 rounded text-secondaryText "><FaLocationDot /> {property.location}</p>
                                <div className="flex items-center gap-[10px] ">
                                    <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 rounded-full "><IoCameraSharp  /> {property.imageNo}</p>
                                      <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 px-[10px] rounded-full "><RiFolderVideoFill /> {property.video}</p>
                                </div>
                            </div>
</div>
                        <div className="flex flex-col gap-[20px] px-[20px] py-[20px] ">
                            <h1 className="text-btn-primary font-medium text-[20px] ">N {property.price}</h1>
                            <h1 className="font-bold text-textTitle text-[30px] ">{property.name}</h1>
                            <div className="flex items-center gap-5 justify-between">
                                <div className="flex items-center text-textColor gap-1"><h1 className="font-bold text-[20px] ">{property.bedroom}</h1>< MdBedroomParent className="text-[20px] "/> <p>Bedroom</p></div>
                                <div className="flex items-center text-textColor gap-1"><h1 className="font-bold text-[20px] ">{property.bathroom}</h1>< MdBathtub className="text-[20px] "/> <p>Bathroom</p></div>
                                <div className="flex items-center text-textColor justify-center gap-1 "><h1 className="font-bold text-[20px] ">{property.car}</h1>< GiHomeGarage className="text-[20px] "/> <p>Carpark</p></div>
                            </div>
                        </div>
                    </div>
                })
}
        </div>


    </div>
}
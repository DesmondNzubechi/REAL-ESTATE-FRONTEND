import { IoCameraSharp } from "react-icons/io5";
import { RiFolderVideoFill } from "react-icons/ri";
import { MdBedroomParent } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import house1 from '../../public/images/house8.avif';
import { propertyOverview, propertyType } from "../types/types";
import Image from "next/image";
import { usePropertiesStore } from "../store/store";
import Link from "next/link";
import { api } from "../lib/api";
import { useEffect, useState } from "react";
import { ReloadPage } from "../Reload/Reload";
import { PropertySkeleton } from "../skeletonloader/propertySkeleton";
 

export const FeaturedProperty = () => {

    const { properties, setProperties } = usePropertiesStore()
    const [loading, setLoading] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false)
    const [featuredProp, setFeaturedProp] = useState<propertyType[]>()
    

    const fetchPoperties = async () => {
        setLoading(true)
        try { 
            const response = await api.get('/properties/');
            const props = response.data.data.properties;
           setFeaturedProp(props)
            setLoading(false)
            setSucceeded(true);
        } catch (error) {
            setLoading(false)
            setSucceeded(false);
        }
    } 

    useEffect(() => {
fetchPoperties()
    }, [])
   
 

    return <div className="py-[100px] px-[30px] ">
 
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full  py-[10px] font-bold w-fit '>Our Properties</h2>
            <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] text-textTitle ">Featured Properties</h1>
        </div> 
        {!loading && !succeeded && <ReloadPage reload={fetchPoperties} />}
        {loading && !succeeded && <PropertySkeleton/>}
        {!loading && succeeded && <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
            {
                featuredProp?.slice(0, 3)?.map((property: propertyType, index: number) => {
                    return <Link href={`/properties/${property._id}`} key={index} className="border group">
                        <div className="relative">
                        <div className="relative overflow-hidden">
                            <Image width={500} height={500} src={`${!property.images[0].startsWith("https://")? house1.src : property.images[0]}`} alt={`${property.name} image`} className="md:h-[350px] w-full transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <h1 className="bg-btn-primary text-light font-medium px-[20px] py-[5px] absolute top-[30px] right-[30px] uppercase ">For sale</h1>
                            <div className=" absolute bottom-0  flex justify-between w-full py-[10px] px-[20px] ">
                                <p className="flex items-center bg-whiteTp px-[20px] gap-2 rounded text-secondaryText "><FaLocationDot className="text-[10px] md:text-[20px]" /> <span className="'text-[10px] md:text-[15px] ">{property.location}</span></p>
                                <div className="flex items-center gap-[10px] ">
                                    <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 rounded-full "><IoCameraSharp className="text-[10px] md:text-[20px]" /> <span className="'text-[10px] md:text-[15px] ">{/*property.images.length*/}</span></p>
                                      <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 px-[10px] rounded-full "><RiFolderVideoFill className="text-[10px] md:text-[20px]"/> <span className="'text-[10px] md:text-[15px] "></span></p>
                                </div> 
                            </div>
</div>
                        <div className="flex flex-col gap-[20px] px-[20px] py-[20px] ">
                            <h1 className="text-btn-primary font-medium md:text-[20px] text-[10px] ">N {property.price}</h1>
                            <h1 className="font-bold text-textTitle text-[15px] md:text-[20px] ">{property.name}</h1>
                            <div className=" gap-2 grid grid-cols-2 md:grid-cols-3 ">
                                <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">{property.bedroom}</h1>< MdBedroomParent className="md:text-[20px] text-[15px] "/> <p className="text-[15px] md:text-[15px]">Bedroom</p></div>
                                <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">{property.bathroom}</h1>< MdBathtub className="md:text-[20px] text-[15px] "/> <p className="text-[15px] md:text-[15px]">Bathroom</p></div>
                                <div className="flex items-center text-textColor  gap-1 "><h1 className="font-bold md:text-[20px] text-[10px] ">{property.garadge}</h1>< GiHomeGarage className="md:text-[20px] text-[15px] "/> <p className="text-[15px] md:text-[15px]">Carpark</p></div>
                            </div>
                        </div>
                    </Link>
                })
}
        </div>}
    </div>
}
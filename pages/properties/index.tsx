import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { PageBgOverview } from "@/components/pageOverview/pageOverview";
import { FaThList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoCameraSharp } from "react-icons/io5";
import { RiFolderVideoFill } from "react-icons/ri";
import { MdBedroomParent } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFilterSquareFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import house1 from '../../public/images/house8.avif';
import house2 from '../../public/images/house3.avif';
import house3 from '../../public/images/house5.avif';
import { propertyOverview, propertyType } from "@/components/types/types";
import Image from "next/image";
import Link from "next/link";
import { usePropertiesStore } from "@/components/store/store";
import { api } from "@/components/lib/api";
import { useEffect } from "react";


export default function Properties() {
    
    const { properties, setProperties } = usePropertiesStore()
    
    console.log("Our properties", properties)

    const fetchPoperties = async () => {
        
        try {
            const response = await api.get('/properties/');
            const props = response.data.data.properties;
            setProperties(props)
            console.log("The properties", props);
        } catch (error) {
            console.log("the errors", error)
        }
    } 

    useEffect(() => {
fetchPoperties()
    }, [])
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

    return <>
        <MobileNav/>
        <DesktopNav/>
        <PageBgOverview HomeLink='Home' page="Property Listing" CurrentPage="Property" BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" />
        <div className="py-[50px] px-[30px] flex flex-col gap-[50px]">
            

            <div className="bg-primaryBg border w-full  py-[20px] px-[40px] ">
                <h1 className="font-bold text-textTitle uppercase text-center text-[15px] md:text-[20px]">Filter Property</h1>
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 justify-between">
                <div className="  w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 p-[20px] ">
                <select name="" id="" className=" px-[15px] w-full outline-0 text-center shadow font-[400] text-[15px] md:text-[25px] py-[10px] ">
                    <option >Filter By Location</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                </select>
                <select name="" id="" className=" px-[15px] w-full outline-0 text-center shadow font-[400] text-[15px] md:text-[25px] py-[10px] ">
                    <option>Filter By Price</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                </select>
                <select name="" id="" className=" px-[15px] w-full outline-0 text-center shadow font-[400] text-[15px] md:text-[25px] py-[10px] ">
                    <option className="bg-btn-primary text-light text-[15px]">Filter BY Type</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                    <option className="bg-btn-primary text-light text-[15px]" value="Enugu">Enugu</option>
                </select>
</div>
                <button className="bg-btn-primary ml-[20px] text-[20px] text-light hover:text-[#FFFFFF] hover:bg-textTitle px-[25px] text-center flex items-center gap-2 font-bold w-fit  w  py-[10px] "><BsFilterSquareFill />Filter</button>
                </div>
            </div>
             
            <div className="bg-secondaryBg w-full border py-[10px] items-center px-[20px] flex justify-between">
                <input type="text" name="" className="text-textColor text-[15px] md:text-[20px] outline-0 w-full bg-transparent py-[10px] px-[20px] " placeholder="Search for a property" id="" />
                <IoIosSearch  className="text-btn-primary font-bold text-[30px]"/>
            </div>
            <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
            { 
                properties?.map((property: propertyType, index: number) => {
                    return <Link href={`/properties/${property._id}`} key={index} className="border">
                    <div className="relative">
                        <Image width={500} height={500} src={`${!property.images[0].startsWith("https://")? house1.src : property.images[0]}`} alt={`${property.name} image`} className="md:h-[350px] " />
                        <h1 className="bg-btn-primary text-light font-medium px-[20px] py-[5px] absolute top-[30px] right-[30px] uppercase ">{property.developmentStatus}</h1>
                        <div className=" absolute bottom-0  flex justify-between w-full py-[10px] px-[20px] ">
                            <p className="flex items-center bg-whiteTp px-[20px] gap-2 rounded text-secondaryText "><FaLocationDot className="text-[10px] md:text-[20px]" /> <span className="'text-[10px] md:text-[15px] ">{property.location}</span></p>
                            <div className="flex items-center gap-[10px] ">
                                <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 rounded-full "><IoCameraSharp className="text-[10px] md:text-[20px]" /> <span className="'text-[10px] md:text-[15px] ">{property.images.length}</span></p>
                                  <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 px-[10px] rounded-full "><RiFolderVideoFill className="text-[10px] md:text-[20px]"/> <span className="'text-[10px] md:text-[15px] "></span></p>
                            </div>
                        </div>
</div>
                    <div className="flex flex-col gap-[20px] px-[20px] py-[20px] ">
                        <h1 className="text-btn-primary font-medium md:text-[20px] text-[10px] ">N {property.price}</h1>
                        <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] ">{property.name}</h1>
                        <div className=" gap-2 grid grid-cols-2 md:grid-col-3">
                            <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">3</h1>< MdBedroomParent className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Bedroom</p></div>
                            <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">4</h1>< MdBathtub className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Bathroom</p></div>
                            <div className="flex items-center text-textColor  gap-1 "><h1 className="font-bold md:text-[20px] text-[10px] ">9</h1>< GiHomeGarage className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Carpark</p></div>
                        </div>
                    </div>  
                </Link>
                })
}
        </div>
            
       </div>
    </>
} 
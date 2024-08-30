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
import { filteringPropsType, propertyOverview, propertyType } from "@/components/types/types";
import Image from "next/image";
import Link from "next/link";
import { usePropertiesStore } from "@/components/store/store";
import { api } from "@/components/lib/api";
import React, { useEffect, useState } from "react";
import { PropertySkeleton } from "@/components/skeletonloader/propertySkeleton";
import { ReloadPage } from "@/components/Reload/Reload";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Footer } from "@/components/Footer/footer";


export default function Properties() {
    const router = useRouter();
    const { properties, setProperties } = usePropertiesStore()
    const [loading, setLoading] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false)
    const [uniqueLocation, setUniqueLocation] = useState<string[] | unknown[]>([]);
    const [uniqueType, setUniqueType] = useState<string[] | unknown[]>([]);
    const [uniqueStatus, setUniqueStatus] = useState<string[] | unknown[]>([]);
    const [filteringProps, setFilteringProps] = useState<filteringPropsType>({
        location: '',
        type: '',
        status : ''
    })
     
    console.log("filtering props", filteringProps)
    console.log("Our properties", properties)
    console.log("Our properties", uniqueLocation)
    const fetchPoperties = async () => {
        setLoading(true)
        try {
            const response = await api.get('/properties/');
            const props = response.data.data.properties;
            setProperties(props)
            setUniqueLocation([...new Set(props.map((prop: propertyType) => prop.location))])
            setUniqueType([...new Set(props.map((prop: propertyType) => prop.type))])
            setUniqueStatus([...new Set(props.map((prop: propertyType) => prop.status))])
            console.log("The properties", props);
            setLoading(false)
            setSucceeded(true);
        } catch (error) {
            console.log("the errors", error)
            setLoading(false)
            setSucceeded(false);
        }
    } 

    useEffect(() => {
fetchPoperties()
    }, [])
 
    const [searchText, setSearchText] = useState<string | any>(router.query.search ||'')
    const [searchedProperties, setSearchedProperties] = useState<propertyType[] | any>()
    const [filteredProperty, setFilteredProperty] = useState<propertyType[]>();
    console.log("The search properties", searchedProperties)

    const searchgProperty = (e: string) => {

        const value = e.toLowerCase();

        setSearchText(value)
        const filterProperty = properties?.filter((prop: propertyType) => {
            return (
                prop.amenities.toLowerCase().includes(value) ||
                (prop.price === value) ||
                prop.name.toLowerCase().includes(value) ||
                prop.developmentStatus.toLowerCase().includes(value) ||
                prop.yearBuilt.includes(value) ||
                prop.location.toLowerCase().includes(value)
            )
        })
        setSearchedProperties(filterProperty)
    }

    //console.log("the filtered properties", filteredProperty)
    
    const filterPropertiesHandle = () => {
    

    // if (!filteringProps.location && !filteringProps.status && !filteringProps.type) {
    //     toast.info("Please select what you need to filter");
    //     return;
    //     }
        

    const theProperty = properties?.filter((props: propertyType) => {
        return (
            (filteringProps.location ? props.location.toLowerCase().trim().includes(filteringProps.location.toLowerCase().trim()) : true) &&
            (filteringProps.status ? props.status.toLowerCase().trim() === filteringProps.status.toLowerCase().trim() : true) &&
            (filteringProps.type ? props.type.toLowerCase().trim().includes(filteringProps.type.toLowerCase().trim()) : true)
        );
    });

    setFilteredProperty(theProperty);

    // Build the query string with selected filters
    const query = new URLSearchParams();

    if (filteringProps.location) {
        query.append('location', filteringProps.location);
    }
    if (filteringProps.status) {
        query.append('status', filteringProps.status);
    }
    if (filteringProps.type) {
        query.append('type', filteringProps.type);
    }

    router.push(`/properties/?${query.toString()}`, undefined, { shallow: true });
    
};

 
   

    useEffect(() => {

        const queryParams = searchText ? `?search=${encodeURIComponent(searchText)}` : '';
 router.push(`/properties/${queryParams}`, undefined, {shallow : true})
    }, [searchText])
 
    return <>
        <MobileNav/>
        <DesktopNav/>
        <PageBgOverview HomeLink='Home' page="Property Listing" CurrentPage="Property" BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" />
        <div className="py-[50px] px-[30px] flex flex-col gap-[50px]">
            

            <div className="bg-primaryBg border w-full  py-[20px] px-[40px] ">
                <h1 className="font-bold text-textTitle uppercase text-center text-[15px] md:text-[20px]">Filter Property</h1>
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 justify-between">
                <div className="  w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 p-[20px] ">
                        <select name=""
                            value={filteringProps.location}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {setFilteringProps({ ...filteringProps, location: e.target.value })}}
                            id="" className=" px-[15px] w-full outline-0 text-center shadow font-[400] text-[15px] md:text-[25px] py-[10px] ">
                            <option value=''>Filter By Location</option>
                            {
                                uniqueLocation.map((location: string | any, index:number) => {
                                    return <option key={index} className="bg-btn-primary text-light text-[15px]" value={location}>{location}</option>
                                })
                            } 
               
                </select>
                <select name="" value={filteringProps.status}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilteringProps({ ...filteringProps, status: e.target.value })} id="" className=" px-[15px] w-full outline-0 text-center shadow font-[400] text-[15px] md:text-[25px] py-[10px] ">
                            <option value=''> Filter By Status</option>
                            {
                                uniqueStatus.map((status: string | any, index:number) => {
                                    return <option key={index} className="bg-btn-primary text-light text-[15px]" value={status}>{status}</option>
                                })
                            }
                 
                </select>
                        <select name="" value={filteringProps.type}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilteringProps({ ...filteringProps, type: e.target.value })}
                            id=""
                            className=" px-[15px] w-full outline-0 text-center shadow font-[400] text-[15px] md:text-[25px] py-[10px] ">
                            <option value=''>Filter BY Type</option> 
                            {
                                uniqueType.map((type: string | any, index:number) => {
                                    return <option key={index} className="bg-btn-primary text-light text-[15px]" value={type}>{type}</option>
                                })
                            }
                </select> 
</div>
                <button onClick={filterPropertiesHandle} className="bg-btn-primary ml-[20px] text-[20px] text-light hover:text-[#FFFFFF] hover:bg-textTitle px-[25px] text-center flex items-center gap-2 font-bold w-fit  w  py-[10px] "><BsFilterSquareFill />Filter</button>
                </div>
            </div>
             
            <div className="bg-secondaryBg w-full border py-[10px] items-center px-[20px] flex justify-between">
                <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    searchgProperty(e.target.value)
                    setFilteringProps({location : '', status : '', type : ''})
                }} value={searchText} name="" className="text-textColor text-[15px] md:text-[20px] outline-0 w-full bg-transparent py-[10px] px-[20px] " placeholder="Search for a property" id="" />
                 <IoIosSearch  className="text-btn-primary font-bold text-[30px]"/>
            </div>
            {loading && !succeeded && <PropertySkeleton /> }
            {!loading && !succeeded && <ReloadPage reload={fetchPoperties} />}
           {searchText && <div className="text-center">
                <h1 className="font-medium capitalize">{searchedProperties.length} result for your search</h1>
            </div>}
            {filteredProperty && <div className="text-center">
                <h1 className="font-medium capitalize">{filteredProperty.length} result for your Filter</h1>
            </div>}
            {!loading && succeeded && <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
                
                {
                    filteringProps && !searchText &&
                filteredProperty?.map((property: propertyType, index: number) => {
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
                            <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">{property?.bedroom}</h1>< MdBedroomParent className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Bedroom</p></div>
                            <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">{property?.bathroom}</h1>< MdBathtub className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Bathroom</p></div>
                            <div className="flex items-center text-textColor  gap-1 "><h1 className="font-bold md:text-[20px] text-[10px] ">{property.garadge}</h1>< GiHomeGarage className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Carpark</p></div>
                        </div>
                    </div>  
                </Link>
                })
} 

                { searchedProperties && searchText &&
                searchedProperties?.map((property: propertyType, index: number) => {
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
                            <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">{property?.bedroom}</h1>< MdBedroomParent className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Bedroom</p></div>
                            <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">{property?.bathroom}</h1>< MdBathtub className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Bathroom</p></div>
                            <div className="flex items-center text-textColor  gap-1 "><h1 className="font-bold md:text-[20px] text-[10px] ">{property.garadge}</h1>< GiHomeGarage className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Carpark</p></div>
                        </div>
                    </div>  
                </Link>
                })
}  
            {!searchText && !filteringProps.location && !filteringProps.status && !filteringProps.type &&
                properties?.map((property: propertyType, index: number) => {
                    return <Link href={`/properties/${property._id}`} key={index} className="border group">
                        <div className="relative">
                            <div className="relative overflow-hidden">
                            <Image width={500} height={500} src={`${!property.images[0].startsWith("https://")? house1.src : property.images[0]}`} alt={`${property.name} image`} className="md:h-[350px] w-full transition-transform duration-500 group-hover:scale-105" />
                            </div>
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
                            <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">{property?.bedroom}</h1>< MdBedroomParent className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Bedroom</p></div>
                            <div className="flex items-center text-textColor gap-1"><h1 className="font-bold md:text-[20px] text-[10px] ">{property?.bathroom}</h1>< MdBathtub className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Bathroom</p></div>
                            <div className="flex items-center text-textColor  gap-1 "><h1 className="font-bold md:text-[20px] text-[10px] ">{property.garadge}</h1>< GiHomeGarage className="md:text-[20px] text-[10px] "/> <p className="text-[10px] md:text-[15px]">Carpark</p></div>
                        </div>
                    </div>  
                </Link>
                })
} 
        </div>}
             
       </div>
       <Footer/>
    </>
} 
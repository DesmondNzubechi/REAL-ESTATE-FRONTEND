import { propertyOverview, propertyType } from "@/components/types/types"
import house1 from '../../public/images/house1.avif';
import house2 from '../../public/images/house2.avif';
import house3 from '../../public/images/house3.avif';
import house4 from '../../public/images/house4.avif';
import house5 from '../../public/images/house5.avif';
import house6 from '../../public/images/house6.avif';
import house7 from '../../public/images/house7.avif';
import house8 from '../../public/images/house8.avif';
import house9 from '../../public/images/house9.png';
import ImageSlider from "@/components/imageSlider/imageSlider";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { PageBgOverview } from "@/components/pageOverview/pageOverview";
import { MdReviews } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "@/components/lib/api";
  
interface props{
fullProperty : propertyType
}

export default function PropertyDetails(props :props) {

const {fullProperty} = props

    const router = useRouter();
    const { id } = router.query;
    const [resolvedId, setResolveId] = useState<undefined | string | string[]>()
    // const [fullProperty, setFullProperty] = useState<propertyType>({
    //     name: '',
    // _id: '',
    // location: '',
    // map: '',
    // price: 0,
    // images: [],
    // description: '',
    // developmentStatus: '',
    // amenities: '',
    // interiorFeatures: '',
    // extriorFaetures: '',
    // reviews: [],
    // date : ''
    // })
    const [propertyReviews, setPropertyReviews] = useState<[]>([]);

    const propertyDetails: propertyOverview =  {
        name: "New House here",
        price: '9000',
        location: "Enugu, Nigeria",
        bedroom: "3",
        bathroom: "2",
        car: "2",
        status: "for sale",
        imageNo: "2",
        video: "1",
        images: [house1, house2,house3,house4,house5,house6,house7,house8,house9],
        
    }

    // const fetchProperty = async () => {

    //     try {
    //         const response = await api.get(`/properties/${resolvedId}`)

    //         const property = response.data.data.property;

    //         setFullProperty(property)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const fetchPropertyReviews = async () => {

        try {
            const response =  await api.get(`reviews/property/${fullProperty._id}/reviews`);

            const reviews = response.data.data.result;

            setPropertyReviews(reviews);

        } catch (error) {
           console.log("error fetching reviews", error) 
        }
    }

    console.log("full property", fullProperty)
    console.log("full property reviews", propertyReviews)

    useEffect(() => {
       // fetchProperty();
        fetchPropertyReviews()
    }, [])

    useEffect(() => {
        if (id) {
          
            setResolveId(id);
}
    }, [router.query, id])
    
    return <>
        <div className="bg-textTitle h-[100px] ">
        </div>
        <MobileNav/>
        <DesktopNav/>
       <div className="px-[30px]  py-[100px] grid grid-cols-1 ">
            <ImageSlider housing={propertyDetails} />
            
            <div className="grid gap-[100px] grid-cols-1 pt-[50px] md:grid-cols-2">

                <div className="flex flex-col gap-[50px] ">
                <div className="flex gap-5 ">
                <span className="flex items-center gap-1"><p className="font-medium uppercase bg-btn-primary py-[10px] px-[20px] text-light">For Sale</p></span>
                    <span className="flex items-center gap-1"><MdReviews className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">{propertyReviews?.length} Reviews</p></span>
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]"/><p className="font-medium capitalize text-[15px] text-textColor">{fullProperty?.date?.split('T')?.splice(0, 1)}</p></span>
                    </div>
                    <div>
                        <p className="flex items-center bg-whiteTp px-[20px] gap-5 rounded text-secondaryText "><FaLocationDot />{fullProperty?.location}</p>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[30px] ">Property Description</h1>
                        <p className="text-textColor text-[15px] md:text-[20px] ">
                            {fullProperty?.description}
              </p>
                    </div>

                    <div className="flex flex-col gap-[30px] ">
                        <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[30px] ">Property Detail</h1>
                        <div className="flex flex-col bg-secondaryBg gap-5 rounded px-[20px] py-[30px] ">
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[20px]">Rooms : </h1> <p className="font-medium capitalize text-[15px] text-textColor">40</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[20px]">Baths : </h1> <p className="font-medium capitalize text-[15px] text-textColor">40</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[20px]">Year built : </h1> <p className="font-medium capitalize text-[15px] text-textColor">2024</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[20px]"> Beds : </h1> <p className="font-medium capitalize text-[15px] text-textColor">32</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[20px]">Price : </h1> <p className="font-medium capitalize text-[15px] text-textColor">N 400000</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[20px]">Status : </h1> <p className="font-medium capitalize text-[15px] text-textColor">For Rent</p></span>
                        </div>
                    </div>

               
                <div className="flex flex-col gap-5">
                <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[30px] ">Amenities</h1>
                <div className="grid grid-cols-3 gap-5">
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">Microwave</p></span>
                </div>
                    </div>
                    

                </div>

                <div className="flex flex-col gap-[50px]">
            <div className=" border flex flex-col gap-[50px] px-[20px] py-[30px] ">

                
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-textTitle px-[10px] border-l-[5px] border-btn-primary text-[30px] ">All The Review</h1>
                    
                            
                            <div className="flex flex-col gap-5">
                        <div className="flex flex-col border p-[15px]  gap-5">
                            <div className="flex flex-col gap-[5px]">
                                <FaUserAlt className="text-textTitle bg-secondaryBg p-2 rounded-full text-[100px]" /> 
                                <h1 className="font-bold">Desmond Nzubechukwu</h1>
                                <h2><span className="flex items-center gap-2"><p className="font-bold capitalize shadow px-5 py-2 rounded-full text-btn-primary">August 10, 2024</p></span></h2>
                            </div>
                            <p className="text-textColor text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                </div>
                                <div className="flex flex-col border p-[15px]  gap-5">
                            <div className="flex flex-col gap-[5px]">
                                <FaUserAlt className="text-textTitle bg-secondaryBg p-2 rounded-full text-[100px]" /> 
                                <h1 className="font-bold">Desmond Nzubechukwu</h1>
                                <h2><span className="flex items-center gap-2"><p className="font-bold capitalize shadow px-5 py-2 rounded-full text-btn-primary">August 10, 2024</p></span></h2>
                            </div>
                            <p className="text-textColor text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                </div>
                                <div className="flex flex-col border p-[15px]  gap-5">
                            <div className="flex flex-col gap-[5px]">
                                <FaUserAlt className="text-textTitle bg-secondaryBg p-2 rounded-full text-[100px]" /> 
                                <h1 className="font-bold">Desmond Nzubechukwu</h1>
                                <h2><span className="flex items-center gap-2"><p className="font-bold capitalize shadow px-5 py-2 rounded-full text-btn-primary">August 10, 2024</p></span></h2>
                            </div>
                            <p className="text-textColor text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                </div>
                                <div className="flex flex-col border p-[15px]  gap-5">
                            <div className="flex flex-col gap-[5px]">
                                <FaUserAlt className="text-textTitle bg-secondaryBg p-2 rounded-full text-[100px]" /> 
                                <h1 className="font-bold">Desmond Nzubechukwu</h1>
                                <h2><span className="flex items-center gap-2"><p className="font-bold capitalize shadow px-5 py-2 rounded-full text-btn-primary">August 10, 2024</p></span></h2>
                            </div>
                            <p className="text-textColor text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
</div>
                            </div>
                            
 
                </div>

                <div className="flex flex-col gap-5 py-2  p-4 bg-secondaryBg">
                <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[30px] ">Post A Review</h1>
                <div className=' flex justify-between bg-light px-[20px] py-[20px] '>

<input type="text" placeholder='Your Name...' className='text-btn2 w-full  outline-0 text-[20px] ' /> 
<FaPencil className='text-[20px] text-btn-primary'/>
</div>
<div className=' md:col-span-3 flex justify-between bg-light px-[20px] py-[20px] '>

<textarea  placeholder='Write Your Review Here..' className='text-btn2  h-[200px] w-full outline-0 text-[20px] ' /> 
<FaPencil className='text-[20px] text-btn-primary'/>
</div>
<button className='text-light w-fit bg-btn-primary px-[30px] py-[15px] capitalize '>Send Review</button>
                </div>
                    </div>
                    <div className="flex flex-col gap-5">
                    <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[30px] ">Map</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.630659343489!2d7.493425073649227!3d6.441451324114151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d916d74623%3A0xbc5e0380e77941ad!2s1a%20Denton%20St%2C%20Ogui%2C%20Enugu%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1723050537379!5m2!1sen!2sng" width="full" className='w-full' height="700"   loading="lazy" ></iframe>
                    </div>
                </div>
                
            </div>
    </div>
    </>
}


export const ServerSideProps = async (context: any) => {

    const { params } = context;

    const response = await api.get(`/property/${params.id}`);
    return {
        props: {
            fullProperty : response.data.data.result
        }
    }

}
import { landType, propertyOverview } from "@/components/types/types"
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
import { LandDetailsSkeleton } from "@/components/skeletonloader/landFullSkeleton";
import { ReloadPage } from "@/components/Reload/Reload";
import { api } from "@/components/lib/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "@/components/Footer/footer";

export default function LandDetails() {
 
    const [loading, setLoading] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false)
    const [theLand, setTheLand] = useState<landType>({
        name: '',
        map: '',
        images: [],
        description: '',
        location: '',
        date: '',
        price: 0,
        _id: ''
    });

    const router = useRouter(); 
    const { id } = router.query;
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
    
    const fetchLand = async () => {
        setLoading(true);
        
        try {
            const response = await api.get(`/land/fetchALand/${id}`)
            const land = response.data.data.land;

            setTheLand(land)
            setLoading(false);
            setSucceeded(true);

        } catch (error) {
            console.log(error);
            setLoading(false);
            setSucceeded(false);
        }
    }

    useEffect(() => {
        fetchLand();
    }, [])
    
    return <>
        <div className="bg-textTitle h-[100px] ">
        </div>
        <MobileNav/>
        <DesktopNav />
       {loading && !succeeded && <LandDetailsSkeleton />}
       {!loading && !succeeded && <ReloadPage reload={fetchLand}/>}
        { !loading && succeeded &&
            (<div className="px-[30px]  py-[100px] grid grid-cols-1 ">
            <ImageSlider housing={theLand} />
            
            <div className="grid gap-[100px] grid-cols-1 pt-[50px] md:grid-cols-2">

                <div className="flex flex-col gap-[50px] ">
                <div className="flex gap-5 ">
                <span className="flex items-center gap-1"><p className="font-medium uppercase bg-btn-primary py-[10px] px-[20px] text-[12px] text-light">For Sale</p></span>
                    {/* <span className="flex items-center gap-1"><MdReviews className="text-btn-primary text-[15px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[15px] text-textColor">40 Reviews</p></span> */}
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[12px]"/><p className=" capitalize text-[12px] text-textColor">{theLand?.date?.split('T')?.splice(0, 1)}</p></span>
                    </div>
                    <div className="self-start">
                        <p className="flex self-start items-center bg-whiteTp  capitalize font-semibold gap-3 rounded text-secondaryText "><FaLocationDot className="text-btn-primary"/>{theLand?.location}</p>
                    </div> 
                    <div className="flex flex-col gap-[30px]">
                    <h1 className="font-semibold px-[10px] border text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Land Description</h1>
                        <p className="text-textColor text-[15px] md:text-[20px] ">
                            {theLand?.description}
                </p>
                    </div>

             
           
 
                </div>

                <div className="flex flex-col gap-[50px]">
        
                    <div className="flex flex-col gap-5">
                    <h1 className="font-semibold px-[10px] border text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Map</h1>
                        {/* <div >{theLand?.map }</div> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.630659343489!2d7.493425073649227!3d6.441451324114151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d916d74623%3A0xbc5e0380e77941ad!2s1a%20Denton%20St%2C%20Ogui%2C%20Enugu%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1723050537379!5m2!1sen!2sng" width="full" className='w-full' height="400"   loading="lazy" ></iframe>
                    </div>
                </div>
                
            </div>
        </div>)
        }
        <Footer/> 
    </>
}
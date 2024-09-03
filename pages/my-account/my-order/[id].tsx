import { orderType, propertyOverview } from "@/components/types/types"
import house1 from '../../../public/images/house1.avif';
import house2 from '../../../public/images/house2.avif';
import house3 from '../../../public/images/house3.avif';
import house4 from '../../../public/images/house4.avif';
import house5 from '../../../public/images/house5.avif';
import house6 from '../../../public/images/house6.avif';
import house7 from '../../../public/images/house7.avif';
import house8 from '../../../public/images/house8.avif';
import house9 from '../../../public/images/house9.png';
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
import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "@/components/lib/api";
import { ReloadPage } from "@/components/Reload/Reload";
import { PropertyDetailsSkeleton } from "@/components/skeletonloader/propertyFullSkeleton";

export default function PropertyDetails() {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false)
    const [orderFullDetail, setOrderFullDetail] = useState<orderType>();
    const { id } = router.query;
    
    const fetchOrder = async () => { 
        setLoading(true)

        try {
            const response = await api.get(`/order/getAnOrder/${id}`, {withCredentials : true})

            const order = response.data.data.orderedProperty;

            setOrderFullDetail(order)
            setSucceeded(true)
        } catch (error) {
            console.log(error);
            setSucceeded(false)
        } finally {
            setLoading(false)
        }
    } 

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

    useEffect(() => {
fetchOrder()
    }, [])
    
    return  <>
    <div className="bg-textTitle fixed w-full top-0 h-[100px] "></div>
    <MobileNav />
    <DesktopNav />
    <div className="px-[30px] py-[100px]">
        <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-4">
            <MyAccountNav />
                <div></div>
               {loading && !succeeded && <div className="col-span-9 lg:col-span-3 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                    <PropertyDetailsSkeleton/>
                    </div>}
               {!loading && !succeeded && <div className="col-span-9 lg:col-span-3 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                    <ReloadPage reload={fetchOrder}/>
                    </div>}
                { !loading && succeeded &&
                    <div className="col-span-9 lg:col-span-3 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[20px] uppercase font-semibold">
                            My Order
                        </h1>
                    <div className="  py-[20px] grid grid-cols-1 ">
                        <div className="flex gap-5 justify-between pb-[20px] items-center">
                            <div className="flex  items-center"> <GoDotFill className="text-btn-primary mr-1" /> {orderFullDetail?.status}</div>
                            <button  className="bg-btn-primary text-light min-w-[40px] p-1 text-[5px] md:text-[13px]  font-semibold">
                                                Cancel Order
                                            </button>
                        </div>
            <ImageSlider housing={orderFullDetail? orderFullDetail?.property : propertyDetails} />
            
            <div className="grid gap-[100px] grid-cols-1 pt-[50px] ">

                <div className="flex flex-col gap-[50px] ">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
                <span className="flex items-center gap-1"><FaLocationDot className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">Enugu, Nigeria</p></span>
                    <span className="flex items-center gap-1"><MdReviews className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">40 Reviews</p></span>
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]"/><p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">August 10, 2024</p></span>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[15px] md:text-[30px] ">Property Description</h1>
                                    <p className="text-textColor text-[12px] md:text-[20px] ">
                                        {
                                            orderFullDetail?.property.description
                                        }
              </p>
                    </div>

                    <div className="flex flex-col gap-[30px] ">
                        <h1 className="font-semibold px-[10px] border uppercase text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Property Detail</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 bg-secondaryBg gap-5 rounded px-[20px] py-[30px] ">
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Rooms : </h1> <p className=" capitalize text-[12px] text-textColor">{orderFullDetail?.property?.bathroom}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Baths : </h1> <p className=" capitalize text-[12px] text-textColor">{orderFullDetail?.property?.bathroom}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Year built : </h1> <p className=" capitalize text-[12px] text-textColor">{orderFullDetail?.property?.yearBuilt}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]"> Garadge : </h1> <p className=" capitalize text-[12px] text-textColor">{orderFullDetail?.property?.garadge}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Price : </h1> <p className=" capitalize text-[12px] text-textColor">N {orderFullDetail?.property?.price}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Status : </h1> <p className=" capitalize text-[12px] text-textColor">{orderFullDetail?.property?.status}</p></span>
                        </div>
                    </div>

               
                    <div className="flex flex-col gap-5">
                <h1 className="font-semibold px-[10px] border text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Amenities</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {
                                orderFullDetail?.property.amenities.split(",").map((amenity: string) => {
                                return   <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] " /> <p className="font-medium capitalize text-[15px] text-textColor">{amenity}</p></span>
                                })
                            }
                   </div>
                    </div>

                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="font-semibold px-[10px] border text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Map</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.630659343489!2d7.493425073649227!3d6.441451324114151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d916d74623%3A0xbc5e0380e77941ad!2s1a%20Denton%20St%2C%20Ogui%2C%20Enugu%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1723050537379!5m2!1sen!2sng" width="full" className='w-full'    loading="lazy" ></iframe>
                    </div>
                
            </div>
                    </div>
                </div>}
            </div>
            </div>
    </>
}
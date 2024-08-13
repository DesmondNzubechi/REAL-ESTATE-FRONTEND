import { propertyOverview } from "@/components/types/types"
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
export default function PropertyDetails() {

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
    
    return  <>
    <div className="bg-textTitle fixed w-full top-0 h-[100px] "></div>
    <MobileNav />
    <DesktopNav />
    <div className="px-[30px] py-[100px]">
        <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-4">
            <MyAccountNav />
            <div></div>
                <div className="col-span-9 lg:col-span-3 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[20px] uppercase font-semibold">
                            My Order
                        </h1>
                    <div className="  py-[20px] grid grid-cols-1 ">
                        <div className="flex gap-5 justify-between pb-[20px] items-center">
                            <div className="flex  items-center"> <GoDotFill className="text-btn-primary mr-1" /> Pending</div>
                            <button  className="bg-btn-primary text-light min-w-[40px] p-1 text-[5px] md:text-[13px]  font-semibold">
                                                Cancel Order
                                            </button>
                        </div>
            <ImageSlider housing={propertyDetails} />
            
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.

Setting the mood with incense
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.

Setting the mood with incense
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
BY HETMAYAR
Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.

Image
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.

Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur expedita velit laboriosam est sint laborum eos assumenda, quam voluptatem adipisci, reprehenderit ut nobis blanditiis perspiciatis!      
</p>
                    </div>

                    <div className="flex flex-col gap-[30px] ">
                        <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[15px] md:text-[30px] ">Property Detail</h1>
                        <div className="flex flex-col bg-secondaryBg gap-5 rounded px-[20px] py-[30px] ">
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[12px] md:text-[20px]">Rooms : </h1> <p className="font-medium capitalize text-[12px] text-textColor">40</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[12px] md:text-[20px]">Baths : </h1> <p className="font-medium capitalize text-[12px] text-textColor">40</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[12px] md:text-[20px]">Year built : </h1> <p className="font-medium capitalize text-[12px] text-textColor">2024</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[12px] md:text-[20px]"> Beds : </h1> <p className="font-medium capitalize text-[12px] text-textColor">32</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[12px] md:text-[20px]">Price : </h1> <p className="font-medium capitalize text-[12px] text-textColor">N 400000</p></span>
                            <span className="flex items-center gap-1"><h1 className="uppercase text-textTitle font-bold text-[12px] md:text-[20px]">Status : </h1> <p className="font-medium capitalize text-[12px] text-textColor">For Rent</p></span>
                        </div>
                    </div>

               
                <div className="flex flex-col gap-5">
                <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[15px] md:text-[30px] ">Amenities</h1>
                <div className="grid grid-cols-3 gap-5">
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] md:text-[20px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] text-textColor">Microwave</p></span>
                </div>
                    </div>
                    

                </div>

                <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col gap-5">
                    <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[15px]  md:text-[30px] ">Map</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.630659343489!2d7.493425073649227!3d6.441451324114151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d916d74623%3A0xbc5e0380e77941ad!2s1a%20Denton%20St%2C%20Ogui%2C%20Enugu%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1723050537379!5m2!1sen!2sng" width="full" className='w-full' height="400"   loading="lazy" ></iframe>
                    </div>
                </div>
                
            </div>
                    </div>
                </div>
            </div>
            </div>
    </>
}
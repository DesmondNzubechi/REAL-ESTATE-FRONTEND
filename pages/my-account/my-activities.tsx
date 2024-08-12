import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
export default function MyActivities() {
    
    return <>
         <div className="bg-textTitle fixed w-full top-0 h-[100px] ">
        </div>
        <MobileNav/>
        <DesktopNav/>
    <div className="px-[30px] py-[100px] ">
       <div className="grid gap-[50px] grid-cols-6 lg:grid-cols-3">
            <MyAccountNav />
            <div></div>
            <div className="col-span-5 lg:col-span-2 flex flex-col pt-[70px] px-[20px] gap-5 h-fit py-[30px] ">
                <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[20px] uppercase font-semibold ">My Activities</h1>
                    <div className="grid grid-cols-1 mt-[30px] gap-5">
                       
                        <Link href='' className="bg-secondaryBg shadow-2xl hover:bg-primaryBg px-[20px] py-[20px] flex flex-col lg:flex-row w-fit  gap-2  rounded">
                           
                                <div className="flex justify-between gap-2 items-center">
                                <span className="flex items-center">
                                    <IoIosNotifications className="text-[20px] text-btn-primary"/>
                                    <h1 className="font-bold uppercase text-textTitle">Order Placed</h1>
                                    </span>
                                    <p className="text-[10px] font-bold text-textColor">jul, 12, 2024</p>
                                </div>
                            <p className="text-textColor">You just place an order for a property</p>
                            
                            {/* <Link className="font-semibold px-[5px] py-[2px] bg-titleBg text-btn-primary rounded-[10px] " href=''>View</Link> */}
                        </Link>  
          </div>
        </div>
    </div>
     
        </div>
        </>
}
import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { toast } from "react-toastify";
import { useUserStore } from "../store/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../lib/api";

export default function MyActivitiesSkeleton() {
    
   
    
    return <>
            <div className="col-span-9 w-full animate-skeleton-loading lg:col-span-2 flex flex-col  px-[20px] gap-5 h-fit py-[30px] ">
            <h1 className="bg-titleBg w-[200px] h-[70px] px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold">
                           
                </h1>
                    <div className="grid grid-cols-1 mt-[20px] gap-5">
                       
                        <div className="bg-secondaryBg   px-[20px] py-[20px] grid grid-cols-1 lg:grid-cols-2 w-full   gap-2  rounded">
                           
                                <div className="grid grid-cols-3 justify-between gap-2 items-center">
                                <span className="flex bg-white items-center">
                                    <h1 className="font-bold uppercase md:text-[20px] text-[15px] w-full h-[30px]  text-textTitle"></h1>
                                    </span>
                                    <p className="md:text-[10px] col-span-2 text-[8px] font-bold w-full h-[30px] bg-white text-textColor"></p>
                                </div>
                            <p className="text-textColor bg-white w-full h-[30px] text-[12px] md:text-[15px]"></p>
                            
                            {/* <Link className="font-semibold px-[5px] py-[2px] bg-titleBg text-btn-primary rounded-[10px] " href=''>View</Link> */}
                </div>  
                <div className="bg-secondaryBg   px-[20px] py-[20px] grid grid-cols-1 lg:grid-cols-2 w-full   gap-2  rounded">
                           
                           <div className="grid grid-cols-3 justify-between gap-2 items-center">
                           <span className="flex bg-white items-center">
                               <h1 className="font-bold uppercase md:text-[20px] text-[15px] w-full h-[30px]  text-textTitle"></h1>
                               </span>
                               <p className="md:text-[10px] col-span-2 text-[8px] font-bold w-full h-[30px] bg-white text-textColor"></p>
                           </div>
                       <p className="text-textColor bg-white w-full h-[30px] text-[12px] md:text-[15px]"></p>
                       
                       {/* <Link className="font-semibold px-[5px] py-[2px] bg-titleBg text-btn-primary rounded-[10px] " href=''>View</Link> */}
                </div>  
                <div className="bg-secondaryBg   px-[20px] py-[20px] grid grid-cols-1 lg:grid-cols-2 w-full   gap-2  rounded">
                           
                           <div className="grid grid-cols-3 justify-between gap-2 items-center">
                           <span className="flex bg-white items-center">
                               <h1 className="font-bold uppercase md:text-[20px] text-[15px] w-full h-[30px]  text-textTitle"></h1>
                               </span>
                               <p className="md:text-[10px] col-span-2 text-[8px] font-bold w-full h-[30px] bg-white text-textColor"></p>
                           </div>
                       <p className="text-textColor bg-white w-full h-[30px] text-[12px] md:text-[15px]"></p>
                       
                       {/* <Link className="font-semibold px-[5px] py-[2px] bg-titleBg text-btn-primary rounded-[10px] " href=''>View</Link> */}
                </div>  
                <div className="bg-secondaryBg   px-[20px] py-[20px] grid grid-cols-1 lg:grid-cols-2 w-full   gap-2  rounded">
                           
                           <div className="grid grid-cols-3 justify-between gap-2 items-center">
                           <span className="flex bg-white items-center">
                               <h1 className="font-bold uppercase md:text-[20px] text-[15px] w-full h-[30px]  text-textTitle"></h1>
                               </span>
                               <p className="md:text-[10px] col-span-2 text-[8px] font-bold w-full h-[30px] bg-white text-textColor"></p>
                           </div>
                       <p className="text-textColor bg-white w-full h-[30px] text-[12px] md:text-[15px]"></p>
                       
                       {/* <Link className="font-semibold px-[5px] py-[2px] bg-titleBg text-btn-primary rounded-[10px] " href=''>View</Link> */}
                   </div>  
          </div>
        </div>
        </>
}
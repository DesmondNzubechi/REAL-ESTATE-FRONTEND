import { PageBgOverview } from "@/components/pageOverview/pageOverview"
import house1 from '../../public/images/house7.avif'
import house2 from '../../public/images/real estate news.jpg'
import house3 from '../../public/images/house5.avif'
import house4 from '../../public/images/house6.avif'
import Image from "next/image"
import Link from "next/link"
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { Footer } from "@/components/Footer/footer";
import { useEffect, useState } from "react"
import { blogType } from "@/components/types/types"
import { api } from "@/components/lib/api"

export const BlogSkeleton = () => {


    const blog: number[] = [1,1]
   

   
    return <>
        <div className="grid animate-skeleton-loading grid-cols-1 md:grid-cols-2  px-[30px] gap-[30px] py-[100px] ">
      
            { 
                blog.map((num) => {
                    return <div key={num} className="border relative hover:shadow-2xl group overflow-hidden">
                        <div></div>
                        <div className="h-[350px] w-full bg-slate-200"></div>
    <div className="flex flex-col py-[20px] px-[30px] gap-5">
        <div className="flex flex-row gap-5 items-center">
            <span className="flex items-center gap-1">
                <p className="font-medium uppercase bg-slate-200 text-light py-[10px] w-[150px] h-[30px] px-[20px]"></p>
            </span>
        </div>
 
        <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] bg-slate-200 w-[200px] h-[30px] lg:text-[35px]"></h1>
        <div className="flex gap-5">
            <span className="flex bg-slate-200 w-[100px] h-[30px] items-center gap-1">
                <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
            </span>
            <span className="flex bg-slate-200 w-[70px] h-[30px] items-center gap-1"> 
               
                <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
            </span>
            <span className="flex bg-slate-200 w-[100px] h-[30px] items-center gap-2">
               
                <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
            </span> 
        </div>
                            <p className="text-textColor bg-slate-200 w-[300px] h-[30px] text-[15px]"></p>
        <div className="flex justify-between">
            <div  className="font-medium uppercase bg-slate-200 w-[200px] h-[50px] hover:text-btn-primary text-btn2"></div>
        </div>
    </div>
                    </div>
                })
            }
       
        </div>
    </>
}
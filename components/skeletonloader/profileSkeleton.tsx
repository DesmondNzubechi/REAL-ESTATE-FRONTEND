
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import myPic from '../../public/images/nzubechi.png'
import Image from "next/image";
import { useEffect, useState } from "react";

export const ProfileSkeleton = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(true);
      }, 2000);
  
      return () => clearTimeout(timer); 
    }, []);

    
    return <>
      <div className="lg:col-span-2 animate-skeleton-loading  col-span-9  flex flex-col lg:flex-row px-[20px] gap-5 h-fit py-[30px] ">
            <div className="h-[300px] w-[300px] bg-slate-50 shadow">
               
            </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 ">
                            <h1 className="font-bold capitalize text-[15px] md:text-[25px] w-[300px] bg-slate-50 h-[30px] shadow rounded text-textTitle"></h1>
                    <h2 className="font-semibold text-textColor text-[12px] md:text-[20px] w-[200px] bg-slate-50 h-[25px] shadow rounded"></h2>
                    </div>
                <div className="flex flex-col gap-2 mt-[30px]">
                    <span className="flex items-center w-[200px] bg-slate-50 h-[30px] shadow rounded  gap-3">
                        </span>  

                        <span className="flex items-center w-[220px] bg-slate-50 h-[30px] shadow rounded  gap-3">
                        </span>  

                        <span className="flex items-center w-[230px] bg-slate-50 h-[30px] shadow rounded  gap-3">
                        </span>   
                        <span className="flex items-center w-[250px] bg-slate-50 h-[30px] shadow rounded  gap-3">
                        </span>  
                </div>
            </div>
        </div>
    </>
}
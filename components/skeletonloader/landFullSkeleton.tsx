import { propertyOverview } from "@/components/types/types"
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
import { FaLocationDot } from "react-icons/fa6";
import ImageSliderSkeleton from "./imageSliderSkeleton";

export const LandDetailsSkeleton = () => {

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
    
    return <>
       <div className="px-[30px] animate-skeleton-loading  py-[100px] grid grid-cols-1 ">
            <ImageSliderSkeleton/>
            
            <div className="grid gap-[100px] grid-cols-1 pt-[50px] md:grid-cols-2">

                <div className="flex flex-col gap-[50px] ">
                <div className="flex gap-5 ">
                <span className="flex bg-slate-200 w-full h-[30px] items-center gap-2">
               
               <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
                    </span> <span className="flex bg-slate-200 w-full h-[30px] items-center gap-2">
               
               <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
                    </span> <span className="flex bg-slate-200 w-full h-[30px] items-center gap-2">
               
               <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
                        </span>
                    </div>
                    <div>
                    <p className="flex items-center  px-[20px] gap-5 rounded  w-[200px] h-[50px] bg-slate-200"></p>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                    <h1 className="font-bold px-[10px] w-full h-[50px] bg-slate-200  text-textTitle text-[30px] "></h1>
                        <p className="text-textColor w-full h-[300px] bg-slate-200 text-[15px] md:text-[20px] ">
              </p>
                    </div>

             
           

                </div>

                <div className="flex flex-col gap-[50px]">
        
                    <div className="flex flex-col gap-5">
                    <h1 className="font-bold px-[10px] w-full h-[50px] bg-slate-200  text-textTitle text-[30px] "></h1>
                    <div className="w-full md:h-[500px] bg-slate-200"></div>
                    </div>
                </div>
                
            </div>
    </div>
    </>
}
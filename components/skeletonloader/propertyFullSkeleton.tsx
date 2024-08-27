import { FaPencil } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { api } from "@/components/lib/api";
import ImageSliderSkeleton from "./imageSliderSkeleton";

export const  PropertyDetailsSkeleton = () => {
          

    const reviewHere : number[] = [1, 1, 1, 1,1]
    
    return <>
       
       <div className="px-[30px]  animate-skeleton-loading py-[100px] grid grid-cols-1 ">
            <ImageSliderSkeleton />
            
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

                    <div className="flex flex-col gap-[30px] ">
                        <h1 className="font-bold px-[10px] border-l-[5px] w-full h-[50px] bg-slate-200  text-textTitle text-[30px] "></h1>
                        <div className="flex flex-col bg-secondaryBg gap-5 rounded px-[20px] py-[30px] ">
                            <span className="flex items-center h-[30px] w-full bg-white gap-1"></span>
                            <span className="flex items-center h-[30px] w-full bg-white gap-1"></span>
                            <span className="flex items-center h-[30px] w-full bg-white gap-1"></span>
                            <span className="flex items-center h-[30px] w-full bg-white gap-1"></span>
                            <span className="flex items-center h-[30px] w-full bg-white gap-1"></span>
                            <span className="flex items-center h-[30px] w-full bg-white gap-1"></span>
                        </div>
                    </div>

               
                <div className="flex flex-col gap-5">
                <h1 className="font-bold px-[10px] w-full h-[50px] bg-slate-200  text-textTitle text-[30px] "></h1>
                <div className="grid grid-cols-3 gap-5">
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>
                    <span className="flex bg-slate-200 w-full px-[10px] h-[20px] items-center gap-1"> </span>        
                </div>
                    </div>
                    

                </div>

                <div className="w-full self-start">
            <div className="  w-full flex flex-col gap-[50px] px-[20px]  ">

                
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-textTitle w-[200px] h-[50px] bg-slate-200 px-[10px]  w-[200px] shadow py-[10px] px-[20px]  text-[15px] md:text-[30px] "></h1>
                    <div className="flex flex-col gap-5">
                        {
                            reviewHere.map((review) => {
                                return  <div className="flex flex-col border p-[15px]  gap-5">
                                <div className="flex flex-col gap-[5px]">
                                    <FaUserAlt className="text-light bg-slate-200 p-2 rounded-full text-[30px]" /> 
                                        <h1 className="font-bold w-[150px] h-[20px] bg-slate-200 text-[15px] "></h1>
                                        <h2><span className="flex w-[200px] h-[20px] bg-slate-200 items-center gap-2"><p className="font-bold capitalize text-[10px] text-btn-primary"></p></span></h2>
                                </div>
                                    <p className="text-textColor w-full h-[100px] bg-slate-200 text-[12px] "></p>
    </div>
                            })
                        }
                     
                    </div>
                </div>

                <form  aria-disabled className="flex flex-col gap-5 w-full p-4 bg-secondaryBg">
                <h1 className="font-bold px-[10px] w-[200px] h-[30px]  text-textTitle text-[15px] md:text-[30px] "></h1>
                <div className=' flex w-full justify-between bg-light px-[20px] py-[20px] '>

<input   type="text" disabled className='text-btn2 w-full bg-transparent outline-0 text-[15px] ' /> 
<FaPencil className='text-[15px] text-slate-200'/>
</div>
<div className=' w-full md:col-span-3 flex justify-between bg-light px-[20px] py-[20px] '>

<textarea disabled  className='text-btn2  min-h-[200px] bg-transparent w-full outline-0 text-[15px] ' /> 
<FaPencil className='text-[15px] text-slate-200'/>
</div>
<button disabled className='text-light w-[200px] h-[50px] bg-slate-50 px-[30px] py-[15px] capitalize '></button>
                </form>
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
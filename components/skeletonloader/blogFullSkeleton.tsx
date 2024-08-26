import { FaUserAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export const FullBlogSkeleton = () => {

    const fullBlogArticle: number[] = [1, 1]
  
    return <div className="grid animate-skeleton-loading items-start px-[30px] py-[100px] gap-[100px] grid-cols-1 md:grid-cols-2">
        <div className="flex gap-5 items-start">

        <div className="flex flex-col gap-[30px] w-full">
                <p className="font-medium uppercase bg-slate-200 h-[50px] text-light w-[200px] py-[10px] px-[20px]"></p>
            <h1 className="font-bold text-textTitle bg-slate-200 h-[30px] text-[25px] md:text-[30px] lg:text-[35px] "></h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            <span className="flex bg-slate-200 w-full h-[30px] items-center gap-2">
               
               <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
           </span> 
           <span className="flex bg-slate-200 w-full h-[30px] items-center gap-2">
               
               <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
                    </span> 
                    <span className="flex bg-slate-200 w-full h-[30px] items-center gap-2">
               
                <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor"></p>
            </span> 
                </div>
                <div className="h-[350px] w-full bg-slate-200"></div>
            <hr />
            <div>
                    <p  className="text-textColor text-[15px] h-[600px] w-full bg-slate-200  md:text-[20px] ">
                     
                </p>
            </div>
            </div>
        </div>
        
        <div className="w-full self-start">
            <div className="  w-full flex flex-col gap-[50px] px-[20px]  ">

                
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-textTitle w-[200px] h-[50px] bg-slate-200 px-[10px]  w-[200px] shadow py-[10px] px-[20px]  text-[15px] md:text-[30px] "></h1>
                    <div className="flex flex-col gap-5">
                        {
                            fullBlogArticle.map((comment) => {
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
}
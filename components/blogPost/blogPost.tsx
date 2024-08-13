import Image from "next/image"
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import house1 from '../../public/images/house6.avif'
import house2 from '../../public/images/house7.avif'
import house3 from '../../public/images/house5.avif'

export const BlogPost = () => {

    return <>
        <div className="bg-primaryBg py-[100px] px-[30px] ">
        
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[10px] px-[20px] rounded-full  py-[10px] capitalize font-bold w-fit '>blogs</h2>
            <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] text-textTitle ">Our Article</h1>
        </div>
        <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
            <div className="border ">
                    <Image src={house1} className="md:h-[350px] " alt="" />
                    
                <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                    <div className="flex flex-row gap-5 items-center">
                        <span className="flex items-center gap-1"><FaUserAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]" /> <p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">by admin</p></span>
                        <span className="flex items-center gap-1"><FaTags  className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/> <p className="font-medium uppercase text-[12px] md:text-[15px] text-textColor">business</p></span>
</div>
                
                <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1> 
                <hr />
                <div className="flex justify-between ">
<span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/><p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">August 10, 2024</p></span>
                    <Link href='' className="font-medium uppercase text-btn-primary text-[12px] md:text-[15px] hover:text-btn2">Read more</Link>
                        </div>
                        </div>
                </div>
                <div className="border ">
                    <Image src={house3} className="h-[350px] " alt="" />
                    
                <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                    <div className="flex flex-row gap-5 items-center">
                        <span className="flex items-center gap-1"><FaUserAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]" /> <p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">by admin</p></span>
                        <span className="flex items-center gap-1"><FaTags  className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/> <p className="font-medium uppercase text-textColor">business</p></span>
</div>
                
                <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1>
                <hr />
                <div className="flex justify-between ">
<span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/><p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">August 10, 2024</p></span>
                    <Link href='' className="font-medium uppercase text-btn-primary hover:text-btn2">Read more</Link>
                        </div>
                        </div>
                </div>
                <div className="border ">
                    <Image src={house2} className="h-[350px] " alt="" />
                    
                <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                    <div className="flex flex-row gap-5 items-center">
                        <span className="flex items-center gap-1"><FaUserAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]" /> <p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">by admin</p></span>
                        <span className="flex items-center gap-1"><FaTags  className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/> <p className="font-medium uppercase text-textColor">business</p></span>
</div>
                
                <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1>
                <hr />
                <div className="flex justify-between ">
<span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/><p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">August 10, 2024</p></span>
                    <Link href='' className="font-medium uppercase text-btn-primary hover:text-btn2">Read more</Link>
                        </div>
                        </div>
            </div>
            </div>
            </div>
    </>
}
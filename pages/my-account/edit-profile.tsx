import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { FaFlag } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import myPic from '../../public/images/nzubechi.png'
import Image from "next/image";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { FcAddImage } from "react-icons/fc";
import { MdEdit } from "react-icons/md";
export default function EditProfile() {
    
    return <>
         <div className="bg-textTitle fixed w-full top-0 h-[100px] ">
        </div>
        <MobileNav/>
        <DesktopNav/>
    <div className="px-[30px] py-[100px] ">
       <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-3">
            <MyAccountNav />
            <div></div>
            <div className="col-span-9 lg:col-span-2 flex flex-col  px-[20px] gap-5 h-fit py-[30px] ">
                <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold ">Edit profile</h1>
            <form action="" className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
            <div className='border-[2px] flex w-full justify-between px-[20px] py-[20px] '>
                        <input type="text" name="firstname" placeholder='First name' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] w-full flex justify-between px-[20px] py-[20px] '>
                        <input type="text" name="lastname" placeholder='Last name' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex w-full justify-between px-[20px] py-[20px] '>
                        <input type="text" name="username" placeholder='Username' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex w-full justify-between px-[20px] py-[20px] '>
                        <input type="tel" name="phone no" placeholder='+2347084183...' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex w-full justify-between px-[20px] py-[20px] '>
                        <input type="text" name="country" placeholder='Country' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex w-full justify-between px-[20px] py-[20px] '>
                        <input type="text" name="state" placeholder='State' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                                            </div>
                                            
            <div className='border-[2px] flex  w-full justify-between px-[20px] py-[20px] '>
                        <input type="email" name="email" placeholder='nzubechukwu@gmail.com' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                                            </div>
                                            <div className="items-center flex relative">
                              
                              <Image src={myPic} alt={`  profile picture`} height={200} width={200}  className="rounded-full h-[80px] w-[80px] "/> 
                                        
                                                             <input type="file" name="user profile pic" className="hidden" id="user profile pic" />
                                                             <label htmlFor="user profile pic" className="absolute text-[25px] rounded-full bottom-0  " >
                                                                 <MdEdit className="bg-secondaryBg border text-btn-primary rounded-full"/>
                                                             </label>
                                                            </div> 
                <button className='text-light md:col-span-2 text-[15px] md:text-[20px] uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>register</button>
            </form>
        </div>
    </div>
     
        </div>
        </>
}
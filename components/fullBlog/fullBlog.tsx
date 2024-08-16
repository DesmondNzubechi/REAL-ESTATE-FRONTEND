import { FaUserAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import house1 from '../../public/images/house5.avif'
import Image from "next/image";
import { FaPencil } from "react-icons/fa6";


export const FullBlog = () => {
    return <div className="grid px-[30px] py-[100px] gap-[100px] grid-cols-1 md:grid-cols-2">
        <div className="flex gap-5">

        <div className="flex flex-col gap-[30px] ">
            <p className="font-medium uppercase bg-btn-primary text-light w-fit py-[10px] px-[20px]">business</p>
            <h1 className="font-bold text-textTitle text-[25px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
                    <span className="flex items-center gap-1"><FaRegUser  className="text-btn-primary text-[15px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] md:text-[15px] text-textColor">by admin</p></span>
                    <span className="flex items-center gap-1"><FaRegComments className="text-btn-primary text-[15px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] md:text-[15px] text-textColor">40 Comments</p></span>
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[15px] lg:text-[20px]"/><p className="font-medium capitalize text-[12px] md:text-[15px] text-textColor">August 15, 2024</p></span>
                </div>
            <Image src={house1} className="h-[350px] w-full " alt="" />
            <hr />
            <div>
                <p className="text-textColor text-[15px] md:text-[20px] ">
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
            </div>
        </div>
        
        <div className="w-full">
            <div className="  w-full flex flex-col gap-[50px] px-[20px] py-[30px] ">

                
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-textTitle px-[10px] border-l-[5px] shadow w-fit py-[10px] px-[20px] border-btn-primary text-[15px] md:text-[30px] ">All The Comment</h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col border p-[15px]  gap-5">
                            <div className="flex flex-col gap-[5px]">
                                <FaUserAlt className="text-light bg-btn-primary p-2 rounded-full text-[50px]" /> 
                                <h1 className="font-bold text-[15px] ">Desmond Nzubechukwu</h1>
                                <h2><span className="flex items-center gap-2"><p className="font-bold capitalize text-[10px] text-btn-primary">August 15, 2024</p></span></h2>
                            </div>
                            <p className="text-textColor text-[12px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
</div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-full p-4 bg-secondaryBg">
                <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[15px] md:text-[30px] ">Post A Comment</h1>
                <div className=' flex w-full justify-between bg-light px-[20px] py-[20px] '>

<input type="text" placeholder='Your Name...' className='text-btn2 w-full  outline-0 text-[15px] ' /> 
<FaPencil className='text-[15px] text-btn-primary'/>
</div>
<div className=' w-full md:col-span-3 flex justify-between bg-light px-[20px] py-[20px] '>

<textarea  placeholder='Write Your Comment Here..' className='text-btn2  min-h-[200px] w-full outline-0 text-[15px] ' /> 
<FaPencil className='text-[15px] text-btn-primary'/>
</div>
<button className='text-light w-fit bg-btn-primary px-[30px] py-[15px] capitalize '>Send message</button>
                </div>
            </div>
        </div>
    </div>
}
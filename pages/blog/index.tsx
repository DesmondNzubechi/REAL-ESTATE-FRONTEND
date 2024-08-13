import { PageBgOverview } from "@/components/pageOverview/pageOverview"
import house1 from '../../public/images/house7.avif'
import Image from "next/image"
import Link from "next/link"
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { Footer } from "@/components/Footer/footer";

export default function Blog() {
    
    return <>
        <MobileNav />
        <DesktopNav/>
        <PageBgOverview HomeLink='Home' page="Blog" CurrentPage="Blog" BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" />
        <div className="grid grid-cols-1 md:grid-cols-2  px-[30px] gap-[30px] py-[100px] ">
      
        <Link href='/blog/:slug' className="border ">
                    <Image src={house1} className="md:h-[350px] w-full " alt="" />
                    
                <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                    <div className="flex flex-row gap-5 items-center">
                        <span className="flex items-center gap-1"><p className="font-medium uppercase bg-btn-primary text-light py-[10px] px-[20px]">business</p></span>
</div>
                
                <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
                    <span className="flex items-center gap-1"><FaRegUser  className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]" /> <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">by admin</p></span>
                    <span className="flex items-center gap-1"><FaRegComments className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]" /> <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">40 Comments</p></span>
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]"/><p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">August 10, 2024</p></span>
                </div>
                <p className="text-textColor text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex justify-between ">
                    <Link href='' className="font-medium uppercase hover:text-btn-primary text-btn2 ">Read more</Link>
                        </div>
                        </div>
            </Link>
            <Link href='/blog/:slug' className="border ">
                    <Image src={house1} className="md:h-[350px] w-full " alt="" />
                    
                <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                    <div className="flex flex-row gap-5 items-center">
                        <span className="flex items-center gap-1"><p className="font-medium uppercase bg-btn-primary text-light py-[10px] px-[20px]">business</p></span>
</div>
                
                <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1>
                <div className="flex gap-5 ">
                    <span className="flex items-center gap-1"><FaRegUser  className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]" /> <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">by admin</p></span>
                    <span className="flex items-center gap-1"><FaRegComments className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]" /> <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">40 Comments</p></span>
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]"/><p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">August 10, 2024</p></span>
                </div>
                <p className="text-textColor text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex justify-between ">
                    <Link href='' className="font-medium uppercase hover:text-btn-primary text-btn2 ">Read more</Link>
                        </div>
                        </div>
            </Link>
        </div>
        <Footer/>
    </>
}
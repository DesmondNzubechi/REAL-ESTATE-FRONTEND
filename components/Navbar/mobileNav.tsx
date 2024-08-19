import Link from "next/link";
import { navType } from "../types/types"
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbHomeSearch } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { Poppins } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import { useUserStore } from "../store/store";
import logo from '../../public/images/logo2.png';
import Image from "next/image";
import { FaCircleUser } from "react-icons/fa6";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    style: ['normal', 'italic'],
});
  
export const MobileNav = () => {
const {user, isAuthenticated} = useUserStore()
    const navItems: navType[] = [
        {
            name: "home",
            url : "/"
        },
        {
            name: "property",
            url : "/properties"
        },
        {
            name: "land",
            url : "/land"
        },
        {
            name: "blog",
            url : "/blog"
        },
        {
            name: "about",
            url : "/about"
        },
        {
            name: "contact",
            url : "/contact-us"
        },
    ]

    const [navState, setNavState] = useState<string>("left-[-2000px]")

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 40;
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
  
      if (currentScrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior : "smooth"})
  }

    return (
        <nav className={`${poppins.className} lg:hidden relative z-[1000]`}>
            <div
                 style={{
                    transition: "ease-in .7s",
                    scrollBehavior : "smooth"
                  }}
                className={`py-[15px]  px-[30px] flex flex-col gap-y-[20px] fixed left-0 right-0 top-0 w-full ${isScrolled? "bg-textTitle" : "bg-transparent"} `}>
               {/* {!isScrolled && <> <div className="flex justify-around ">
                <div className="flex items-center"><IoMdCall className="text-btn-primary text-[20px] "/> <p className="text-light font-bold text-large">+2347084183611</p></div>
                    <div className="flex items-center"><FaLocationDot className="text-btn-primary text-[20px] "/> <p className="text-light font-bold text-large">1A Denten Street, Ogui, Enugu.</p></div>
                </div>
                <hr /> </>}  */}
                <div className="flex items-center justify-between ">
                <Link href='/' className="flex  gap-1 items-center">
                       <Image src={logo} className=" w-[150px] md:w-[250px]" alt="home  features logo"/>
                    </Link> 

                    <div className="flex bg-primaryBg p-2  hover:bg-slate-200">
                        {navState !== "left-[-2000px]" ?
                        <HiXMark onClick={() => setNavState('left-[-2000px]')} className="text-[30px]  "/> :
                        <FaBarsStaggered onClick={() => setNavState('left-0')} className="text-[30px]  "/>}
                    </div>
                </div>
            </div>
            <span onClick={(e:any) => {
                if (e.target.tagName !== 'DIV') {
                    setNavState('left-[-2000px]')
                }
            }} style={{ transition: "ease-in-out 1s" }} className={`fixed z-[10] h-[100vh] text-priimaryText bg-tp ${navState} right-0 top-0 bottom-0 w-full`}>
                <div className="flex bg-primaryBg flex-col overflow-y-auto gap-[30px] absolute top-0 bottom-0 w-[70%] left-0 px-[30px] py-[30px]">
                    <div className="flex justify-between items-center">
                    <Link href='' className="flex items-center">
                        <SiHomeassistantcommunitystore className="text-[20px] md:text-[30px] text-btn-primary" /> 
                        <h1 className="font-bold uppercase text-[20px] md:text-[30px]">Home features</h1>
                        </Link>
                        {/* <button onClick={() => setNavState('left-[-2000px]')}>
                        <HiXMark className="bg-black-bg text-[40px]  hover:bg-slate-700 p-1 text-light"/>
                        </button> */}
                    </div>
                    <hr />
                    <ul className="bg-primaryBg flex flex-col gap-2">
                        {navItems.map((nav: navType, index: number) => (
                            <li key={index}>
                                <Link className="text-[15px] text-textColor capitalize" href={nav.url}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <hr />
                   {isAuthenticated? <div>
                        <Link href='/my-account' className="bg-btn-primary text-primary text-light text-[15px] w-fit  py-[10px] rounded px-[20px] flex items-center gap-2"><FaCircleUser /> My Account</Link>
                    </div> :
                    <div className="flex my-[20px] flex-col gap-2">
                        {/* <Link href='' className="flex text-[15px] items-center">
                            <TbHomeSearch className="text-[20px]" />
                            <span>Search</span>
                        </Link> */}
                        <Link href='/register' className="bg-btn-primary text-primary text-light text-[15px] w-[150px] py-[5px] px-[20px]">
                            Register
                        </Link>
                        <Link href='/signin' className="text-[15px] text-center border py-[5px] w-[150px] px-[20px]">
                            Login
                        </Link>
                    </div>}
                    <hr />
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold">Follow Us On Social</h1>
                        <div className="flex item-center gap-5">
                            <Link className="bg-bg-secondary p-2 rounded" href=''>
                                <FaXTwitter className="text-[15px]" />
                            </Link>
                            <Link className="bg-bg-secondary p-2 rounded" href=''>
                                <FaLinkedinIn className="text-[15px]" />
                            </Link>
                            <Link className="bg-bg-secondary p-2 rounded" href=''>
                                <FaFacebookF className="text-[15px]" />
                            </Link>
                            <Link className="bg-bg-secondary p-2 rounded" href=''>
                                <FaInstagram className="text-[15px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </span>
        </nav>
    )
}

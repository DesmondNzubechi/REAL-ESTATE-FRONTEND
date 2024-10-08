import { RxActivityLog } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { accountNav } from "../types/types";
import Link from "next/link";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LogOut } from "../logOut/loagOut";

export const MyAccountNav = () => {

    const router = useRouter();
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        if (router.isReady) {
    setPathname(router.pathname)
}
    }, [router.isReady, router.pathname])

    const DashboardNav: accountNav[] = [
        {
            name: "My Profile",
            url: "/my-account",
            icon: FaUserAlt 
        },
        {
            name: "Edit profile",
            url: "/my-account/edit-profile",
            icon: MdEdit
        },
        {
            name: "My Order",
            url: "/my-account/my-order",
            icon: FaHouseCircleCheck
        },
        {
            name: "My Activities",
            url: "/my-account/my-activities",
            icon: RxActivityLog
        },
        {
            name: "Change password",
            url: "/my-account/change-password",
            icon: RiLockPasswordFill
        }, 
        {
            name: "logout",
            url: "",
            icon: RiLogoutCircleRLine
        },
    ]

    const [logOut, setLogOut] = useState<boolean>(false);

    return <>
        <LogOut logOut={logOut} setLogOut={setLogOut}/>
    <div className="flx fixed left-0 top-[100px] h-full lg:w-[25%] justyfy-center ">

        <ul className="bg-primaryBg  h-full  shadow border-l-0 border-t-[2px] flex flex-col ">
            {
                DashboardNav.map((nav: accountNav, index: number) => {
                    return <Link href={nav.url} onClick={() => {
                        if (nav.name === 'logout') {
                            setLogOut(true)
                        }
                    }} key={index} className={`flex py-[20px] px-[20px] hover:bg-slate-200 ${pathname === nav.url? "bg-textTitle" : 'bg-'} border-t justify-between items-center`}>
                        <li className={`${ pathname === nav.url? "text-light" : "text-textColor"} text-[20px] hidden lg:block `}>{nav.name}</li>
                        <nav.icon className={`text-[20px] ${ pathname === nav.url? "text-slate-300" : "text-textColor"}`} />
                    </Link>
                     
                })
                }
       </ul>
        </div>
        </>
}
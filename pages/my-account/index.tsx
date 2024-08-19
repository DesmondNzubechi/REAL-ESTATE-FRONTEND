import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { FaFlag } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import myPic from '../../public/images/nzubechi.png'
import Image from "next/image";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { api} from "@/components/lib/api";
import { useEffect } from "react";
import { Audio } from 'react-loader-spinner'
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";


export default function MyAccount() {

    const router = useRouter()

    const { user, setUser } = useUserStore();

    console.log("the user is here", user)
    
const getUser = async () => {
    try {
        const response = await api.get('/user/me', {
            withCredentials: true, // Important to send cookies
        });
        const user = response.data.data.user;
        console.log("User fetched:", response.data.data.user);
        setUser(user)
    } catch (error) {
        console.log("Error fetching user:", error);
    }
};

    useEffect(() => {
        getUser();
        if (!user) {
            router.push('/signin')
        }
}, []);
    
    

    return <><div className="bg-textTitle fixed top-0 w-full  h-[100px] ">
    </div>
    <MobileNav/>
    <DesktopNav/>
    <div className="px-[30px] pt-[150px] py-[100px] ">
       <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-3">
            <div></div>
        <MyAccountNav />
        <div className="lg:col-span-2 col-span-9 border flex flex-col lg:flex-row px-[20px] gap-5 h-fit py-[30px] ">
            <div>
                <Image src={myPic} className="w-[300px] " alt="user image" />
            </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col ">
                            <h1 className="font-bold capitalize text-[15px] md:text-[25px] text-textTitle">{user?.firstName} {user?.lastName}</h1>
                    <h2 className="font-semibold text-textColor text-[12px] md:text-[20px] ">@{user?.userName}</h2>
                    </div>
                <div className="flex flex-col gap-5">
                    <span className="flex items-center gap-3">
                        <FaLocationDot className="text-btn-primary text-[15px] md:text-[20px] "/>
                        <p className="text-textColor text-[12px] md:text-[15px] ">{user?.state}, {user?.country}</p>
                        </span>  

                        <span className="flex items-center gap-3">
                        <MdEmail className="text-btn-primary text-[15px] md:text-[20px] "/>
                        <p className="text-textColor text-[12px] md:text-[15px] ">{user?.email}</p>
                        </span>  

                        <span className="flex items-center gap-3">
                        <FaFlag className="text-btn-primary text-[15px] md:text-[20px] "/>
                        <p className="text-textColor text-[12px] md:text-[15px] ">{user?.country}</p>
                        </span>  
                        <span className="flex items-center gap-3">
                        <IoCall className="text-btn-primary text-[15px] md:text-[20px] "/>
                        <p className="text-textColor text-[12px] md:text-[15px] ">+{user?.phoneNumber}</p>
                    </span>  
                </div>
            </div>
        </div>
    </div>
     
        </div>
        </>
}
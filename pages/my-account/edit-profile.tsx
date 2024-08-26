import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { FaFlag } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import myPic from '../../public/images/nzubechi.png';
import Image from "next/image";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { FcAddImage } from "react-icons/fc";
import { MdEdit } from "react-icons/md";
import { useUserStore } from "@/components/store/store";
import { useEffect, useState } from "react";
import { userType } from "@/components/types/types"; // Renamed 'user' to 'UserType'
import { api } from "@/components/lib/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import EditProfileSkeleton from "@/components/skeletonloader/editProfileSkeleton";

export default function EditProfile() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const { user, setUser, isAuthenticated } = useUserStore();
    const [theUser, setTheUser] = useState<userType | any>(user);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTheUser({ ...theUser, [name]: value });
    };
    console.log('the user id', user?._id)


    const updateUser = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        setIsLoading(true);
        try {
                const response = await api.patch(`/user/updateUser/${user?._id}`,
                        { 
                                firstName: theUser?.firstName,
                                 lastName: theUser?.lastName,
                                userName: theUser?.userName,
                                country: theUser?.country,
                                state: theUser?.state,
                            email: theUser?.email,
                                phoneNumber : theUser?.phoneNumber
                         },
                        { withCredentials: true }
                );
            const resUser = response.data.data.user;
            setUser(resUser);
            setIsLoading(false);
            router.push('/my-account');
            toast.success("Succesfully updated", {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            })
        } catch (error) {
            setIsLoading(false);
            toast.success("An error occured. Please try again", {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            })
            console.error("Error updating user:", error);
        }
    };


     
    const getUser = async () => {
        setLoading(true)
        try {
            const response = await api.get('/user/me', { 
                withCredentials: true, // Important to send cookies
            });
            const user = response.data.data.user;
            console.log("User fetched:", response.data.data.user);
            setUser(user) 
            setLoading(false)
        } catch (error) {
            toast.error("An error occured. Try login again", {
                hideProgressBar: true,
                position: "top-center"
            })
            router.push('/signin')
            console.log("Error fetching user:", error);
        }
    };
    
        useEffect(() => {
            getUser();
    }, []);

    return (
        <>
            <div className="bg-textTitle fixed w-full top-0 h-[100px]"></div>
            <MobileNav /> 
            <DesktopNav />
            <div className="px-[30px] py-[100px]">
                <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-3">
                    <MyAccountNav />
                    <div></div>
                 { loading &&  <EditProfileSkeleton/>}
                   {!loading && <div className="col-span-9 lg:col-span-2 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                        <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold">
                            Edit profile
                        </h1>
                        <form onSubmit={updateUser} className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                            <div className="border-[2px] flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleInputChange}
                                    value={theUser?.firstName || ""}
                                    placeholder="First name"
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className="border-[2px] w-full flex justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleInputChange}
                                    value={theUser?.lastName || ""}
                                    placeholder="Last name"
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className="border-[2px] flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="userName"
                                    onChange={handleInputChange}
                                    value={theUser?.userName || ""}
                                    placeholder="Username"
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className="border-[2px] flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    onChange={handleInputChange}
                                    value={theUser?.phoneNumber || ""}
                                    placeholder="+2347084183..."
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className="border-[2px] flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="country"
                                    onChange={handleInputChange}
                                    value={theUser?.country || ""}
                                    placeholder="Country"
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className="border-[2px] flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="state"
                                    onChange={handleInputChange}
                                    value={theUser?.state || ""}
                                    placeholder="State"
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className="border-[2px] flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={theUser?.email || ""}
                                    placeholder="nzubechukwu@gmail.com"
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className="items-center flex relative">
                                <Image
                                    src={myPic}
                                    alt={`profile picture`}
                                    height={200}
                                    width={200}
                                    className="rounded-full h-[80px] w-[80px]"
                                />
                                <input
                                    type="file"
                                    name="user profile pic"
                                    className="hidden"
                                    id="user profile pic"
                                />
                                <label
                                    htmlFor="user profile pic"
                                    className="absolute text-[25px] rounded-full bottom-0"
                                >
                                    <MdEdit className="bg-secondaryBg border text-btn-primary rounded-full" />
                                </label>
                            </div>
                            <button type="submit" disabled={isLoading} className="text-light md:col-span-2 text-[15px] md:text-[20px] uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light">
                                {isLoading ? "Updating user..." : "Update user"}
                            </button>
                        </form>
                    </div>}
                </div>
            </div>
        </>
    );
}

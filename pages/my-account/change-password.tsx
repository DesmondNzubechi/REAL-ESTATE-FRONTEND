
import { api } from "@/components/lib/api";
import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function ChangePassword() {
const router = useRouter()
    const { isAuthenticated, clearUser, user, setUser } = useUserStore();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [userPassword, setUserPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });


    useEffect(() => {
        if (!isAuthenticated) {
    router.push('/signin')
}
    }, [])

    const changeMyPassword = async (e: React.FormEvent) => {
    e.preventDefault()
        if (userPassword.newPassword !== userPassword.confirmNewPassword) {
            alert("password not the same")
            return;
        }

        if (!userPassword.newPassword || !userPassword.confirmNewPassword || !userPassword.currentPassword) {
            alert("fill in the required field");
            return;
        }

        setIsLoading(true)

        try {
            const changeP = await api.patch('/user/changePassword', {
                currentPassword: userPassword.currentPassword,
                password: userPassword.newPassword,
                confirmPassword: userPassword.confirmNewPassword
            },
                {
                    withCredentials: true
                });
            
            clearUser();
            setIsLoading(false);
            toast.success("Password change successful")
            router.push('/my-account')
            
        } catch (error) {
            setIsLoading(false);
        }

}
    


const getUser = async () => {
try {
    const response = await api.get('/user/me', { 
        withCredentials: true, // Important to send cookies
    });
    const user = response.data.data.user;
    setUser(user) 
} catch (error) {
    toast.error("An error occured. Try login again", {
        hideProgressBar: true,
        position: "top-center"
    })
    router.push('/signin')
}
};

useEffect(() => {
    getUser();
}, []);

    
    
    return <>
    <div className="bg-textTitle fixed top-0 w-full h-[100px] ">
   </div>
   <MobileNav/>
   <DesktopNav/>
    <div className="px-[30px] py-[100px] ">
    <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-3">
            <MyAccountNav />
            <div></div>
            <div className="col-span-9 lg:col-span-2 flex flex-col  px-[20px] gap-5 h-fit py-[30px] ">
                <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold ">Change password</h1>
            <form onSubmit={changeMyPassword} className="grid grid-cols-1   gap-5">
            <div className='border-[2px] flex w-full justify-between px-[20px] py-[30px] '>
                            <input
                                type="password"
                                value={userPassword.currentPassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword({ ...userPassword, currentPassword: e.target.value })}
                                name="current password" placeholder='Current Password' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] w-full flex justify-between px-[20px] py-[30px] '>
                            <input
                                value={userPassword.newPassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword({ ...userPassword, newPassword: e.target.value })}
                                type="password"
                                name="new password" placeholder='New Password' className='text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex w-full justify-between px-[20px] py-[30px] '>
                            <input
                                value={userPassword.confirmNewPassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword({ ...userPassword, confirmNewPassword: e.target.value })}
                                type="password"
                                name="confirm new password" placeholder='Confirm New Password' className='text-btn2 text-[15px] md:text-[20px] w-full bg-transparent outline-0  ' /> 
                        
                </div>

                <button type="submit" disabled={isLoading} className='text-light  uppercase w-fit bg-btn-primary text-[15px] md:text-[20px] px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>{isLoading? "updating..." : "Upadate Password"}</button>
            </form>
        </div>
    </div>
     
        </div>
        </>
}
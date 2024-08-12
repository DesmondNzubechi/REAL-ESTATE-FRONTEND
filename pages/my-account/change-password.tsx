
import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";

export default function ChangePassword() {
    
    return <>
    <div className="bg-textTitle fixed top-0 w-full h-[100px] ">
   </div>
   <MobileNav/>
   <DesktopNav/>
    <div className="px-[30px] py-[100px] ">
    <div className="grid gap-[50px] grid-cols-6 lg:grid-cols-3">
            <MyAccountNav />
            <div></div>
            <div className="col-span-5 lg:col-span-2 flex flex-col  px-[20px] gap-5 h-fit py-[30px] ">
                <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[20px] uppercase font-semibold ">Change password</h1>
            <form action="" className="grid grid-cols-1   gap-5">
            <div className='border-[2px] flex w-full justify-between px-[20px] py-[30px] '>
                        <input type="password" name="current password" placeholder='Current Password' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] w-full flex justify-between px-[20px] py-[30px] '>
                        <input type="password" name="new password" placeholder='New Password' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex w-full justify-between px-[20px] py-[30px] '>
                        <input type="password" name="confirm new password" placeholder='Confirm New Password' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        
                </div>

                <button className='text-light  uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>Upadate Password</button>
            </form>
        </div>
    </div>
     
        </div>
        </>
}
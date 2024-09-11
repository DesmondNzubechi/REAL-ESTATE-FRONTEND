import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signImg from '../../public/images/login1.avif'
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/components/lib/api";
import { useRouter } from "next/router";

export default function ResetPassword() { 

    const router = useRouter();
    const { token } = router.query;
    
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    console.log("the param", token)

    const passwordResetFn = async (e: any) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            toast.error("Please provide password and confirm password.")
            return;
        }

        if (password.length  < 10 || confirmPassword.length < 10) {
            toast.error("Your password length must be greater than or equal to 10.")
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Confirm password and password are not the same.")
            return;
        }

        setLoading(true)
        try {

            await api.patch(`/user/resetPassword/${token}`, {
                password,
                confirmPassword
            });
            
            toast.success("Reset password successful. Login with your new password.")
            setLoading(false)

            router.push('/signin')
            
        } catch (error) {
            toast.error("An error occured. Please try again")
            setLoading(false)
        }
    }
    
    return <div className="grid grid-cols-1 justify-center items-center gap-0 md:grid-cols-2">

        <div className="flex flex-col gap-[50px] justify-center h-full by-primaryBg px-[50px] md:px-[100px] py-[50px] ">
            <div className="flex flex-col gap-3 max-w-[500px] ">
                <h1 className="text-textTitlte uppercase text-[30px] font-bold">reset password</h1>
               <p className="text-textColor text-[15px]">Please make sure you provide a password that you would remember</p>
            </div>
            <form onSubmit={passwordResetFn} className="flex flex-col gap-5">
            <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="password" placeholder='password' value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        <RiLockPasswordFill className='text-[20px] text-btn-primary'/>
                </div>
                <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="password" placeholder='Confirm password' value={confirmPassword} onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        <RiLockPasswordFill className='text-[20px] text-btn-primary'/>
                </div>
                <button type='submit' disabled={loading} className='text-light uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>{loading? "Reseting password" : 'Reset Password'}</button>
            </form>
        </div>
        
            <Image src={signImg} className=" w-full h-fit hidden md:flex" alt="sign"/>
       
    </div>
}
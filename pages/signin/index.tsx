import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signImg from '../../public/images/login1.avif'
import Image from "next/image";
import { api } from "@/components/lib/api";
import { ChangeEvent, useState } from "react";
import { loginDetail } from "@/components/types/types";
import { Router, useRouter } from "next/router";


export default function SignIn() {
    const router = useRouter();
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const [userLoginDetail, setUserLoginDetail] = useState<loginDetail>({
        email: '',
        password : ''
    })

    const [error, setError] = useState<string | any>('');
    const [loading, setLoading] = useState<boolean>(false);

    const validateForm = () => {

        if (!userLoginDetail.email || !userLoginDetail.password) {
            setError("Please input both email and password")
            return false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userLoginDetail.email)) {
            setError("Please provide a valid email address")
            return false
        }

        return true;
    }

    const loginUser = async (e: any) => {
        e.preventDefault();

        setError("")

        if (!validateForm) {
            return
        }

        setLoading(true)
        try {
            const response = await api.post('/user/login', {email: userLoginDetail.email, password: userLoginDetail.password}, { withCredentials: true });

            console.log(response.data);
           // localStorage.setItem("token", response.token);
            setLoading(false)

         router.push('/my-account');
        } catch (error ) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }

    }
    
    return <div className="grid grid-cols-1 gap-0 md:grid-cols-2">

        <div className="flex flex-col gap-[50px] justify-center h-full by-primaryBg px-[50px] md:px-[100px] py-[50px] ">
            <div className="flex flex-col gap-3 max-w-[500px] ">
                <h1 className="text-textTitlte uppercase text-[30px] font-bold">Sign In
                    To Your Account</h1>
               
            </div>
            <form onSubmit={loginUser} className="flex flex-col gap-5">
            <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="email" value={userLoginDetail.email} required onChange={(e: ChangeEvent<HTMLInputElement>) => setUserLoginDetail({...userLoginDetail, email: e.target.value})} placeholder='nzubechukwu@gmail.com' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        {/* <MdEmail className='text-[20px] text-btn-primary'/> */}
                </div>
                <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input value={userLoginDetail.password} type="password" required onChange={(e: ChangeEvent<HTMLInputElement>) => setUserLoginDetail({...userLoginDetail, password : e.target.value})} placeholder='password' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        {/* <RiLockPasswordFill className='text-[20px] text-btn-primary'/> */}
                </div>
              {error &&  <p>{error}</p>}
                <button type="submit" disabled={loading} className='text-light uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>{loading ? "sign in progress" : "sign in"}</button>

                <Link href="" className="text-textTitle hover:text-btn-primary">Forgotten your password?</Link>
            </form>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-textTitle text-[25px] ">DON'T HAVE AN ACCOUNT?</h1>
                <Link href='/register' className='text-light uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>create an account</Link>
            </div>
        </div>
        
            <Image src={signImg} className=" w-full h-fit hidden md:flex" alt="sign"/>
       
    </div>
}
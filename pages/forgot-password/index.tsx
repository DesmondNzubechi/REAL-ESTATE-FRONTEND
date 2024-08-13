import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signImg from '../../public/images/login1.avif'
import Image from "next/image";

export default function ForgotPassword() {
    
    return <div className="grid grid-cols-1 justify-center items-center gap-0 md:grid-cols-2">

        <div className="flex flex-col gap-[50px] justify-center h-full by-primaryBg px-[50px] md:px-[100px] py-[50px] ">
            <div className="flex flex-col gap-3 max-w-[500px] ">
                <h1 className="text-textTitlte uppercase text-[30px] font-bold">forgot password</h1>
               <p className="text-textColor text-[15px]">Submit your email. a reset password link will be sent to the email provided</p>
            </div>
            <form action="" className="flex flex-col gap-5">
            <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="email" placeholder='nzubechukwu@gmail.com' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        <MdEmail className='text-[20px] text-btn-primary'/>
                </div>
                <button className='text-light uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>Submit email</button>

                <Link href="/signin" className="text-textTitle hover:text-btn-primary">Remember password?</Link>
            </form>
        </div>
        
            <Image src={signImg} className=" w-full h-fit hidden md:flex" alt="sign"/>
       
    </div>
}
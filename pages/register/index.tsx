import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signImg from '../../public/images/login1.avif'
import Image from "next/image";

export default function Register() {

        
     
    return <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        <div className="flex flex-col gap-[50px] h-full  by-primaryBg px-[50px] md:px-[50px] py-[50px] ">
            <div className="flex flex-col max-w-[500px] ">
                <h1 className="text-textTitlte text-[20px] md:text-[30px] font-bold uppercase">create a new account</h1>
            </div>
            <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className='border-[2px] flex flex-col justify-between px-[20px] py-[20px] '>
                                    
                        <input type="text" name="firstname" placeholder='First name' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="text" name="lastname" placeholder='Last name' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        
                </div>
              
            <div className='border-[2px] flex md:col-span-2 justify-between px-[20px] py-[20px] '>
                        <input type="email" name="email" placeholder='Email address' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="password" name="password" placeholder='password' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        
                </div>
                <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="password" name="confirm password" placeholder='Confirm password' className='text-btn2 w-full bg-transparent outline-0 text-[20px] ' /> 
                        
                </div>
                <button className='text-light md:col-span-2 text-[12px] md:text-[20px] uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>register</button>
            </form>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-textTitle text-[15px] md:text-[25px] uppercase ">already have AN ACCOUNT?</h1>
                <Link href='/signin' className='text-light uppercase text-[12px] md:text-[20px] w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light '>sign in</Link>
            </div>
        </div>
        <Image src={signImg} className=" w-full  h-full hidden md:flex" alt="sign"/>
    </div>
}
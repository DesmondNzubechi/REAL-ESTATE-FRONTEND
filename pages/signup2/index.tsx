import Image from 'next/image';
import authImg1 from '../../public/images/authImg.png';
import authImg2 from '../../public/images/authImg2.png';
import userImg1 from '../../public/images/user1.png';
import userImg2 from '../../public/images/user2.png';
import userImg3 from '../../public/images/user3.png';
import userImg4 from '../../public/images/user4.png';
import userImg5 from '../../public/images/user5.jpeg';

import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineGames } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdBed } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import Link from 'next/link';
import { api } from '@/components/lib/api';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Signup2 = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formValid, setFormValid] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    

    const validateInput = (name: string, value: string) => {
        switch (name) {
            case 'firstName':
            case 'lastName':
                return value.length > 0;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            case 'password':
                return value.length >= 10;
            case 'confirmPassword':
                return value === formData.password && value.length >= 10;
            default:
                return false;
        }
    };

    const validateForm = () => {
        return (
            formValid.firstName &&
            formValid.lastName &&
            formValid.email &&
            formValid.password &&
            formValid.confirmPassword
        );
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setFormValid({
            ...formValid,
            [name]: validateInput(name, value)
        });
    };

    const signUpUser = async (e: any) => {
        e.preventDefault();

        setError("");


        if (formData.password.length < 10 && formData.confirmPassword.length < 10) {
            toast.error("Please fill in all fields correctly");
            return;
        }

        if (!validateForm()) {
            toast.error("Please fill in all fields correctly");
            return;
        }

        setLoading(true);
        try {
            const response = await api.post('/user/signup', formData);


            router.push('/my-account');
            toast.success("Signup successful", {
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 5000,
                pauseOnHover: true,
            });
        } catch (error : any) {

            console.log(error, "The error is here")
            if (error instanceof Error) {
                    setError(error.message);
            } else {
                setError("An unexpected error occurred");
                }
                if (error?.response?.data?.message === "user already exist with email") {
                        toast.error("user already exist. Please login", {
                                hideProgressBar: true,
                                closeOnClick: true,
                                autoClose: 1000,
                                pauseOnHover: true,
                            });      
                }
        } finally {
            setLoading(false);
        }
    };


    return <>
    <div className='grid md:px-[50px] px-[20px] py-[20px] lg:px-[50px] grid-cols-1 gap-[100px]  md:grid-cols-2  '>

<div style={{
    background : `url(${authImg1.src})`,
    backgroundSize : "cover",
    backgroundRepeat : "no-repeat"
}}
className='  bg-[#FFEDE9] rounded-[20px] after:rounded-[20px]  px-[30px] py-[10px] w-full relative after:absolute after:top-0 after:bottom-0 before:bg-transparent before:absolute after:left-0 flex flex-col gap-[40px] after:right-0 after:bg-tpr'
>
    <div className='flex flex-col gap-[30px]'>
    <div className='flex items-center relative z-[10] gap-2'>
     <span className='bg-[#FF5733] rounded-[3.89px] p-2'><FaHouse className='text-[#FFFFFF]  text-[10px] '/></span>
<h1 className='text-[19.05px] leading-[21.43px] font-[700] text-[#FFFFFF] '>Home Features</h1>
    </div>
<div className='w-[353px]  z-[10]  h-[49px] relative z-[10] '>
<h1 className='text-[30px] leading-[42.45px] font-[700] text-[#FFFFFF] '>Find Your Dream Home
    </h1>
    <h1><span className='text-[#FF5733] text-[30px] leading-[42.45px] font-[700]'>With Us</span></h1>
</div>
<div className='bg-white h-[411px] p-[20px] mt-[30px] z-[10] flex flex-col gap-2 w-fit rounded-[10px] relative '>
<div className='absolute right-[-20%] top-[110px] z-[10] w-fit'>
<div className='bg-[#FFFFFF] shadow-2xl rounded-[11.02px] flex flex-col gap-3 py-[11.02px] px-[20.94px] '>
<div className='flex flex-col gap-1'>
    <h1 className='flex items-center text-[#333333]  text-[14.33px] font-[400] '>ratings <FaStar className='text-[#FF5733]'/> 5.0 </h1>
    <p className='font-[400] text-[11.02px] leading-[13.77px] text-[#666666] '>Trusted by clients worldwide </p>
</div>
<div className='flex items-center  '>
    <Image src={userImg1} alt='user images' className='w-[33.56px]  h-[33.56px] border border-[#FF5733] rounded-full'/>
    <Image src={userImg2} alt='user images' className='w-[33.56px] ml-[-5px] h-[33.56px] border border-[#FF5733] rounded-full'/>
    <Image src={userImg3} alt='user images' className='w-[33.56px] ml-[-5px] h-[33.56px] border border-[#FF5733] rounded-full'/>
    <Image src={userImg4} alt='user images' className='w-[33.56px] ml-[-5px] h-[33.56px] border border-[#FF5733] rounded-full'/>
    <Image src={userImg5} alt='user images' className='w-[33.56px] ml-[-5px] h-[33.56px] border border-[#FF5733] rounded-full'/>
    <div className='w-[33.56px] h-[33.56px] bg-[#FFF8F7] rounded-full text-[#666666] ml-[-5px] font-[500] text-center items-center flex justify-center text-[10px] p-3 '>
        +10
    </div>
</div>
</div>
</div>
    <Image src={authImg2} alt='sigin image' className='rounded-[5px] max-w-[348.71px] max-h-[185.51px] '/>
    <p className='bg-[#FF5733] ml-[-20px] mt-[-20px] relative z-1 py-[4.7px] flex items-center gap-5 px-[20px] rounded-r-full font-[500] text-[11.74px] leading-[14.31px] w-fit '><GiFallingStar className='text-white'/> Popular</p>

    <div className='flex justify-between items-center border-b py-[5px] '>
        <div className='flex flex-col gap-[11.74px] py-[2.35px] '>
        <h1 className='leading-[20.04px] text-[#111111] font-[600] text-[16.44px] '>Banana Island</h1>
        <p className='text-[14.09px] leading-[17.17px] font-[400] text-[#666666] '>GRA , Enugu Nigeria</p>
        </div>
        <div className='border p-3 rounded-full'>
            < FaRegHeart className=' text-[#FF5733]  text-[15px] ' />
        </div>
    </div>
    <div className='grid grid-cols-3 gap-5'>
        <div className='flex items-center justify-centter'>
        < MdBed className=' text-[#FF5733]  text-[15px] ' />
        <p className='text-[#666666] leading-[14.31px] font-[400] text-[11.31px] '>2 bed</p>
        </div>
        <div className='flex items-center justify-centter'>
        < LiaBathSolid className=' text-[#FF5733]  text-[15px] ' />
        <p className='text-[#666666] leading-[14.31px] font-[400] text-[11.31px] '>2 bathroom</p>
        </div>
        <div className='flex items-center justify-centter'>
        < MdOutlineGames className=' text-[#FF5733]  text-[15px] ' />
        <p className='text-[#666666] leading-[14.31px] font-[400] text-[11.31px] '>6x7.5m2</p>
        </div>
    </div>
    <div className='bg-[#FFF8F7] rounded-[5.87px] px-[10px] py-[11.74px] flex justify-between gap-[85px] '>
<div className='flex flex-col gap-3'>
<h1 className='leading-[15.85px] font-[500] text-[#111111] text-[13px] '>Rent Sale</h1>
<div className='flex items-center'><h1 className='font-[#111111] text-[14.09px] leading-[17.17px] '>N1,000,000</h1>/ <p className='text-[14.09px] text-[#666666] leading-[17.17px] '> month </p></div>
</div>
<div className='flex gap-[8.22px] py-[9.84] px-[9.39px] items-center rounded-[5.87px] bg-[#FF5733] '>
    <FaRegFileAlt className='text-[11px] text-[#FFFFFF] '/>
    <p className='font-[500] text-[14.09px] leading-[17.17px] text-[#FFFFFF] '>Apply Now</p>
</div>

    </div>
    </div>

    <div>

    </div>
</div>


</div>

<div className='flex flex-col justify-center items-center bg-white  gap-5 px-[30px] py-[20px] '>
    
    <form action="" onSubmit={signUpUser} className='flex flex-col w-full gap-2'>
        <div className='flex flex-col justify-center  text-center gap-2 mb-[20px] '>
            <h1 className='font-[700] text-[32px] leading-[39.97px] text-[#111111] '>Create Account</h1>
            <p className='font-[400] leading-[19.98px] text-[16px] text-[#333333] '>Have a login account</p>
        </div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="firstName" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Firstname</label>
    <input  name='firstName'
    value={formData.firstName}
                            onChange={handleChange}
                             type="text" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  '
                              />
</div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="LastName" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Lastname</label>
    <input name='lastName' value={formData.lastName}
                            onChange={handleChange} type="text" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="email" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Email</label>
    <input name='email' value={formData.email}
                            onChange={handleChange} type="text" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="password" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Password</label>
    <input name='password' value={formData.password}
                            onChange={handleChange} type="password" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="confirmPassword" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Confirm Password</label>
    <input name='confirmPaswword' value={formData.confirmPassword}
                            onChange={handleChange} type="password" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
<button  type='submit' className='bg-[#FF5733]  py-[12px] px-[10px] rounded-[10px] text-[#FFFFFF] font-[400] text-[16px] text-center '>Create an account</button>
<div className="flex items-center  justify-center gap-2">
                    <h1 className="font-[400] text-[#666666] leading-[19.98px]  text-[15px] ">
                        Already have an Account?
                    </h1>
                    <Link href='/signin' className=' text-[15px] w-fit text-btn-primary  py-[15px] font-[400] hover:bg-textTitle hover:text-light'>
                        Sign in
                    </Link>
                </div>
    </form>
</div>
    </div>
    </>
}

export default Signup2;
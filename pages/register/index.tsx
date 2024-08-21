import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import signImg from '../../public/images/login1.avif';
// Assuming you have an api utility for axios instance.
import { toast } from 'react-toastify';
import { api } from "@/components/lib/api";

export default function Register() {
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

        if (!validateForm()) {
            toast.error("Please fill in all fields correctly", {
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 5000,
                pauseOnHover: true,
            });
            return;
        }

        setLoading(true);
        try {
            const response = await api.post('/user/signup', formData, { withCredentials: true });

            console.log(response.data);

            router.push('/my-account');
            toast.success("Signup successful", {
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 5000,
                pauseOnHover: true,
            });
        } catch (error : any) {
            if (error instanceof Error) {
                    setError(error.message);
            } else {
                setError("An unexpected error occurred");
                }
                if (error.response.data.message === "user already exist with email") {
                        toast.error("user already exist. Please login", {
                                hideProgressBar: true,
                                closeOnClick: true,
                                autoClose: 1000,
                                pauseOnHover: true,
                            });      
                }
                console.log("The error", error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="flex flex-col gap-[50px] h-full by-primaryBg px-[50px] md:px-[50px] py-[50px]">
                <div className="flex flex-col max-w-[500px]">
                    <h1 className="text-textTitlte text-[20px] md:text-[30px] font-bold uppercase">
                        create a new account
                    </h1>
                </div>
                <form onSubmit={signUpUser} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className='border-[2px] flex items-center justify-between px-[20px] py-[20px]'>
                        <input
                            type="text"
                            name="firstName"
                            placeholder='First name'
                            className='text-btn2 w-full bg-transparent outline-0 text-[20px]'
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {formValid.firstName ? (
                            <FaCheckCircle className="text-green-500" />
                        ) : (
                            <RxCross2 className="text-red-500" />
                        )}
                    </div>
                    <div className='border-[2px] items-center flex justify-between px-[20px] py-[20px]'>
                        <input
                            type="text"
                            name="lastName"
                            placeholder='Last name'
                            className='text-btn2 w-full bg-transparent outline-0 text-[20px]'
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {formValid.lastName ? (
                            <FaCheckCircle className="text-green-500" />
                        ) : (
                            <RxCross2 className="text-red-500" />
                        )}
                    </div>
                    <div className='border-[2px] flex items-center md:col-span-2 justify-between px-[20px] py-[20px]'>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email address'
                            className='text-btn2 w-full bg-transparent outline-0 text-[20px]'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formValid.email ? (
                            <FaCheckCircle className="text-green-500" />
                        ) : (
                            <RxCross2 className="text-red-500" />
                        )}
                    </div>
                    <div className='border-[2px] items-center flex justify-between px-[20px] py-[20px]'>
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            className='text-btn2 w-full bg-transparent outline-0 text-[20px]'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {formValid.password ? (
                            <FaCheckCircle className="text-green-500" />
                        ) : (
                            <RxCross2 className="text-red-500" />
                        )}
                    </div>
                    <div className='border-[2px] items-center flex justify-between px-[20px] py-[20px]'>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='Confirm password'
                            className='text-btn2 w-full bg-transparent outline-0 text-[20px]'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {formValid.confirmPassword ? (
                            <FaCheckCircle className="text-green-500" />
                        ) : (
                            <RxCross2 className="text-red-500" />
                        )}
                    </div>
                    <button
                        type="submit"
                        className='text-light md:col-span-2 text-[12px] md:text-[20px] uppercase w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light'
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-textTitle text-[15px] md:text-[25px] uppercase">
                        already have an account?
                    </h1>
                    <Link href='/signin' className='text-light uppercase text-[12px] md:text-[20px] w-fit bg-btn-primary px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light'>
                        sign in
                    </Link>
                </div>
            </div>
            <Image src={signImg} className="w-full h-full hidden md:flex" alt="sign" />
        </div>
    );
}

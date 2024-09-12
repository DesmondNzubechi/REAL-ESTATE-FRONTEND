import emailIcon from '../../public/images/messageIcon.png';
import callIcon from '../../public/images/callIcon.png';
import locationIcon from '../../public/images/locationIcon.png';
import Image from 'next/image';
import { FaUserAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";


export const ContactUsComponent = () => {

    return <div className="bg-primaryBg w-full flex flex-col gap-[50px] py-[100px]  ">
        <div className='grid grid-cols-1 w-full md:grid-cols-2 gap-5 px-[30px]  lg:grid-cols-3'>
            <div className='border flex flex-col gap-5 w-full items-center justify-center py-[50px] px-[50px] '>
                <Image src={emailIcon} alt=''/>
                <h1 className='text-textTitle font-bold text-[20px] md:text-[25px] lg:text-[30px]'>Email Address</h1>
                <p className='text-textColor text-[12px] md:text-[15px]  '>ceo@homefeatures.com</p>
            </div>
            <div className='border flex flex-col gap-5 w-full items-center justify-center py-[50px] px-[50px] '>
                <Image src={callIcon} alt=''/>
                <h1 className='text-textTitle font-bold text-[20px] md:text-[25px] lg:text-[30px]'>Phone No</h1>
                <p className='text-textColor text-[12px] md:text-[15px]  '>+234708418000</p>
            </div>
            <div className='border flex flex-col gap-5  w-full items-center justify-center py-[50px] px-[50px] '>
                <Image src={locationIcon} alt=''/>
                <h1 className='text-textTitle font-bold text-[20px] md:text-[25px] lg:text-[30px]'>Location</h1>
                <p className='text-textColor text-[12px] md:text-[15px]  '>1A Denten Street, Off Ogui Road, Enugu.</p>
            </div>
        </div>

        <div>
            <div className='md:px-[70px] px-[30px] mb-[40px] relative z-1 '>
        <div className='shadow-xl px-[20px] border w-full py-[50px]  bg-primaryBg'>
            <form className='flex w-full flex-col gap-[20px] '>
                <h1 className='capitalize text-textTitle font-bold text-[20px] md:text-[25px]'>Send Us a message</h1>
                <div className='grid grid-cols gap-[20px] md:grid-cols-2 lg:grid-cols-3'>
                    <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="text" placeholder='Username' className='text-btn2 outline-0 w-full text-[15px] ' /> 
                        <FaUserAlt className='text-[15px] text-btn-primary'/>
                    </div>
                    <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>
                        <input type="email" placeholder='nzubechukwu@gmail.com' className='text-btn2 w-full outline-0 text-[15px] ' /> 
                        <MdEmail className='text-[15px] text-btn-primary'/>
                    </div>
                    <div className='border-[2px] flex justify-between px-[20px] py-[20px] '>

                        <input type="tel" placeholder='+2347084183...' className='text-btn2 w-full outline-0 text-[15px] ' /> 
                        <IoCall className='text-[15px] text-btn-primary'/>
                    </div>
                    <div className='border-[2px] md:col-span-3 flex justify-between px-[20px] w-full py-[20px] '>

<textarea  placeholder='Message here..' className='text-btn2 h-[200px] w-full outline-0 text-[15px] ' /> 
<FaPencil className='text-[20px] text-btn-primary'/>
                    </div>
                    <button className='text-light w-fit bg-btn-primary px-[30px] py-[15px] capitalize '>Send message</button>
                </div>
                </form>
                </div>
                </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.630659343489!2d7.493425073649227!3d6.441451324114151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d916d74623%3A0xbc5e0380e77941ad!2s1a%20Denton%20St%2C%20Ogui%2C%20Enugu%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1723050537379!5m2!1sen!2sng" width="full" className='w-full' height="700"   loading="lazy" ></iframe>
        </div>
    </div>
}
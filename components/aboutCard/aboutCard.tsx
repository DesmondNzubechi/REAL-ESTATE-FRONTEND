import Image from 'next/image'
import house1 from '../../public/images/house9.png'
import { FaHouseLaptop } from "react-icons/fa6";
import { FaHouseSignal } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { GiMissileMech } from "react-icons/gi";
import Link from 'next/link';

export const AboutCard = () => {

    return <div className="bg-primaryBg flex justify-center px-[30px] py-[100px] ">
        <div className='grid grid-cols-1 gap-[100px] lg:grid-cols-2'>
            <div className='p-[20px]  shadow-2xl rounded'>
<Image src={house1} alt='property' className='' />
            </div> 
            <div className='flex flex-col gap-[30px] max-w-[600px] '>
                <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full py-[10px] font-bold w-fit '>About Us</h2>
                <h1 className='font-bold text-[15px] md:text-[20px] lg:text-[30px] text-textTitle '>The Leading Real Estate Rental Marketplace.</h1>
                <p className='text-textColor font-medium text-[12px] md:text-[15px] '>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex gap-5 items-center'>
                        <FaHouseLaptop className='bg-titleBg text-btn-primary p-[10px] text-[40px] md:text-[50px] rounded-full'/>
                        <p className='text-textColor text-[12px] md:text-[15px] '>Smart Home Design</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <FaHouseLaptop className='bg-titleBg text-btn-primary p-[10px] text-[40px] md:text-[50px] rounded-full'/>
                        <p className='text-textColor text-[12px] md:text-[15px] '>Smart Home Design</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <FaHouseLaptop className='bg-titleBg text-btn-primary p-[10px] text-[40px] md:text-[50px] rounded-full'/>
                        <p className='text-textColor text-[12px] md:text-[15px] '>Smart Home Design</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <FaHouseLaptop className='bg-titleBg text-btn-primary p-[10px] text-[40px] md:text-[50px] rounded-full'/>
                        <p className='text-textColor text-[12px] md:text-[15px] '>Smart Home Design</p>
</div>
                </div>
                <div className=' border-l-[20px] border-btn-primary py-[50px]  p-[20px] bg-titleBg '>
                    <p className='text-textColor text-[12px] md:text-[15px]'>
                    Enimad minim veniam quis nostrud exercitation
llamco laboris. Lorem ipsum dolor sit amet


                    </p>
                </div>
                <Link href='/' className='text-light w-fit bg-btn-primary px-[30px] py-[15px] '>Our Services</Link>
            </div>
</div>
    </div>
}
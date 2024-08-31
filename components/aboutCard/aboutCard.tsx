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
                <p className='text-textColor font-medium text-[12px] md:text-[15px] '>With a presence in over 5 countries, our team of dedicated professionals is here to revolutionize your real estate experience. We offer a comprehensive range of services, from finding your next rental to managing your property investments. Our global reach and specialized expertise ensure that you receive the best solutions tailored to your needs.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex gap-5 items-center'>
                        <FaHouseLaptop className='bg-titleBg text-btn-primary p-[10px] text-[40px] md:text-[50px] rounded-full'/>
                        <p className='text-textColor text-[12px] md:text-[15px] '>Smart Home Integration</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <FaHouseLaptop className='bg-titleBg text-btn-primary p-[10px] text-[40px] md:text-[50px] rounded-full'/>
                        <p className='text-textColor text-[12px] md:text-[15px] '>Smart Home Upgrades</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <FaHouseLaptop className='bg-titleBg text-btn-primary p-[10px] text-[40px] md:text-[50px] rounded-full'/>
                        <p className='text-textColor text-[12px] md:text-[15px] '>Smart Home Consultations</p>
                    </div> 
                    <div className='flex gap-5 items-center'>
                        <FaHouseLaptop className='bg-titleBg text-btn-primary p-[10px] text-[40px] md:text-[50px] rounded-full'/>
                        <p className='text-textColor text-[12px] md:text-[15px] '>Smart Home Management</p>
</div>
                </div>
                <div className=' border-l-[20px] border-btn-primary py-[50px]  p-[20px] bg-titleBg '>
                    <p className='text-textColor text-[12px] md:text-[15px]'>
                    Stay in control of your home with our smart management services. We ensure that all your smart home devices work seamlessly together, offering ongoing support and updates as technology evolves. </p>
                </div>
                <Link href='/services' className='text-light w-fit bg-btn-primary px-[30px] py-[15px] '>Our Services</Link>
            </div>
</div>
    </div>
}
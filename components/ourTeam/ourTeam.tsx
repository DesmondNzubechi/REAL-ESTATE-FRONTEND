import nzubechi from '../../public/images/nzubechi.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export const OurTeam = () => {

    return <div className="py-[100px] px-[30px] flex flex-col gap-[50px] ">
        <div className='flex flex-col gap-5 justify-center items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full py-[10px] font-bold w-fit '>Team</h2>
            <h1 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] text-textTitle ">Meet Our Team</h1>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            <div className="border ">
                    <Image src={nzubechi} className="h-[350px] " alt="" />
                    
                <div className="flex flex-col items-center justify-center py-[20px] px-[30px]  gap-5 ">
                    <h1 className='font-bold text-[25px] text-textTitle'>Desmond Nzubechukwu</h1>
                    <h2 className='font-bold text-btn-primary text-[20px] uppercase'>founder & ceo</h2>
                    <div className="flex item-center gap-5">
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaXTwitter className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaLinkedinIn className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaFacebookF className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaInstagram className="text-[20px]" />
                            </Link>
                        </div>
                        </div>
            </div>
            <div className="border ">
                    <Image src={nzubechi} className="h-[350px] " alt="" />
                    
                <div className="flex flex-col items-center justify-center py-[20px] px-[30px]  gap-5 ">
                    <h1 className='font-bold text-[25px] text-textTitle'>Desmond Nzubechukwu</h1>
                    <h2 className='font-bold text-btn-primary text-[20px] uppercase'>founder & ceo</h2>
                    <div className="flex item-center gap-5">
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaXTwitter className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaLinkedinIn className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaFacebookF className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaInstagram className="text-[20px]" />
                            </Link>
                        </div>
                        </div>
            </div>
             <div className="border ">
                    <Image src={nzubechi} className="h-[350px] " alt="" />
                    
                <div className="flex flex-col items-center justify-center py-[20px] px-[30px]  gap-5 ">
                    <h1 className='font-bold text-[25px] text-textTitle'>Desmond Nzubechukwu</h1>
                    <h2 className='font-bold text-btn-primary text-[20px] uppercase'>founder & ceo</h2>
                    <div className="flex item-center gap-5">
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaXTwitter className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaLinkedinIn className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaFacebookF className="text-[20px]" />
                            </Link>
                            <Link className="bg-secondaryBg p-2 rounded" href=''>
                                <FaInstagram className="text-[20px]" />
                            </Link>
                        </div>
                        </div>
                        </div>
            </div>
</div>
}
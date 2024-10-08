import Image from "next/image"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import icon1 from '../../public/images/houseIcon1.png';
import icon2 from '../../public/images/houseIcon2.png';
import icon3 from '../../public/images/houseIcon3.png';
import { ourServiceType } from "../types/types";


export const OurServices = () => {

    const services: ourServiceType[] = [
        
        {
            image: icon1,
            title: "Buy a home",
            descrip: 'Discover your dream home among over 1 million+ properties available on our website. Whether you\'re looking for a cozy cottage or a modern apartment, we\'ll help you find the perfect place to call your own.',
            link : "/properties"
        },
        {
            image: icon2,
            title: "Sell a home",
            descrip: 'Looking to sell your property? With over 1 million+ potential buyers visiting our site, we can connect you with the right buyer and ensure you get the best value for your home.',
            link : "/properties"
        },
        {
            image: icon3,
            title: "Rent a Home",
            descrip: 'Find the perfect rental from our extensive collection of over 1 million+ homes. Whether you\'re seeking a temporary stay or a long-term lease, we have options that suit your lifestyle and budget.',
            link : "/properties"
        },
    ]

    return <>
        <div className="bg-transparent gap-[50px] py-[100px] px-[30px] flex flex-col items-center text-center">
              
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full  py-[10px] capitalize font-bold w-fit '>Our Services</h2>
            <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] text-textTitle ">We offer the following services</h1>
        </div>
            <div className="grid grid-cols-1 gap-[50px]  md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map((service: ourServiceType, index : number) => {
                        return  <div key={index} className="shadow-2xl border items-center bg-primaryBg py-[50px] flex px-[20px] flex-col gap-5">
                        <Image src={service.image} alt="" />
                        <h1 className="text-textTitle font-bold text-[15px] capitalize">{service.title}</h1>
                        <p className="text-textColor text-[12px] ">{service.descrip}</p>
                        <Link href={service.link} className="text-btn2 text-[15px] flex items-center">Learn More <FaArrowRightLong /></Link>
                    </div>
                    })
                }
            </div>
        </div>
    </>
}
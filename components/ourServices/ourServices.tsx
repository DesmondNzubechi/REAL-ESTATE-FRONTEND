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
            descrip: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
            link : "Learn more"
        },
        {
            image: icon2,
            title: "Buy a land",
            descrip: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
            link : "Learn more"
        },
        {
            image: icon3,
            title: "Buy a property",
            descrip: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
            link : "Learn more"
        },
    ]

    return <>
        <div className="bg-transparent gap-[50px] py-[100px] px-[30px] flex flex-col items-center text-center">
              
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full  py-[10px] capitalize font-bold w-fit '>Our Services</h2>
            <h1 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] text-textTitle ">We offer the following services</h1>
        </div>
            <div className="grid grid-cols-1 gap-[50px]  md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map((sevice: ourServiceType, index : number) => {
                        return  <div key={index} className="shadow-2xl border items-center bg-primaryBg py-[50px] flex px-[20px] flex-col gap-5">
                        <Image src={sevice.image} alt="" />
                        <h1 className="text-textTitle font-bold capitalize">Buy a home</h1>
                        <p className="text-textColor ">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                        <Link href='' className="text-btn2 flex items-center">Learn More <FaArrowRightLong /></Link>
                    </div>
                    })
                }
            </div>
        </div>
    </>
}
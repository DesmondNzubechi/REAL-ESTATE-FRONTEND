import Image from "next/image"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import icon1 from '../../public/images/houseIcon1.png';
import icon2 from '../../public/images/houseIcon2.png';
import icon3 from '../../public/images/houseIcon3.png';
import { ourServiceType } from "@/components/types/types";
import { PageBgOverview } from "@/components/pageOverview/pageOverview";
import { Footer } from "@/components/Footer/footer";
import { FeaturedProperty } from "@/components/featuredProperties/featuredProperties";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";




export default function Services() {
    

   
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
        {
            image: icon1,
            title: "Sell Land",
            descrip: 'Maximize the value of your land with our extensive network of buyers. With over 1 million+ users actively searching, we’ll help you find the right buyer quickly and efficiently.',
            link : "/land"
        },
        {
            image: icon2,
            title: "Buy land",
            descrip: 'Explore a wide selection of land options across various locations, tailored to fit your investment or personal needs. With over 1 million+ listings, finding the ideal plot is just a click away.',
            link : "/land"
        },
        {
            image: icon3,
            title: "Consultancy",
            descrip: 'Leverage our expertise to navigate the complexities of the real estate market. Whether you\'re buying, selling, or investing, our professional consultancy services are here to guide you every step of the way.',
            link : "/contact-us"
        },
    ]

    return <>
         <MobileNav/>
         <DesktopNav />
         <PageBgOverview HomeLink='Home' page="What we do" CurrentPage="Services" BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" />
        <div className="bg-transparent gap-[50px] py-[100px] px-[30px] flex flex-col items-center text-center">
              
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full  py-[10px] capitalize font-bold w-fit '>Our Core Services</h2>
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
        <FeaturedProperty />
        <Footer/>
    </>
}
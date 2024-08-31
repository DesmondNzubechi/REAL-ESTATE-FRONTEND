import Image from "next/image"
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import house1 from '../../public/images/house6.avif'

export const Feedbacks = () => {

    return <>
        <div className="bg-primaryBg py-[100px] px-[30px] ">
              
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[12px] md:text-[15px] px-[20px] rounded-full  py-[10px] capitalize font-bold w-fit '>Feedbacks</h2>
            <h1 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] text-textTitle ">Clients Feedback</h1>
        </div>
        <div className="grid grid-cols-1 text-center gap-[70px] md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col py-[50px] gap-[30px]  p-[20px] shadow-2xl items-center">
                    <div className="flex flex-col gap-2 items-center">
                    <div className="bg-btn-primary p-[20px] rounded-full"><FaUserAlt className="text-light text-[30px]" /></div>
                    <h1 className="md:text-[20px] text-[15px]  font-bold  text-textTitle">Ike Emmanuel</h1>
                    </div>
<p className="text-textColor text-[12px] md:text-[15px]  ">I was impressed by how smoothly the home-buying process went with this agency. Their personalized approach and attention to detail made finding my perfect home a breeze.</p>
                </div>
                <div className="flex flex-col gap-[30px] py-[50px]  p-[20px] shadow-2xl items-center">
                    <div className="flex flex-col gap-2 items-center">
                    <div className="bg-btn-primary p-[20px] rounded-full"><FaUserAlt className="text-light text-[30px]" /></div>
                    <h1 className="md:text-[20px] text-[15px]  font-bold  text-textTitle">John Smith</h1>
                    </div>
<p className="text-textColor text-[12px] md:text-[15px]  ">The team was incredibly helpful and responsive throughout the entire selling process. Their expertise and support made a big difference in getting my property sold quickly.</p>
                </div>
                <div className="flex flex-col gap-[30px] py-[50px] p-[20px] shadow-2xl items-center">
                    <div className="flex flex-col gap-2 items-center">
                    <div className="bg-btn-primary p-[20px] rounded-full"><FaUserAlt className="text-light text-[30px]" /></div>
                    <h1 className="md:text-[20px] text-[15px]  font-bold  text-textTitle">Chukwuebuka Henry</h1>
                    </div>
<p className="text-textColor text-[12px] md:text-[15px]  ">From start to finish, the experience was top-notch. The agency's market knowledge and commitment to client satisfaction helped me find a home that exceeded my expectations.</p>
          </div>
            </div>
            </div>
    </>
}
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
            <h2 className='bg-titleBg text-btn-primary text-[15px] px-[20px] rounded-full  py-[10px] capitalize font-bold w-fit '>Feedbacks</h2>
            <h1 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] text-textTitle ">Clients Feedback</h1>
        </div>
        <div className="grid grid-cols-1 text-center gap-[70px] md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col py-[50px] gap-[30px]  p-[20px] shadow-2xl items-center">
                    <div className="flex flex-col gap-2 items-center">
                    <div className="bg-btn-primary p-[20px] rounded-full"><FaUserAlt className="text-light text-[30px]" /></div>
                    <h1 className="text-[20px]  font-bold  text-textTitle">Desmon Nzubechukwu</h1>
                    </div>
<p className="text-textColor text-[15px]  ">When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.</p>
                </div>
                <div className="flex flex-col gap-[30px] py-[50px]  p-[20px] shadow-2xl items-center">
                    <div className="flex flex-col gap-2 items-center">
                    <div className="bg-btn-primary p-[20px] rounded-full"><FaUserAlt className="text-light text-[30px]" /></div>
                    <h1 className="text-[20px]  font-bold  text-textTitle">Desmon Nzubechukwu</h1>
                    </div>
<p className="text-textColor text-[15px]  ">When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.</p>
                </div>
                <div className="flex flex-col gap-[30px] py-[50px] p-[20px] shadow-2xl items-center">
                    <div className="flex flex-col gap-2 items-center">
                    <div className="bg-btn-primary p-[20px] rounded-full"><FaUserAlt className="text-light text-[30px]" /></div>
                    <h1 className="text-[20px]  font-bold  text-textTitle">Desmon Nzubechukwu</h1>
                    </div>
<p className="text-textColor text-[15px]  ">When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.</p>
          </div>
            </div>
            </div>
    </>
}
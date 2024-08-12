
import { MdOutlineArrowForwardIos } from "react-icons/md";
import React from "react";
import Link from "next/link";
import realEstate from '../../public/images/realEstate.jpg'
export const PageBgOverview = ({HomeLink, CurrentPage, BgImgLink, page} : {HomeLink: string, CurrentPage: string, BgImgLink: string, page :string}) => {
    return (
        <div
            className=" h-[30vh] md:h-[40vh] lg:h-[70vh] after:absolute md:px-[50px] pt-[100px] pb-[50px] items-center flex px-[30px] justify-center relative after:top-0 after:w-full after:left-0 after:bottom-0 after:bg-tpo"
            style={{
                background: `url(${realEstate.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                 backgroundPosition: "center",
                backgroundPositionY: "fixed"
            }}>
        <div className="relative flex flex-col items-center  gap-5 z-[10] pt-[0px]">
            <h1 className="capitalize font-bold text-white text-[30px] md:text-[50px]">{page}</h1>
                <div className="flex flex-row items-center text-slate-50 gap-2">
                    <Link href='/' className=" font-bold text-[20px] ">{HomeLink}</Link>
                    <span><MdOutlineArrowForwardIos  className="text-[20px] "/></span>
                    <Link href='' className=" font-bold text-[20px] ">{CurrentPage}</Link>
                </div>
        </div>
    </div>
    )
}



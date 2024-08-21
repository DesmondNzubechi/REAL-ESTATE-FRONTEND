import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import Image from "next/image";
import myPic from '../../../public/images/nzubechi.png'
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export default function MyOrderSkeleton() {
    return (
        <>
                    <div className="col-span-9 animate-skeleton-loading lg:col-span-2 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                    <h1 className="bg-titleBg w-[200px] h-[70px] px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold">
                           
                </h1>
                <div className="grid grid-cols-1  gap-5">
                    <div className="grid-cols-4 gap-3 grid items-start">
                        <div className="h-[70px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

</div>
                    </div>
                    <div className="grid-cols-4 gap-3 grid items-start">
                        <div className="h-[70px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

</div>
                    </div>
                    <div className="grid-cols-4 gap-3 grid items-start">
                        <div className="h-[70px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

</div>
                    </div>
                    <div className="grid-cols-4 gap-3 grid items-start">
                        <div className="h-[70px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

</div> 
                    </div>
                    <div className="grid-cols-4 gap-3 grid items-start">
                        <div className="h-[70px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

                        </div>
                        <div className="h-[40px] w-full bg-slate-50 rounded">

</div>
                        </div>
                        </div>
           
                    </div>
        </>
    );
}

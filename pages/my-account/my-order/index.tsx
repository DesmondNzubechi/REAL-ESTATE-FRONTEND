import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import Image from "next/image";
import myPic from '../../../public/images/nzubechi.png'
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export default function MyOrder() {
    return (
        <>
            <div className="bg-textTitle fixed w-full top-0 h-[100px] "></div>
            <MobileNav />
            <DesktopNav />
            <div className="px-[30px] py-[100px]">
                <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-3">
                    <MyAccountNav />
                    <div></div>
                    <div className="col-span-9 lg:col-span-2 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                    <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold ">My Order</h1>
                        <div className="overflow-x-auto">
                            <table className="w-fit overflow-x-auto  bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-700">
                                        <th className="py-2 px-4 text-[10px] md:text-[15px] text-left">Image</th>
                                        <th className="py-2 px-4 text-[10px] md:text-[15px] text-left">Name</th>
                                        <th className="py-2 px-4 text-[10px] md:text-[15px] text-left">Date</th>
                                        <th className="py-2 px-4 text-[10px] md:text-[15px] text-left">Status</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="w-full overflow-x-auto">
                                    <tr className="border-b">
                                        <td className="py-2 px-4">
                                            <Image src={myPic} className="md:w-[50px] md:h-[50px]" alt="Product Image" />
                                        </td>
                                        <td className="py-2 px-4 text-[5px] md:text-[13px] font-bold text-textTilte uppercase">
                                            The new land
                                        </td>
                                        <td className="py-2 text-[5px] md:text-[13px] px-4 text-textColor font-semibold">
                                            Aug, 10, 2024
                                        </td>
                                        <td className="py-2 w-ful px-4 self-center text-textColor font-semibold text-[5px] md:text-[13px] flex items-center">
                                            <GoDotFill className="text-btn-primary mr-1" /> Pending
                                            <div className="py-2 px-4 w-full items-center flex-col lg:flex-row flex gap-2">
                                            {/* <Link href='' className="bg-red-500 min-w-[80px]  text-light p-1 text-[13px] rounded font-semibold">
                                                Cancel Order
                                            </Link> */}
                                            <Link href='/my-account/my-order/:id' className="bg-green-500 text-light min-w-[40px] p-1 text-[5px] md:text-[13px] rounded font-semibold">
                                                View Order
                                            </Link>
                                        </div>
                                        </td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

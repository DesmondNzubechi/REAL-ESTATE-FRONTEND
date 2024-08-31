import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import Image from "next/image";
import myPic from '../../../public/images/nzubechi.png'
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/components/lib/api";
import { orderType, userType } from "@/components/types/types";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";
import MyOrderSkeleton from "@/components/skeletonloader/orderSkeletonLoader";
import { ReloadPage } from "@/components/Reload/Reload";

export default function MyOrder() { 

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false);
    const [myOrder, setMyOrder] = useState<orderType[]>([]);
    const { user, setUser } = useUserStore();
    console.log('the user id', user?._id)


     
    const getUser = async () => {
       // setLoading(true)
        try {
            const response = await api.get('/user/me', { 
                withCredentials: true, // Important to send cookies
            });
            const user = response.data.data.user;
            console.log("User fetched:", response.data.data.user);
            setUser(user) 
           // setLoading(false)
        } catch (error) {
            toast.error("An error occured. Try login again", {
                hideProgressBar: true,
                position: "top-center"
            })
            router.push('/signin')
            console.log("Error fetching user:", error);
        }
    };
    
        useEffect(() => {
            getUser();
    }, []);

    const getMyOrder = async () => {
        setLoading(true);
        try {
 
            const response = await api.get(`/order/getAllOrderByUser/${user?._id}`, { withCredentials: true });

            const orders = response.data.data.orders;

            setMyOrder(orders);
setSucceeded(true)
        } catch (error) {
            console.log(error);
            setSucceeded(false);
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        getMyOrder();
    }, [])

    return (
        <>
            <div className="bg-textTitle fixed w-full top-0 h-[100px] "></div>
            <MobileNav />
            <DesktopNav />
            <div className="px-[30px] py-[100px]"> 
                <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-3">
                    <MyAccountNav />
                    <div></div>
                    {loading && !succeeded && <MyOrderSkeleton />}
                   {!loading && !succeeded && <ReloadPage reload={getMyOrder}/>}
                    {!loading && succeeded && <div className="col-span-9 lg:col-span-2 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                    <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold ">My Order</h1>
                        <div className="overflow-x-auto">
                            {
                                myOrder.length === 0 && <h1 className="text-[20px] uppercase font-bold">You have not ordered for any property</h1>
                            }
                            {myOrder.length !== 0 && <table className="w-fit overflow-x-auto  bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-700">
                                        <th className="py-2 px-4 text-[10px] md:text-[15px] text-left">Image</th>
                                        <th className="py-2 px-4 text-[10px] md:text-[15px] text-left">Name</th>
                                        <th className="py-2 px-4 text-[10px] md:text-[15px] text-left">Date</th>
                                        <th className="py-2 px-4 text-[10px] md:text-[15px] text-left">Status</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="w-full overflow-x-auto">
                                    {
                                        myOrder.map((order: orderType) => {
                                            return  <tr className="border-b">
                                            <td className="py-2 px-4">
                                                <Image width={50} height={50} src={order.property.images[0]} className="md:w-[50px] w-[40px] md:h-[50px]" alt="Product Image" />
                                            </td>
                                            <td className="py-2 px-4 text-[5px] md:text-[13px] font-bold text-textTilte uppercase">
                                                {order.property.name}
                                            </td>
                                            <td className="py-2 text-[5px] md:text-[13px] px-4 text-textColor font-semibold">
                                                {order.orderDate.split('T').splice(0, 1)}
                                            </td>
                                            <td className="md:pt-5  pt-2 w-full md:gap-2 px-4  self-center justify-center  text-textColor font-semibold text-[5px] md:text-[13px] flex flex-col md:flex-row items-center">
                                               <span className="flex text-[7px] items-center md:text-[13px]"> <GoDotFill className="text-btn-primary mr-1" />  {order.status}</span>
                                                
                                                <Link href='/my-account/my-order/:id' className="bg-green-500 text-light min-w-[40px] p-1 text-[5px] md:text-[13px] self-center rounded font-semibold">
                                                    View Order
                                                </Link>
                                           
                                            </td>
                                        </tr>
                                        })
                                    }
                                    {/* <tr className="border-b">
                                        <td className="py-2 px-4">
                                            <Image src={myPic} className="md:w-[50px] w-[40px] md:h-[50px]" alt="Product Image" />
                                        </td>
                                        <td className="py-2 px-4 text-[5px] md:text-[13px] font-bold text-textTilte uppercase">
                                            The new land
                                        </td>
                                        <td className="py-2 text-[5px] md:text-[13px] px-4 text-textColor font-semibold">
                                            Aug, 10, 2024
                                        </td>
                                        <td className="md:pt-5  pt-2 w-full md:gap-2 px-4  self-center justify-center  text-textColor font-semibold text-[5px] md:text-[13px] flex flex-col md:flex-row items-center">
                                           <span className="flex text-[7px] items-center md:text-[13px]"> <GoDotFill className="text-btn-primary mr-1" />  Pending</span>
                                            
                                            <Link href='/my-account/my-order/:id' className="bg-green-500 text-light min-w-[40px] p-1 text-[5px] md:text-[13px] self-center rounded font-semibold">
                                                View Order
                                            </Link>
                                       
                                        </td>
                                    </tr> */}
                                
                                </tbody>
                            </table>} 
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
}

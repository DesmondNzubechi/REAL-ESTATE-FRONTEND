import { MyAccountNav } from "@/components/myAccountNav/myAccountNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/components/lib/api";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";
import MyActivitiesSkeleton from "@/components/skeletonloader/myActivitySkeleton";
import { activitiesType } from "@/components/types/types";
import { ReloadPage } from "@/components/Reload/Reload";

export default function MyActivities() {
    

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false);
    const [myActivities, setMyActivities] = useState<activitiesType[]>([]);
    const { user, setUser } = useUserStore();
    console.log('the user id', user?._id)

console.log("my activities", myActivities)
     
    const getUser = async () => {
       // setLoading(true)
        try {
            const response = await api.get('/user/me', { 
                withCredentials: true, // Important to send cookies
            });
            const user = response.data.data.user;
            console.log("User fetched:", response.data.data.user);
            setUser(user) 
            //setLoading(false)
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
 

    const getMyActivities = async () => {
        setLoading(true);
        try {
            const response = await api.get(`/activities/getUserActivities/${user?._id}`, { withCredentials: true });
            
            const activities = response.data.data.activities;

            console.log("This activity", activities)
            setMyActivities(activities);

            setSucceeded(true)
        } catch (error) {
            console.log(error, "error fetching activities");
            setSucceeded(false);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMyActivities();
    }, [])

    return <>
         <div className="bg-textTitle fixed w-full top-0 h-[100px] ">
        </div>
        <MobileNav/>
        <DesktopNav/>
    <div className="px-[30px] py-[100px] ">
       <div className="grid gap-[50px] grid-cols-10 lg:grid-cols-3">
            <MyAccountNav />
                <div></div>
                {loading && !succeeded && <MyActivitiesSkeleton />}
               {!loading && !succeeded && <div className="col-span-9 lg:col-span-2 flex flex-col pt-[70px] px-[20px] gap-5 h-fit py-[30px] "><ReloadPage reload={getMyActivities}/></div> }
          { !loading &&  succeeded && <div className="col-span-9 lg:col-span-2 flex flex-col pt-[70px] px-[20px] gap-5 h-fit py-[30px] ">
            <h1 className="bg-titleBg w-fit px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold ">My Order</h1>
                    <div className="grid grid-cols-1 mt-[30px] gap-5">
                        
                        {
                            myActivities?.map((activity: activitiesType) => {
                                return <Link
                                    href={
                                        activity.activityType.includes("order")?
                                            `/my-account/my-order` :
                                            activity.activityType.includes("comment") ?
                                                `/blog` :
                                                activity.activityType.includes("review") ?
                                                    `/properties/${activity.property._id}` :
                                                '/'}
                                    className="bg-secondaryBg shadow-2xl hover:bg-primaryBg px-[20px] py-[20px] flex flex-col lg:flex-row w-full md:w-fit  gap-2  rounded">
                            
                                <div className="flex justify-between gap-2 items-center">
                                <span className="flex items-center">
                                    <IoIosNotifications className="md:text-[20px] text-[15px] text-btn-primary"/>
                                    <h1 className="font-bold uppercase md:text-[20px] text-[15px] text-textTitle">{activity.activityType.replace("_", ' ')}</h1>
                                    </span>
                                    <p className="md:text-[10px] text-[8px] font-bold text-textColor">{activity.timestamp.split("T").splice(0, 1)}</p>
                                </div> 
                                    <p className="text-textColor text-[12px] md:text-[15px]">
                                        {activity.activityType.includes("order")?
                                            "You just place an order for a property" :
                                            activity.activityType.includes("comment") ?
                                                "You commented on a blog post" :
                                                activity.activityType.includes("review") ?
                                                    "You added a review to a property" :
                                                    "You performed activity"
                                        }
                                    </p>
                             
                        </Link>  
                            })
                        }
          </div>
        </div>}
    </div>
     
        </div>
        </>
}
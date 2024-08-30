import { propertyOverview, propertyType, reviewType } from "@/components/types/types"
import house1 from '../../public/images/house1.avif';
import house2 from '../../public/images/house2.avif';
import house3 from '../../public/images/house3.avif';
import house4 from '../../public/images/house4.avif';
import house5 from '../../public/images/house5.avif';
import house6 from '../../public/images/house6.avif';
import house7 from '../../public/images/house7.avif';
import house8 from '../../public/images/house8.avif';
import house9 from '../../public/images/house9.png';
import ImageSlider from "@/components/imageSlider/imageSlider";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { PageBgOverview } from "@/components/pageOverview/pageOverview";
import { MdReviews } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa"; 
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { api } from "@/components/lib/api";
import { PropertyDetailsSkeleton } from "@/components/skeletonloader/propertyFullSkeleton";
import { ReloadPage } from "@/components/Reload/Reload";
import { toast } from "react-toastify";
import { usePropertiesStore, useUserStore } from "@/components/store/store";

export default function PropertyDetails() {

    const router = useRouter();
    const { id } = router.query;
    const {user, isAuthenticated} = useUserStore()
    const [resolvedId, setResolveId] = useState<undefined | string | string[]>()
    const [fullProperty, setFullProperty] = useState<propertyType>({
        name: '',
    _id: '',
    location: '',
    map: '',
    price: 0,
    images: [],
    description: '',
    developmentStatus: '',
    amenities: '',
    interiorFeatures: '',
    extriorFeatures: '',
    reviews: [],
        date: '',
        status: '',
        yearBuilt: '',
        bedroom: '',
        bathroom: '',
        garadge: '',
        type : ''
    })
    const [propertyReviews, setPropertyReviews] = useState<reviewType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false)
    const [reviewerName, setReviewerName] = useState<string>('');
    const [theReview, setTheReview] = useState<string>("")
    const [submit, setSubmit] = useState<boolean>(false);
    const [ordering, setOrdering] = useState<boolean>(false);


    const fetchProperty = async () => {
        setLoading(true)

        try {
            const response = await api.get(`/properties/${id}`)

            const property = response.data.data.property;

            setFullProperty(property)
            setSucceeded(true)
            fetchPropertyReviews()
        } catch (error) {
            console.log(error);
            setSucceeded(false)
        } finally {
            setLoading(false)
        }
    }

    const fetchPropertyReviews = async () => {

        try {
            const response =  await api.get(`reviews/property/${id}/reviews`);

            const reviews = response.data.data.result;

            setPropertyReviews(reviews);

        } catch (error) {
           console.log("error fetching reviews", error) 
        } 
 
    }

    const addAReview = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!reviewerName || !theReview) {
            toast.error("Please fill in the required field") 
            return;
        }
        setSubmit(true)
        try {
            const response = await api.post('/reviews/addReview', {
                reviewerName : reviewerName,
                review: theReview,
                user: user ? user._id : null,
                property : fullProperty._id

            });
            const Thereview = response.data.data.theReview;
            setPropertyReviews((prevState) => [...prevState, Thereview])
            toast.success("added review successfully.")
            fetchPropertyReviews();
        } catch (error) {
            toast.error("An error occured. Please try again") 
            console.log(error)
        } finally {
            setSubmit(false)
        }

    }

    const createOrder = async () => {

        if (!isAuthenticated || !user) {
            toast.error("Please signin before ordering for this property");
            return;
        }

        if (!id) {
            toast.error("Try ordering again. Something went wrong");
            return;
        }
setOrdering(true)
        try {
          await api.post('/order/createOrder', {
                user: user?._id,
                property : id
            }, {withCredentials : true})
            toast.success("you have successfully ordered for this property");
            router.push('/my-account/my-order');
        } catch (error) {
                toast.error("Sorry you could not order for this property, Try ordering again.");
            console.log(error, "error here")
        } finally {
            setOrdering(false)
        }
    }

    useEffect(() => { 
       fetchProperty();
    }, [])

    useEffect(() => {
        fetchPropertyReviews()
    }, []) 
    
    return <>
        <div className="bg-textTitle h-[100px] ">
        </div>
        <MobileNav/>
        <DesktopNav />
     {!loading && !succeeded &&   <ReloadPage reload={fetchProperty}/>}
       {loading && !succeeded && <PropertyDetailsSkeleton/>}
       {!loading && succeeded && <div className="px-[30px]  py-[100px] grid grid-cols-1 ">
            <ImageSlider housing={fullProperty} />
            
            <div className="grid gap-[100px] grid-cols-1 pt-[50px] md:grid-cols-2">

                <div className="flex flex-col gap-[50px] ">
                <div className="flex gap-5 ">
                <span className="flex items-center gap-1"><p className="font-medium uppercase bg-btn-primary py-[10px] px-[20px] text-[12px] text-light">For Sale</p></span>
                    <span className="flex items-center gap-1"><MdReviews className="text-btn-primary text-[12px] " /> <p className="capitalize text-[12px] text-textColor">{propertyReviews?.length} Reviews</p></span>
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[12px]"/><p className=" capitalize text-[12px] text-textColor">{fullProperty?.date?.split('T')?.splice(0, 1)}</p></span>
                    </div>
                    <div className="self-start">
                        <p className="flex self-start items-center bg-whiteTp  capitalize font-semibold gap-3 rounded text-secondaryText "><FaLocationDot className="text-btn-primary"/>{fullProperty?.location}</p>
                    </div> 
                    <div className="flex flex-col gap-[30px]">
                        <h1 className="font-semibold px-[10px] border text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Property Description</h1>
                        <p className="text-textColor text-[15px] ">
                            {fullProperty?.description}
              </p>
                    </div>

                    <div className="flex flex-col gap-[30px] ">
                        <h1 className="font-semibold px-[10px] border uppercase text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Property Detail</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 bg-secondaryBg gap-5 rounded px-[20px] py-[30px] ">
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Rooms : </h1> <p className=" capitalize text-[12px] text-textColor">{fullProperty.bathroom}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Baths : </h1> <p className=" capitalize text-[12px] text-textColor">{fullProperty.bathroom}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Year built : </h1> <p className=" capitalize text-[12px] text-textColor">{fullProperty.yearBuilt}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]"> Garadge : </h1> <p className=" capitalize text-[12px] text-textColor">{fullProperty.garadge}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Price : </h1> <p className=" capitalize text-[12px] text-textColor">N {fullProperty.price}</p></span>
                            <span className="flex items-center gap-1"><h1 className="capitalize text-textTitle font-semibold text-[15px]">Status : </h1> <p className=" capitalize text-[12px] text-textColor">{fullProperty.status}</p></span>
                        </div>
                    </div>

               
                <div className="flex flex-col gap-5">
                <h1 className="font-semibold px-[10px] border text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Amenities</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {
                                fullProperty.amenities.split(",").map((amenity: string) => {
                                return   <span className="flex items-center gap-1"><FaCheckCircle className="text-btn-primary text-[12px] " /> <p className="font-medium capitalize text-[15px] text-textColor">{amenity}</p></span>
                                })
                            }
                   </div>
                    </div>
                    <div>
                        <button onClick={createOrder} disabled={ordering} className="bg-btn-primary text-slate-50 hover:bg-slate-900 text-[15px] font-medium p-[10px] ">{ordering? "Ordering Property" : "Order Property"}</button>
                    </div>
                    <div className="flex flex-col gap-5">
                    <h1 className="font-semibold px-[10px] border text-textTitle w-fit py-[5px] px-[10px] text-[25px] ">Map</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.630659343489!2d7.493425073649227!3d6.441451324114151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d916d74623%3A0xbc5e0380e77941ad!2s1a%20Denton%20St%2C%20Ogui%2C%20Enugu%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1723050537379!5m2!1sen!2sng" width="full" className='w-full'    loading="lazy" ></iframe>
                    </div>

                </div>

                <div className="flex flex-col w-full gap-[50px]">
            <div className="  flex flex-col gap-[50px] px-[20px] py-[30px] ">

                
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-textTsemibold px-[10px] border text-textTitle w-fit py-[5px] text-[25px] ">All The Review</h1>
                    
                            
                            <div className="flex flex-col gap-5">
                                {

                                }
                                  {!propertyReviews.length && <div>
                                        <h1>No Review!</h1>
                                        <p>Be the first person to add a review to this property</p>
                                </div>}
                                {
                                        propertyReviews.map(review => {
                                            return   <div className="flex flex-col border-b  p-[15px]  gap-5">
                                                <div className="flex flex-row items-start justify-between  gap-[5px]">
                                                    <div className="flex flex-col gap-1">
                                                    <FaUserAlt className="text-textTitle bg-secondaryBg p-2 rounded-full text-[50px]" /> 
                                                    <h1 className="font-bold capitalize">{review.reviewerName}</h1>
                                                    </div>
                                                   <div className="flex-row gap-5 flex justify-between items-center">
                                                    <h2><span className="flex items-center gap-2"><p className="font-semibold capitalize border px-5 py-2 rounded-full text-[10px] text-btn-primary">{review.createdAt.split("T").splice(0, 1)}</p></span></h2>
                                                    </div>
                                            </div>
                                                <p className="text-textColor text-[15px] ">{review.review}</p>
                                                </div>
                                        })
                                    }
                            
                            </div>
                            
 
                </div>

                <form onSubmit={addAReview} className="flex flex-col gap-5 py-2  w-full p-4 bg-secondaryBg">
                <h1 className="font-semibold px-[10px] text-textTitle w-fit py-[5px] px-[10px] text-[15px] ">Post A Review</h1>
                <div className=' flex justify-between bg-light px-[20px] py-[20px] '>

<input type="text" value={reviewerName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReviewerName(e.target.value)} placeholder='Your Name...' className='text-btn2 w-full  outline-0 text-[15px] ' /> 
<FaPencil className='text-[10px] text-btn-primary'/>
</div>
<div className=' md:col-span-3 flex justify-between bg-light px-[20px] py-[20px] '>

<textarea value={theReview} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTheReview(e.target.value)} placeholder='Write Your Review Here..' className='text-btn2  h-[200px] w-full outline-0 text-[15px] ' /> 
<FaPencil className='text-[10px] text-btn-primary'/>
</div>
<button disabled={submit} type="submit" className='text-light w-fit bg-btn-primary px-[30px] py-[15px] capitalize '>{submit? "Sending Review..." : "Send Review"}</button>
                </form>
                    </div>
                </div>
                
            </div>
    </div>}
    </>
}


export const ServerSideProps = async (context: any) => {

    const { params } = context;

    const response = await api.get(`/property/${params.id}`);
    return {
        props: {
            fullProperty : response.data.data.result
        }
    }

}
import Image from "next/image"
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import house1 from '../../public/images/house6.avif'
import house2 from '../../public/images/house7.avif'
import house3 from '../../public/images/house5.avif'
import { useEffect, useState } from "react";
import { blogType } from "../types/types";
import { api } from "../lib/api";
import { BlogSkeleton } from "../skeletonloader/blogSkeleton";
import { ReloadPage } from "../Reload/Reload";

export const BlogPost = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false)
    
    const [blog, setBlog] = useState<blogType[]>([]);
    console.log("the blogs", blog);

    const fetchBlog = async () => {
        setLoading(true);
        try {
          
            const response = await api.get('/blog/getAllBlogPost')

            const blogs = response.data.data.blogPost;

            console.log("the res", blogs) 
            setBlog(blogs)
            setSucceeded(true);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setSucceeded(false);
            setLoading(false)
        }
    } 

    useEffect(() => {
        fetchBlog();
    }, [])

    return <>
        <div className="bg-primaryBg py-[100px] px-[30px] ">
        
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-titleBg text-btn-primary text-[10px] px-[20px] rounded-full  py-[10px] capitalize font-bold w-fit '>blogs</h2>
            <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] text-textTitle ">Our Article</h1>
            </div>
           {!loading && !succeeded && <ReloadPage reload={fetchBlog}/>}
           {loading && !succeeded && <BlogSkeleton/>}
       {  !loading && succeeded &&   <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
                {
                    blog?.map((blog: blogType) => {
                        return  <Link href={`/blog/${blog._id}`} className="border ">
                        <Image width={500} height={500} src={blog?.images} className="md:h-[350px] " alt="" />
                        
                    <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                        <div className="flex flex-row gap-5 items-center">
                             <span className="flex items-center gap-1"><FaUserAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]" /> <p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">by admin</p></span>
                            <span className="flex items-center gap-1"><FaTags  className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/> <p className="font-medium uppercase text-[12px] md:text-[15px] text-textColor">{blog.status}</p></span>
    </div>
                    
                    <h1 className="font-bold text-textTitle text-[15px] md:text-[20px]  ">{blog.title}</h1>  
                    <hr />
                    <div className="flex justify-between ">
    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/><p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">{blog.date.split("T").splice(0, 1)}</p></span>
                        <Link href={`/blog/${blog._id}`} className="font-medium uppercase text-btn-primary text-[12px] md:text-[15px] hover:text-btn2">Read more</Link>
                            </div> 
                            </div> 
                    </Link>
                    })
                }
            {/* <div className="border ">
                    <Image src={house1} className="md:h-[350px] " alt="" />
                    
                <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                    <div className="flex flex-row gap-5 items-center">
                         <span className="flex items-center gap-1"><FaUserAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]" /> <p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">by admin</p></span>
                        <span className="flex items-center gap-1"><FaTags  className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/> <p className="font-medium uppercase text-[12px] md:text-[15px] text-textColor">business</p></span>
</div>
                
                <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1> 
                <hr />
                <div className="flex justify-between ">
<span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/><p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">August 10, 2024</p></span>
                    <Link href='' className="font-medium uppercase text-btn-primary text-[12px] md:text-[15px] hover:text-btn2">Read more</Link>
                        </div>
                        </div>
                </div>
                <div className="border ">
                    <Image src={house3} className="h-[350px] " alt="" />
                    
                <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                    <div className="flex flex-row gap-5 items-center">
                        <span className="flex items-center gap-1"><FaUserAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]" /> <p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">by admin</p></span>
                        <span className="flex items-center gap-1"><FaTags  className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/> <p className="font-medium uppercase text-textColor">business</p></span>
</div>
                
                <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1>
                <hr />
                <div className="flex justify-between ">
<span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/><p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">August 10, 2024</p></span>
                    <Link href='' className="font-medium uppercase text-btn-primary hover:text-btn2">Read more</Link>
                        </div>
                        </div>
                </div>
                <div className="border ">
                    <Image src={house2} className="h-[350px] " alt="" />
                    
                <div className="flex flex-col py-[20px] px-[30px]  gap-5 ">
                    <div className="flex flex-row gap-5 items-center">
                        <span className="flex items-center gap-1"><FaUserAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]" /> <p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">by admin</p></span>
                        <span className="flex items-center gap-1"><FaTags  className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/> <p className="font-medium uppercase text-textColor">business</p></span>
</div>
                
                <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px] ">The latest new is here</h1>
                <hr />
                <div className="flex justify-between ">
<span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[10px] md:text-[20px] lg:text-[25px]"/><p className="font-medium capitalize text-textColor text-[12px] md:text-[15px]">August 10, 2024</p></span>
                    <Link href='' className="font-medium uppercase text-btn-primary hover:text-btn2">Read more</Link>
                        </div>
                        </div>
            </div> */}
            </div>}
            </div>
    </>
}
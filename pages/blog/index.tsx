import { PageBgOverview } from "@/components/pageOverview/pageOverview"
import house1 from '../../public/images/house7.avif'
import house2 from '../../public/images/real estate news.jpg'
import house3 from '../../public/images/house5.avif'
import house4 from '../../public/images/house6.avif'
import Image from "next/image"
import Link from "next/link"
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { Footer } from "@/components/Footer/footer";
import { useEffect, useState } from "react"
import { blogType } from "@/components/types/types"
import { api } from "@/components/lib/api"
import { BlogSkeleton } from "@/components/skeletonloader/blogSkeleton"
import { ReloadPage } from "@/components/Reload/Reload"

export default function Blog() {
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
        <MobileNav />
        <DesktopNav/>
        <PageBgOverview HomeLink='Home' page="Blog" CurrentPage="Blog" BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" />
       {!loading && !succeeded && <ReloadPage reload={fetchBlog}/>}
       {loading && !succeeded && <BlogSkeleton/>}
        {!loading && succeeded &&
            (<div className="grid grid-cols-1 md:grid-cols-2  px-[30px] gap-[30px] py-[100px] ">
      
            {
                blog.map((article: blogType, index: number) => {
                    return <Link href={`/blog/${article._id}`} key={index} className="border relative hover:shadow-2xl group overflow-hidden">
                         <Image height={500} width={500}  src={article.images} 
           className="md:h-[350px] w-full transition-transform duration-500 group-hover:scale-105" 
           alt="" /> 
    <div className="flex flex-col py-[20px] px-[30px] gap-5">
        <div className="flex flex-row gap-5 items-center">
            <span className="flex items-center gap-1">
                <p className="font-medium uppercase bg-btn-primary text-light py-[10px] px-[20px]">{article.tag? article.tag : "real estate"}</p>
            </span>
        </div>
 
        <h1 className="font-bold text-textTitle text-[20px] md:text-[30px] lg:text-[35px]">{article.title}</h1>
        <div className="flex gap-5">
            <span className="flex items-center gap-1">
                <FaRegUser className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]" /> 
                <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">by admin</p>
            </span>
            <span className="flex items-center gap-1"> 
                <FaRegComments className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]" /> 
                <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">{article.comments.length}</p>
            </span>
            <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-btn-primary text-[10px] md:text-[15px] lg:text-[20px]"/>
                <p className="font-medium capitalize text-[10px] md:text-[15px] text-textColor">{article?.date.split("T").splice(0, 1)}</p>
            </span> 
        </div>
                            <p className="text-textColor text-[15px]">{article?.content.split(" ").splice(0, 15)}...</p>
        <div className="flex justify-between">
            <Link href='' className="font-medium uppercase hover:text-btn-primary text-btn2">Read more</Link>
        </div>
    </div>
                    </Link>
                })
            }
       
            </div>)
        }
        <Footer/>
    </>
}
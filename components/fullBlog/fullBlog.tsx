import { FaUserAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import house1 from '../../public/images/house5.avif' 
import Image from "next/image";
import { FaPencil } from "react-icons/fa6";
import { blogType, commentType } from "../types/types";
import { api } from "../lib/api";
import { SetStateAction, useState } from "react";
import { useUserStore } from "../store/store";
import { toast } from "react-toastify";


export const FullBlog = ({ fullBlogArticle, setFullBlogArticle }: { fullBlogArticle: blogType, setFullBlogArticle : React.Dispatch<SetStateAction<blogType>> }) => {

    const {user} = useUserStore()
    const [commentInput, setCommentInput] = useState({
    username: '',
    blog: fullBlogArticle._id,
    user: user && user._id ,
        comment: '',
        createdAt: 'Just now',
    _id : '' 
        })
const [loading, setLoading] = useState<boolean>(false)
    const addComment = async (e: any) => {
        
        e.preventDefault()

        if(!commentInput.username){
            toast.error("Please provide your name", {
                hideProgressBar: true,
                position: "top-center",
                autoClose : 5000
            })
            return;
        } 
        if(!commentInput.comment){
            toast.error("Please provide your comment", {
                hideProgressBar: true,
                position: "top-center",
                autoClose : 5000
            })
            return;
        }
        setLoading(true)
        try {

            const response = await api.post('/comments/createComment',
                {
                    username: commentInput.username,
                    blog: commentInput.blog,
                    user: commentInput.user,
                    comment : commentInput.comment
               }
            );

            const newComment = response.data.data.comment;

            setFullBlogArticle({ ...fullBlogArticle, comments: [newComment, ...fullBlogArticle.comments] });
            toast.success("Commented successfully.", {
                hideProgressBar: true,
                position: "top-center",
                autoClose : 5000
            })
            setLoading(false)
            setCommentInput({...commentInput, comment: '', username: ''})
 
        } catch (error) {
            console.log(error)
            toast.error("An error occured. Please try again", {
                hideProgressBar: true,
                position: "top-center",
                autoClose : 5000
            }) 
            setLoading(false);
        }
    }
    
    return <div className="grid px-[30px] py-[100px] gap-[100px] grid-cols-1 md:grid-cols-2">
        <div className="flex gap-5">

        <div className="flex flex-col gap-[30px] ">
                <p className="font-medium uppercase bg-btn-primary text-light w-fit py-[10px] px-[20px]">{fullBlogArticle.tag}</p>
            <h1 className="font-bold text-textTitle text-[25px] md:text-[30px] lg:text-[35px] ">{fullBlogArticle.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
                    <span className="flex items-center gap-1"><FaRegUser  className="text-btn-primary text-[15px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] md:text-[15px] text-textColor">by admin</p></span>
                    <span className="flex items-center gap-1"><FaRegComments className="text-btn-primary text-[15px] lg:text-[20px]" /> <p className="font-medium capitalize text-[12px] md:text-[15px] text-textColor">{fullBlogArticle.comments.length}Comments</p></span>
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-btn-primary text-[15px] lg:text-[20px]" /><p className="font-medium capitalize text-[12px] md:text-[15px] text-textColor">{fullBlogArticle.date.split("T").splice(0, 1)}</p></span>
                </div>
            <Image height={500} width={500} src={fullBlogArticle.images} className="h-[350px] w-full " alt="" />
            <hr />
            <div>
                    <p  className="text-textColor text-[15px] md:text-[20px] ">
                        {
                            fullBlogArticle.content
                        }
                </p>
            </div>
            </div>
        </div>
        
        <div className="w-full">
            <div className="  w-full flex flex-col gap-[50px] px-[20px] py-[30px] ">

                
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-textTitle px-[10px] border-l-[5px] shadow w-fit py-[10px] px-[20px] border-btn-primary text-[15px] md:text-[30px] ">All The Comment</h1>
                    <div className="flex flex-col gap-5">
                        {
                            fullBlogArticle.comments.map((comment: commentType) => {
                                return  <div className="flex flex-col border p-[15px]  gap-5">
                                <div className="flex flex-col gap-[5px]">
                                    <FaUserAlt className="text-light bg-btn-primary p-2 rounded-full text-[50px]" /> 
                                        <h1 className="font-bold text-[15px] ">{comment.username? comment.username : "A user"}</h1>
                                        <h2><span className="flex items-center gap-2"><p className="font-bold capitalize text-[10px] text-btn-primary">{comment.createdAt.split("T").splice(0, 1)}</p></span></h2>
                                </div>
                                    <p className="text-textColor text-[12px] ">{comment.comment}</p>
    </div>
                            })
                        }
                     
                    </div>
                </div>

                <form  onSubmit={addComment} className="flex flex-col gap-5 w-full p-4 bg-secondaryBg">
                <h1 className="font-bold px-[10px] border-l-[5px] border-btn-primary text-textTitle text-[15px] md:text-[30px] ">Post A Comment</h1>
                <div className=' flex w-full justify-between bg-light px-[20px] py-[20px] '>

<input  value={commentInput.username} type="text" onChange={(e) => setCommentInput({...commentInput, username : e.target.value})} placeholder='Your Name...' className='text-btn2 w-full  outline-0 text-[15px] ' /> 
<FaPencil className='text-[15px] text-btn-primary'/>
</div>
<div className=' w-full md:col-span-3 flex justify-between bg-light px-[20px] py-[20px] '>

<textarea  value={commentInput.comment} onChange={(e) => setCommentInput({...commentInput, comment : e.target.value})}  placeholder='Write Your Comment Here..' className='text-btn2  min-h-[200px] w-full outline-0 text-[15px] ' /> 
<FaPencil className='text-[15px] text-btn-primary'/>
</div>
<button type="submit" className='text-light w-fit bg-btn-primary px-[30px] py-[15px] capitalize '>{loading? "commenting..." : "Comment"}</button>
                </form>
            </div>
        </div>
    </div>
}
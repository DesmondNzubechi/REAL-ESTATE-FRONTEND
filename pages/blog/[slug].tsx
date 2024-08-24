import { GetStaticProps, GetStaticPaths } from 'next';
import { Footer } from "@/components/Footer/footer";
import { FullBlog } from "@/components/fullBlog/fullBlog";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { PageBgOverview } from "@/components/pageOverview/pageOverview";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { blogType } from '@/components/types/types';
import { api } from '@/components/lib/api';


export default function TheFullBlog() {

    const [fullBlogArticle, setFullBlogArticle] = useState<blogType>({
        title: "",
    slug: "",
    content: "",
    comments: [],
    status: "",
    images: "",
    _id: '',
    tag: "",
    date: '' 
    })

    const router = useRouter(); 

    const { slug } = router.query;

    console.log("slug", fullBlogArticle)

    const fetchFullBlogArticle = async () => {

        try {
            const response = await api.get(`/blog/getABlogPost/${slug}`);

            const fullArticle = response.data.data.blogPost;

            setFullBlogArticle(fullArticle);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchFullBlogArticle()
    }, [])
  return (
    <>
      <MobileNav />
      <DesktopNav />
      <PageBgOverview 
        HomeLink='Home' 
        page="Full Blog Post" 
        CurrentPage="Blog" 
        BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" 
      />
      <FullBlog setFullBlogArticle={setFullBlogArticle} fullBlogArticle={fullBlogArticle}/>
      <Footer />
    </>
  );
}

import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { HeroSection } from "@/components/heroSection/heroSection";
import { Overview } from "@/components/overview/Overview";
import { OurServices } from "@/components/ourServices/ourServices";
import { FeaturedProperty } from "@/components/featuredProperties/featuredProperties";
import { BlogPost } from "@/components/blogPost/blogPost";
import { Feedbacks } from "@/components/feedbacks/feedback";
import { Footer } from "@/components/Footer/footer";
import { AboutCard } from "@/components/aboutCard/aboutCard";
import { OurTeam } from "@/components/ourTeam/ourTeam";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { FullBlog } from "@/components/fullBlog/fullBlog";

const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  style: ['normal', 'italic'],
});

export default function Home() {
  

  return (
    <>
      <MobileNav />
      <DesktopNav/>
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${poppins.className}`}
    >
        <HeroSection />
        <Overview />
        <OurServices />
        <FeaturedProperty />
        <BlogPost />
        <Feedbacks />
        <OurTeam />
        <Footer/>
      </main>
      </>
  );
}

import { AboutCard } from "@/components/aboutCard/aboutCard"
import { ContactUsComponent } from "@/components/contactUs/contactUs"
import { Feedbacks } from "@/components/feedbacks/feedback"
import { Footer } from "@/components/Footer/footer"
import { DesktopNav } from "@/components/Navbar/desktopNav"
import { MobileNav } from "@/components/Navbar/mobileNav"
import { OurServices } from "@/components/ourServices/ourServices"
import { OurTeam } from "@/components/ourTeam/ourTeam"
import { PageBgOverview } from "@/components/pageOverview/pageOverview"


export default function AboutUs() {

    return <>
        <MobileNav/>
        <DesktopNav/>
        <PageBgOverview HomeLink='Home' page="About Us" CurrentPage="About" BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" />
        <AboutCard />
        <div className="bg-secondaryBg">
        <OurServices/>
        </div>
        <OurTeam />
        <Feedbacks/>
        <Footer/>
    </>
}
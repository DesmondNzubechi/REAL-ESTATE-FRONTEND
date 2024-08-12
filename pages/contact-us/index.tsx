import { ContactUsComponent } from "@/components/contactUs/contactUs"
import { Footer } from "@/components/Footer/footer"
import { DesktopNav } from "@/components/Navbar/desktopNav"
import { MobileNav } from "@/components/Navbar/mobileNav"
import { PageBgOverview } from "@/components/pageOverview/pageOverview"


export default function ContactUs() {

    return <>
        <MobileNav/>
        <DesktopNav/>
        <PageBgOverview HomeLink='Home' page="Contact Us" CurrentPage="Contact" BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" />
        <ContactUsComponent />
        <Footer/>
    </>
}
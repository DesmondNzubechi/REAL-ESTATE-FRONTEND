import { Footer } from "@/components/Footer/footer";
import { LandComponent } from "@/components/landComponent/landComponent";
import { api } from "@/components/lib/api";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { PageBgOverview } from "@/components/pageOverview/pageOverview";
import { LandSkeleton } from "@/components/skeletonloader/landSkeleton";
import { useLandStore } from "@/components/store/store";
import { useEffect, useState } from "react";
import { ReloadPage } from "@/components/Reload/Reload";

export default function Land() {

  const { land, setLand } = useLandStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [succeeded, setSucceeded] = useState<boolean>(false)
  
  console.log("The land is here", land)

  const fetchLand = async () => {
    setLoading(true);
    try {
      const response = await api.get('/land/fetchAllLand');

      const lands = response.data.data.allLand;
      setLand(lands)
      setLoading(false)
      setSucceeded(true)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setSucceeded(false)
    }
  }

  useEffect(() => {
    fetchLand();
  }, [])
     
    return <>
      <MobileNav />
        <DesktopNav />
      <PageBgOverview HomeLink='Home' page="Land Listing" CurrentPage="Land" BgImgLink="https://img.freepik.com/free-photo/elevated-view-headphone-paper-keyboard-blue-background_23-2147889936.jpg?t=st=1717449452~exp=1717453052~hmac=3ccf1d5383cc9a67a5f965c1eeaf10ff0fc6ab6c41542d80877f4eb76e41bd4f&w=740" />
    { !loading && !succeeded && <ReloadPage reload={fetchLand} />}
    { loading && !succeeded && <LandSkeleton/>}
    {  !loading && succeeded && <LandComponent allTheLand={land}/>}
        <Footer />
    </>
}
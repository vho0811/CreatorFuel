import { urlFor } from "@/sanity/lib/image";
import {getSiteSettings} from "@/sanity/lib/siteSettings/getSiteSettings";
import Image from "next/image";

async function HeroBanner() {
    const siteSettings = await getSiteSettings();
  return (
    <div className="relative w-full h-[40vh] xl:h-[60vh]">
        {siteSettings?.mainHeroImage &&(
            <> 
            <Image
                src={urlFor(siteSettings.mainHeroImage).url()}
                alt= "Hero Banner"
                fill
                className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 pointer-events-none"/>
            </>
        )}


    </div>
  )
}

export default HeroBanner
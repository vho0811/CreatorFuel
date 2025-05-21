import { SignInButton } from "@clerk/nextjs";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";
import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings";


 async function Header(){
    const siteSettings = await getSiteSettings();
    console.log(siteSettings);
    // const user = await currentUser();
    return (
        // Left Side
        <header className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link href="/">
            <h2>{siteSettings?.siteTitle}</h2>
            </Link>
            {/* Right Side */}
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <Button className = " px-4 py-2 bg-red-500 text-white rounded-lg" asChild variant='outline'>
                    <div>
                    <SignInButton  mode = 'modal' />
                    <HeartIcon className = "w-4 h-4" />
                    </div>
                    
                    </Button>
                </SignedOut>
            </div>
        </header>   
    )
}
export default Header;
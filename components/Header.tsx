import { SignInButton } from "@clerk/nextjs";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";


 function Header(){
    // const user = await currentUser();
    return (
        // Left Side
        <header>
            <Link href="/">
            <h2>Creator Site</h2>
            </Link>
            {/* Right Side */}
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <SignInButton mode = 'modal' />
                </SignedOut>
            </div>
        </header>   
    )
}
export default Header;
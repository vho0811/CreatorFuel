import HeroBanner from "@/components/HeroBanner";
import InformationPanel from "@/components/InformationPanel";
import PostsList from "@/components/PostsList";
import { getPosts } from "@/sanity/lib/post/getPosts";
import Image from "next/image";

export default async function Home({searchParams,}:{searchParams: Promise<{tier:string}>}) {
  const {tier} = await searchParams;
  const posts = await getPosts(tier);
  return (
    <div className="">
      {/* HeroBanner */}
      <HeroBanner />
      {/* Information Panel */}
      <div className = "-mt-20 object-cover rounded-full">
      <InformationPanel />
      </div>

      <hr/>

      {/* Posts */}
      <PostsList posts={posts} />
    </div>
  );
}
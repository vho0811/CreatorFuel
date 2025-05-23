import { GetPostsQueryResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Lock, MessageCircleIcon } from 'lucide-react'
import TierBadge from './Badge/TierBadge'
import CreatedAt from './CreatedAt'

function LockedPost({post}: {post: GetPostsQueryResult[number]}) {
  return (
    <Link href="/pricing">
        <article className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        {post.coverImage?.asset && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                    <Lock className="w-12 h-12 text-white" />
                </div>
                <Image
                    src={urlFor(post.coverImage).url()}
                    alt={post.coverImage.alt || post.title || "Post cover image"}
                    fill
                    className="object-contain blur-sm"
                />
            </div>
        )}
        {post.tierAccess && (
            <div className="absolute top-4 right-4 z-20">
                <TierBadge tierAccess={post.tierAccess}/>
            </div>
        )}
        <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
            </h2>
            <div className="relative">
                {/* Lock pattern background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-6 gap-4">
                        {Array(18).
                        fill(0)
                        .map((_,i) => (
                            <Lock key={i} className="w-4 h-4 text-gray-400"/>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />

                <div className="blur-[6px] text-gray-600 prose opacity-75 relative z-20">
                    {post.body && (
                        <div className="h-fit overflow-hidden">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Nice try hacking the site but you ar enot getting in :D. Loren
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Nice try hacking the site but you ar enot getting in :D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-30">
                    <div className="bg-purple-600 text-white px-6 py-2 rounded-full
                    font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center
                    space-x-2 shadow-lg gap-2">
                        <Lock className="w-4 h-4" />
                        Unlock Premium Content
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500 text-right border border-gray-200 rounded-full
                px-4 py-1 flex items-center gap-2">
                    <MessageCircleIcon className="w-4 h-4" />
                    {post.comments?.length} comments
                </div>
                <div className="text-sm text-gray-500 text-right">
                    <CreatedAt date={post._createdAt} />
                </div>
            </div>
        </div>
        </article>
    </Link> 
  )
}

export default LockedPost
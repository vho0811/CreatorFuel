import {defineField, defineType} from "sanity";
import {FileTextIcon} from "lucide-react";

export default defineType({
    name: "post",
    title: "Post",
    type: "document",
    icon: FileTextIcon,
    description: "Content posts that can be restricted by tier access level",
    preview: {
        select: {
            title: "title",
            tierAccess: "tierAccess",
            media: "coverImage",
        },
        prepare({title, tierAccess, media}){
            return {
                title,
                subtitle: `Access: ${tierAccess}` || "None",
                media,
            };
        },
    },
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The main title of your post",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "array",
            description: "The main content of your post with rich text formatting options",
            of: [{type: "block"}],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tierAccess",
            title: "Tier Access",
            type: "string",
            description: "The tier access level for your post",
            options: {
                list: [
                    {title : "Backstage Pass", value: "backstage"},
                    {title : "Crew Member", value: "crew"},
                    {title : "VIP Access", value: "vip"},
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            description: "The main image of your post",
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    description: "The alt text for the image",
                })
            ]
        }),
        
    ]
})
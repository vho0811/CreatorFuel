import {defineField, defineType} from "sanity";
import {MailPlus} from "lucide-react";

export default defineType({
    name: "message",
    title: "VIP Messages",
    type: "document",
    icon: MailPlus,
    description: "Messages sent by VIP users to the creator",
    preview: {
        select: {
            message: "messageBody",
            sender: "senderName",
            date: "_createdAt",
        },
        prepare({message, sender, date}){
            return {
                title: message,
                subtitle: `From ${sender || "Unknown"} - ${date ? new Date(date).
                    toLocaleDateString() : "Unknown Date"}`,
                };
            },
        },
        fields: [
            defineField({
                name: "senderName",
                title: "Sender Name",
                type: "string",
                description: "The name of the VIP user sending the message",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "senderEmail",
                title: "Sender Email",
                type: "string",
                description: "The email of the VIP user",
            }),
            defineField({
                name: "messageBody",
                title: "Message Body",
                type: "text",
                description: "The content of the message",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "isRead",
                title: "Read Status",
                type: "boolean",
                description: "Whether the message has been read",
            }),
        ]
    }
)
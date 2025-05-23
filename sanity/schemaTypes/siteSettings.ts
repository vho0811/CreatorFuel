import { defineType, defineField, defineArrayMember } from 'sanity'
import {SettingsIcon} from 'lucide-react'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    description: "Global settings and configuration for your creator page",
    icon: SettingsIcon,
    preview:{
        select:{
            title: "siteTitle"
        },
        prepare({title}){
            return {
                title,
                media: SettingsIcon,
            }
        },
    },
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            description: 'The main title of your website',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A brief description of your website',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'headerLogo',
            title: 'Header Logo',
            type: 'image',
            description: 'Logo displayed in the header',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'mainHeroImage',
            title: 'Main Hero Image',
            type: 'image',
            description: 'The main hero image for your homepage',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'logo',
            title: 'Main Logo',
            type: 'image',
            description: 'The main logo of your brand',
            options: {
                hotspot: true
            },
            fields: [
                {
                name: "alt",
                type: "string",
                title: "Alt Text",
                description: "Alternative text for accessibility and SEO",
            },],
        
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'socials',
            title: 'Social Media Links',
            type: 'array',
            description: 'Add your social media profiles',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'socialLink',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            validation: Rule => Rule.required(),
                            options: {
                                list: [
                                    { title: 'Twitter', value: 'twitter' },
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'LinkedIn', value: 'linkedin' },
                                    { title: 'YouTube', value: 'youtube' },
                                    { title: 'Pinterest', value: 'pinterest'},
                                    { title: 'Discord', value: 'discord'}
                                ]
                            }
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: Rule => Rule.required()
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: 'callToActionText',
            title: 'Call to Action Text',
            type: 'string',
            
        }),
        
    ],
    
})
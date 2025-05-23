import {Link} from "lucide-react";
import {
    SiInstagram,
    SiTiktok,
    SiYoutube,
    SiFacebook,
    SiGithub,
    SiDiscord,
    SiTelegram,
} from "@icons-pack/react-simple-icons";

const socialToIcon = {
    instagram: SiInstagram,
    tiktok: SiTiktok,
    youtube: SiYoutube,
    facebook: SiFacebook,
    github: SiGithub,
} as const;

export type SocialPlatform = keyof typeof socialToIcon;

export const getSocialIcon = (platform: SocialPlatform) => {
    return socialToIcon[platform] || Link;
}

export default socialToIcon;
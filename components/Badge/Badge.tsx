import {  membershipMap, TierAccess, tierMap } from "@/types/types";
import { getBadgeIcon, getBadgeColor } from "./lib/utils";
import Link from "next/link";

interface BadgeProps{
    variant?: "interactive" | "simple";
    tier: TierAccess;
    link?: string;
    className?: string;
}
function Badge({variant = "simple", tier, link, className}: BadgeProps) {
    const baseStyles = "px-3 py-1 rounded-full text-sm font-medium";
    const level = tierMap[tier];
    const label = membershipMap[level];
    const badgeColor = getBadgeColor(level);
    if (variant === "interactive"){
        return (
            <Link href={link || ""} className={
              `flex items-center gap-2 ${baseStyles}
               ${badgeColor} 
               shadow-sm transition-all duration-200
               hover:shadow-md hover:scale-105
               ${className}`
            }
            >
              {getBadgeIcon(level)}
              <p>{label}</p>
            </Link>
        )
      }
            
    return (
    <p className = {`
      ${baseStyles}
      ${badgeColor}
      ${className}
    `}>
      {label}
    </p>
    )
}

export default Badge
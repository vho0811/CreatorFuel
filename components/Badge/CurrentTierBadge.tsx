'use client'

import  useMembershipTier  from "@/hooks/useMembershipTier";
import { getTierFromLevel } from "@/types/types";
import { useUser } from "@clerk/nextjs";
import Badge from "./Badge";
function CurrentTierBadge() {
    const {user} = useUser();
    const membershipTier = useMembershipTier();
    if (!user || !membershipTier) return null;
    const tierAccess = getTierFromLevel(membershipTier);
  return (
    <Badge variant = "interactive" tier = {tierAccess} link="/pricing" />
  )
}

export default CurrentTierBadge
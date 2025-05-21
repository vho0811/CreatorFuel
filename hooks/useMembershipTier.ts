'use client'
import {useSchematicFlag} from "@schematichq/schematic-react"
import { MembershipLevel } from "@/types/types"
import {useRouter} from "next/navigation"
function useMembershipTier() : MembershipLevel | null {
    const router = useRouter();

    const hasBackstageContent = useSchematicFlag("backstage-content");
    const hasCrewContent = useSchematicFlag("crew-member-content");
    const hasVipContent = useSchematicFlag("vip-access-content");
  
}

export default useMembershipTier
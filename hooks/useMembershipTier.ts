'use client'
import {useSchematicFlag} from "@schematichq/schematic-react"
import { MembershipLevel } from "@/types/types"
import {useRouter} from "next/navigation"
import { useEffect } from "react";

interface PlanChangedDetail {
    planId?: string;
    tier?: string;
    status?: string;
}
interface PlanChangedEvent extends CustomEvent{
    detail: PlanChangedDetail;
}
function useMembershipTier() : MembershipLevel | null {
    const router = useRouter();

    const hasBackstageContent = useSchematicFlag("backstage-content");
    const hasCrewContent = useSchematicFlag("crew-member-content");
    const hasVipContent = useSchematicFlag("vip-access-content");

    useEffect(()=>{
        const handlePlanChanged = (event: PlanChangedEvent) => {
            console.log("Plan changed:", event.detail);
            router.refresh();
        }
    }, [router])

    // Return membership level after all hooks are called
    if (hasVipContent) return 3;
    if (hasCrewContent) return 2;
    if (hasBackstageContent) return 1;
    return null;
}

export default useMembershipTier
'use client'
import { useUser } from "@clerk/nextjs";
import { SchematicProvider, useSchematicEvents } from "@schematichq/schematic-react";
import { useEffect } from "react";
const publishableKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
if(!publishableKey){
    throw new Error("NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY is not set");
}

const SchematicWrapper = ({children} : {children: React.ReactNode}) => {
    const {identify} = useSchematicEvents();
    const {user} = useUser();
    useEffect(() => {
        const userName =
        user?.username ??
        user?.fullName ??
        user?.emailAddresses[0]?.emailAddress ??
        user?.id;

        if (user?.id){
            identify({
                //Company Level keys
                company: {
                    keys: {
                        id: user.id,

                    },
                    name: userName,
                },

                //User Level keys
                keys: {
                    id: user.id,
                },
                name: userName,
            })
        }

    }, [identify, user])
    return children
}
function Provider({children} : {children: React.ReactNode}) {

  return (
    <SchematicProvider publishableKey={publishableKey!}>
        <SchematicWrapper>{children}</SchematicWrapper>
    </SchematicProvider>
  )
}

export default Provider
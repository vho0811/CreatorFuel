'use server'

import { currentUser } from "@clerk/nextjs/server";
import {SchematicClient} from "@schematichq/schematic-typescript-node"
const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({apiKey});
async function getTemporaryAccessToken() {
  const user = await currentUser();
  if (!user) {
    console.log("No user found, returning null");
    return null;
  }
  const response = await client.accesstokens.issueTemporaryAccessToken({
    resourceType: "company",
    lookup: {id: user.id},
  });
  console.log(
    "Token response received:",
    response.data ? "Token received" : "No token in response"
  )
  return response.data?.token;
}

export default getTemporaryAccessToken
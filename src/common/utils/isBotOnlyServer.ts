import { isbot } from "isbot";
import { headers } from "next/headers";

export async function isBotOnlyServer() {
  const userAgent = (await headers()).get("user-agent");
  return isbot(userAgent);
}

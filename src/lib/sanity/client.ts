import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN;

export function hasSanityConfig(): boolean {
  return Boolean(projectId && dataset);
}

export function createSanityReadClient(): SanityClient | null {
  if (!projectId) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
    perspective: "published",
  });
}

export function createSanityWriteClient(): SanityClient {
  if (!projectId || !dataset || !token) {
    throw new Error(
      "Missing Sanity env vars. Required: (NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID), (NEXT_PUBLIC_SANITY_DATASET or SANITY_DATASET), (SANITY_API_TOKEN or SANITY_WRITE_TOKEN)",
    );
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
    perspective: "published",
  });
}

export const sanityClient = createSanityReadClient();

import { SiteConfigTypes } from "types/config";

export const siteConfig: SiteConfigTypes = {
  siteMeta: {
    title: "SE27",
    description: "SE27Description",
  },
  baseUrl:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_URL ?? ""
      : "http://localhost:3000",
  apiKey: process.env.MICROCMS_API_KEY as string,
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  defaultLimit: "2",
  defaultMaxLimit: "50",
  defaultMinLimit: "4",
};

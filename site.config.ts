export const siteConfig = {
  siteMeta: {
    title: "SE27",
    description: "SE27Description",
  },
  baseUrl:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_URL ?? ""
      : "http://localhost:3000",
  apiKey: process.env.MICROCMS_API_KEY,
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  defaultLimit: process.env.NEXT_PUBLIC_DEFAULT_LIMIT,
  defaultMaxLimit: 50,
  defaultMinLimit: 4,
};

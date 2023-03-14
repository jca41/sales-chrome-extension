import type { Proposition } from "../constants";

export type Bookmarks = Record<
  Proposition,
  {
    title: string;
    hostname: string;
    hasTerritory: boolean;
    bookmarks: {
      heading: string;
      entries: { title: string; path?: string; url?: string }[];
    }[];
  }
>;

export const BOOKMARKS = {
  NBCUOTT: {
    title: "NBCU",
    hostname: "peacocktv.com",
    hasTerritory: false,
    bookmarks: [
      {
        heading: "Checkout",
        entries: [
          {
            title: "Monthly Product",
            path: "/checkout?product[]=D2C_SUBSCRIPTION_MONTH",
          },
          {
            title: "Annual Product",
            path: "/checkout?product[]=D2C_SUBSCRIPTION_ANNUAL",
          },
          {
            title: "Up Front Pass",
            path: "/checkout?product[]=D2C_UPFRONT_PASS:P3M",
          },
          {
            title: "Free Trial",
            path: "/checkout?product[]=FT_D2C",
          },
          {
            title: "Monthly Product with Voucher",
            path: "/checkout?product[]=D2C_SUBSCRIPTION_MONTH&voucher[]=3MFREED2C",
          },
          {
            title: "Free Sign Up",
            path: "/freesignup",
          },
        ],
      },
      {
        heading: "Link Account",
        entries: [
          {
            title: "Comcast",
            path: "/mvpd/link/comcast",
          },
          {
            title: "Cox",
            path: "/mvpd/link/cox",
          },
          {
            title: "Charter",
            path: "/provider/link/charter",
          },
        ],
      },
      {
        heading: "Partner Gateway",
        entries: [
          {
            title: "Kubo Premium",
            url: "https://maia.fortumo.com/bapi/sky/signed_redirect_us.php?offer_code=kubo-premium&product=KUBO_PREMIUM",
          },
          {
            title: "Kubo Premium Trial",
            url: "https://maia.fortumo.com/bapi/sky/signed_redirect_us.php?offer_code=kubo-premium&product=KUBO_PREMIUM_TRIAL",
          },
          {
            title: "Kubo Premium Plus",
            url: "https://maia.fortumo.com/bapi/sky/signed_redirect_us.php?offer_code=kubo-premium-plus&product=KUBO_PREMIUM_PLUS",
          },
          {
            title: "Kubo Premium Plus Trial",
            url: "https://maia.fortumo.com/bapi/sky/signed_redirect_us.php?offer_code=kubo-premium-plus-trial&product=KUBO_PREMIUM_PLUS_TRIAL",
          },
        ],
      },
    ],
  },
  SKYSHOWTIME: {
    title: "Sky Showtime",
    hostname: "skyshowtime.com",
    hasTerritory: true,
    bookmarks: [
      {
        heading: "Checkout",
        entries: [
          {
            title: "Monthly Product",
            path: "/checkout?product[]=MONTH_SUBSCRIPTION",
          },
          {
            title: "Annual Product",
            path: "/checkout?product[]=ANNUAL_SUBSCRIPTION",
          },
        ],
      },
    ],
  },
} satisfies Bookmarks;

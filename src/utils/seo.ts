import { NextSeoProps } from "next-seo";

export const title = "ToastyUtilities";
export const description =
  "The only moderation bot you need for your Discord server.";
export const domain = "utilities.toastify.tk";
export const color = "#fcb228";

export const seo: NextSeoProps = {
  title: "Home",
  titleTemplate: `%s | ${title}`,
  description,
  themeColor: color,
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      color,
      href: "/safari-pinned-tab.svg",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      content: color,
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
  ],
  twitter: {
    handle: "@ToastifyDev",
    cardType: "summary",
  },
  openGraph: {
    type: "website",
    url: `https://${domain}`,
  },
};

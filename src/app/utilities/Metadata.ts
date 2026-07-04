import type { Metadata } from "next";
import setting from "@/app/config/conf/setting.json"; 

export default function MetadataUtils() {
    const metadata: Metadata = {
        title: "CordyStackX | Open Source Software Developments",
        description: "CordyStackX portfolio of Open Source Software projects, including developer experiments, innovative web solutions, and cutting-edge blockchain apps.",
        alternates: {
            canonical: setting.domain__links,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
            },
        },
         verification: {
            google: "google9249e550c23b54d0.html",
        },
        openGraph: {
            title: "CordyStackX | Open Source Software Developments",
            description: "CordyStackX portfolio of Open Source Software projects, including developer experiments, innovative web solutions, and cutting-edge blockchain apps.",
            url: setting.domain__links,
            siteName: "CordyStackX",
            images: [
            {
                url: setting.openGraph,
                width: 800,
                height: 600,
            },
            {
                url: setting.openGraph,
                width: 1800,
                height: 1600,
                alt: "Cordy Portfolio",
            },
            ],
            locale: "en-US",
            type: "website",
        },
         other: {
            "article:publisher": setting.links__src.Social__links.github,
            "twitter:creator": "@CordyStackX",
        },                                  
    };

    return metadata;

}
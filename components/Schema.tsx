'use client';

import Script from 'next/script';

export default function Schema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Serente Electronics",
        "url": "https://www.serentehk.com/",
        "logo": "https://www.serentehk.com/icon.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 80881 31316",
            "contactType": "technical support",
            "areaServed": "HK",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.instagram.com/serenteelectronics_2020?igsh=MTQ0MndjbHpudmM2OA%3D%3D"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ElectronicsStore",
        "name": "Serente Electronics",
        "image": "https://www.serentehk.com/icon.png",
        "@id": "https://www.serentehk.com/",
        "url": "https://www.serentehk.com/",
        "telephone": "+91 80881 31316",
        "email": "sales@serentehk.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2/F Tern Ctr Tower 1, 237 Queen's Rd Central",
            "addressLocality": "Hong Kong",
            "addressCountry": "HK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.28983,
            "longitude": 114.15175
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        }
    };

    return (
        <>
            <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(organizationSchema)}
            </Script>
            <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(localBusinessSchema)}
            </Script>
        </>
    );
}

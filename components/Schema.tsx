'use client';

import Script from 'next/script';

export default function Schema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Serente Electronics",
        "alternateName": ["Serente Electronics HK", "Serente Electronics Pvt Ltd", "Serente Electronics Private Limited"],
        "url": "https://www.serentehk.com/",
        "logo": "https://www.serentehk.com/icon.png",
        "description": "Serente Electronics is a top semiconductor distributor in Hong Kong, specializing in electronic components distribution, integrated circuits (ICs), MOSFETs, IGBTs, diodes, transistors, passive components, LCD/OLED displays, and connector & cable harnessing solutions. Authorized semiconductor distributor offering OEM & ODM solutions, BOM sourcing, and global electronics supply chain services.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 80881 31316",
            "contactType": "technical support",
            "areaServed": ["HK", "IN", "CN", "US", "GB"],
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
        "description": "Leading semiconductor distributors in Hong Kong. Authorized distributor of electronic components including integrated circuits, power semiconductor devices, MOSFETs, IGBTs, diodes, transistors, passive components (capacitors, resistors, inductors), LCD/OLED displays and touch panels. Industrial & electronic systems solutions provider with connector & cable harnessing expertise.",
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
        },
        "priceRange": "$$"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What Shipping Options do you Offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer worldwide shipping with multiple options including express delivery (1-3 days), standard shipping (5-7 days), and economy shipping (10-15 days). We ship from our warehouses in India and Hong Kong for faster regional delivery. As a top semiconductor distributor and electronics supply chain partner in Hong Kong, we ensure reliable global logistics."
                }
            },
            {
                "@type": "Question",
                "name": "Can you Source Obsolete or Hard-to-Find Components?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We specialize in sourcing obsolete, end-of-life, and hard-to-find electronic components including integrated circuits, MOSFETs, IGBTs, and discrete semiconductor parts. Our global network of suppliers allows us to locate rare parts. We are authorized distributor partners with Firstohm, Octea, GL Fiber, VITEK, Sonytek, Kingtronics, Palm Technology, Taimates, Isocom, Greenconn, JB Capacitors, Disen, Hongda, Microtech, Romtronic, Smico, Wipin, Yeebo, and YM Tech."
                }
            },
            {
                "@type": "Question",
                "name": "Do you Provide Technical Datasheets?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide complete technical documentation including datasheets, application notes, and compliance certificates for all semiconductor components and electronic parts. These can be downloaded directly from product pages or requested from our support team. As one of the best semiconductor components suppliers in Hong Kong, we ensure full traceability."
                }
            },
            {
                "@type": "Question",
                "name": "What Payment Methods do you accept?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept various payment methods including bank transfers, credit/debit cards, PayPal, and letters of credit for large orders. For established customers, we also offer flexible payment terms. Contact our semiconductor distribution company in Hong Kong for more details."
                }
            },
            {
                "@type": "Question",
                "name": "What types of semiconductor components do you distribute?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As an authorized semiconductor distributor in Hong Kong, we supply a comprehensive range including: MOSFET transistors, IGBT modules, power MOSFETs, NPN/PNP transistors, Schottky diodes, Zener diodes, rectifier diodes, microcontroller ICs, analog/digital ICs, power management ICs (PMIC), RF ICs, SiC MOSFETs, GaN semiconductor devices, wide bandgap semiconductors, automotive grade semiconductors, AI chip components, and power electronics semiconductors."
                }
            },
            {
                "@type": "Question",
                "name": "Which industries do you serve with semiconductor components?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve automotive semiconductor components for EV and traditional vehicles, industrial semiconductor devices, semiconductors for solar inverters, telecom equipment components, consumer electronics semiconductors, and IoT device components. Our industrial & electronic systems solutions cover railways, medical industry, lighting, and network infrastructure."
                }
            }
        ]
    };

    return (
        <>
            <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(organizationSchema)}
            </Script>
            <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(localBusinessSchema)}
            </Script>
            <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
        </>
    );
}

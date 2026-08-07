'use client';

import Script from 'next/script';

export default function Schema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Serente Electronics",
        "alternateName": ["Serente Electronics Pvt Ltd", "Serente Electronics Private Limited"],
        "url": "https://www.serente.in/",
        "logo": "https://www.serente.in/icon.png",
        "description": "Serente Electronics Pvt. Ltd. is a technology-driven Electronics Manufacturing Services (EMS) and global electronic component solutions company, specializing in electronic components distribution, integrated circuits (ICs), MOSFETs, IGBTs, diodes, transistors, passive components, LCD/OLED displays, and connector & cable harnessing solutions.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 80881 31316",
            "contactType": "technical support",
            "areaServed": ["IN", "US", "EU", "GB", "CN"],
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
        "image": "https://www.serente.in/icon.png",
        "@id": "https://www.serente.in/",
        "url": "https://www.serente.in/",
        "telephone": "+91 80881 31316",
        "email": "hello@serenteelectronics.com",
        "description": "Leading Electronics Manufacturing Services (EMS) & electronic components distributor. Authorized distributor of electronic components including integrated circuits, power semiconductor devices, MOSFETs, IGBTs, diodes, transistors, passive components (capacitors, resistors, inductors), LCD/OLED displays and touch panels.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serente Electronics Pvt. Ltd.",
            "addressCountry": "IN"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
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
                    "text": "We offer worldwide shipping with multiple options including express delivery (1-3 days), standard shipping (5-7 days), and economy shipping (10-15 days). As a top electronic components distributor and EMS partner, we ensure reliable global logistics."
                }
            },
            {
                "@type": "Question",
                "name": "Can you Source Obsolete or Hard-to-Find Components?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We specialize in sourcing obsolete, end-of-life, and hard-to-find electronic components including integrated circuits, MOSFETs, IGBTs, and discrete semiconductor parts. Our global network of suppliers allows us to locate rare parts."
                }
            },
            {
                "@type": "Question",
                "name": "Do you Provide Technical Datasheets?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide complete technical documentation including datasheets, application notes, and compliance certificates for all semiconductor components and electronic parts. These can be downloaded directly from product pages or requested from our support team."
                }
            },
            {
                "@type": "Question",
                "name": "What Payment Methods do you accept?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept various payment methods including bank transfers, credit/debit cards, PayPal, and letters of credit for large orders. For established customers, we also offer flexible payment terms."
                }
            },
            {
                "@type": "Question",
                "name": "What types of semiconductor components do you distribute?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As an authorized electronic component distributor, we supply a comprehensive range including: MOSFET transistors, IGBT modules, power MOSFETs, NPN/PNP transistors, Schottky diodes, Zener diodes, rectifier diodes, microcontroller ICs, analog/digital ICs, power management ICs (PMIC), RF ICs, SiC MOSFETs, GaN semiconductor devices, wide bandgap semiconductors, automotive grade semiconductors, AI chip components, and power electronics semiconductors."
                }
            },
            {
                "@type": "Question",
                "name": "Which industries do you serve with semiconductor components?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We supply high-reliability electronic components across key industries including Industrial Automation, Automotive, EV Sector, Medical Devices, Telecom, Railways, Energy & Solar Inverters, Consumer Electronics, and Smart IoT Devices."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}

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

    const categoryProductSchemas = [
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Varistors",
            "image": "https://www.serentehk.com/products/category/varistors",
            "description": "Thermally Protected Varistor 14Mm Rohs/ T&r Rohs Compliant: Yes |Littelfuse TMOV14RP200EL2T7",
            "brand": {
                "@type": "Brand",
                "name": "Serente Electronics"
            }
        },
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Resistors",
            "image": "https://www.serentehk.com/products/category/resistors",
            "description": "Thick Film Resistors -SMD; YAGEO; 220 Ohm; 0603; 1%",
            "brand": {
                "@type": "Brand",
                "name": "Serente Electronics"
            }
        },
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Tools",
            "image": "https://www.serentehk.com/products/category/tools",
            "description": "Spanner 13mm Combination",
            "brand": {
                "@type": "Brand",
                "name": "Serente Electronics"
            }
        },
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Transistors",
            "image": "https://www.serentehk.com/products/category/transistors",
            "description": "Transistor MOSFET P-Ch. -0,46A/-25V SOT23 FDV 304 P",
            "brand": {
                "@type": "Brand",
                "name": "Serente Electronics"
            }
        },
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Audio",
            "image": "https://www.serentehk.com/products?category=Audio",
            "description": "8 Ohms General Purpose Speaker 5 W 220 Hz 10 kHz Top Round, Square Frame",
            "brand": {
                "@type": "Brand",
                "name": "Serente Electronics"
            }
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What Shipping Options do you Offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer worldwide shipping with multiple options including express delivery (1-3 days), standard shipping (5-7 days), and economy shipping (10-15 days). We ship from our warehouses in India and Hong Kong for faster regional delivery. We are Top BOM sourcing and electronics supply in Hong Kong."
                }
            },
            {
                "@type": "Question",
                "name": "Can you Source Obsolete or Hard-to-Find Components?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We specialize in sourcing obsolete, end-of-life, and hard-to-find electronic components. Our global network of suppliers allows us to locate rare parts. Submit your requirements and we'll do our best to find what you need. We are a distributor Partner with Companies like Firstohm, Octea, GL Fiber, VITEK, Sonytek, Kingtronics, Palm Technology , Taimates, Isocom, Greenconn, JB Capacitors, Disen, Hongda, Microtech, Romtronic, Smico, Wipin, Yeebo, YM Tech Companies."
                }
            },
            {
                "@type": "Question",
                "name": "Do you Provide Technical Datasheet?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely, We provide complete technical documentation including datasheets, application notes, and compliance certificates for all products. These can be downloaded directly from product pages or requested from our support team. We are Best semiconductor components suppliers."
                }
            },
            {
                "@type": "Question",
                "name": "What Payment Methods do you accept?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept various payment methods including bank transfers, credit/debit cards, PayPal, and letters of credit for large orders. For established customers, we also offer flexible payment terms. Contact us for more details."
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
            {categoryProductSchemas.map((schema, index) => (
                <Script
                    key={schema.name}
                    id={`product-category-schema-${schema.name.toLowerCase()}-${index}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                >
                    {JSON.stringify(schema)}
                </Script>
            ))}
            <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
        </>
    );
}

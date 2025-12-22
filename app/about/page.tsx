import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
    return (
        <div className="container mx-auto py-12 px-4 space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-primary">About Serente Electronics HK Ltd</h1>
                <p className="text-lg text-muted-foreground">
                    Bridging the gap between global electronic component supply and innovative manufacturing solutions.
                </p>
            </section>

            <Separator />

            {/* Our Story Section */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <Badge variant="secondary" className="text-sm">Our Story</Badge>
                    <h2 className="text-3xl font-semibold">Who We Are</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Serente Electronics HK Ltd is a Hong Kong-based electronic distribution company established in October 2023, specializing in the global supply of electronic components and solutions for OEM and ODM projects. We operate as a worldwide distributor with a focus on providing electronic components, connectors, and related products to international markets, including India and other key regions.
                        </p>
                        <p>
                            We prioritize project-based requirements, backed by a robust marketing and engineering team poised to embrace new challenges. Offering sourcing, distribution, and supply chain management services for a wide range of electronics industries, our expertise extends to reverse engineering, component supply, and customized solutions for clients seeking global partnerships and reliable supply chains. We maintain an active presence in both import and export markets, serving as a key partner for electronics manufacturers and distributors worldwide.
                        </p>
                    </div>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                    {/* Placeholder for an Image - ideally a warehouse or office shot */}
                    <div className="text-muted-foreground/50 text-xl font-medium">Serente Global Hub</div>
                    {/* If you have an image, replace the above div with: 
                <Image src="/your-image.jpg" alt="About Serente" fill className="object-cover" /> 
             */}
                </div>
            </section>

            {/* The Difference Section */}
            <section className="bg-muted/30 p-8 rounded-2xl space-y-6">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl font-semibold">The Serente Difference</h2>
                    <p className="text-muted-foreground">
                        We distinguish ourselves by offering pin-to-pin replacement solutions for global brands in connectors, LCDs, and other electronic components.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardContent className="pt-6 space-y-2">
                            <h3 className="font-semibold text-lg">Pin-to-Pin Compatibility</h3>
                            <p className="text-sm text-muted-foreground">
                                We supply compatible components that match the exact specifications, form factor, and electrical connections of leading brands, enabling seamless integration into existing designs without redesigns.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6 space-y-2">
                            <h3 className="font-semibold text-lg">Reverse Engineering</h3>
                            <p className="text-sm text-muted-foreground">
                                Our engineering expertise allows us to provide reliable alternatives for connectors, LCDs, and other parts, making us a valuable partner for cost-effective, drop-in replacements.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6 space-y-2">
                            <h3 className="font-semibold text-lg">Legacy Support</h3>
                            <p className="text-sm text-muted-foreground">
                                We help companies maintain legacy systems and reduce dependency on single-brand suppliers, ensuring continuity and flexibility in global supply chains.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4 p-6 border rounded-xl bg-card shadow-sm">
                    <Badge className="w-fit">MISSION</Badge>
                    <h3 className="text-2xl font-bold">Reliable & Innovative Solutions</h3>
                    <p className="text-muted-foreground">
                        Serente Electronics HK Ltd’s mission is to deliver reliable, innovative, and cost‑effective electronic components and solutions to OEM and ODM customers worldwide. The company focuses on pin‑to‑pin replacements and customised, project‑based support for connectors, LCDs, and other key components.
                    </p>
                    <p className="text-muted-foreground">
                        We aim to build a robust global supply chain with trusted partners, ensuring continuity, flexibility, and timely delivery. Backed by a strong marketing and engineering team, Serente enables customers to maintain legacy systems and stay competitive in global markets.
                    </p>
                </div>

                <div className="space-y-4 p-6 border rounded-xl bg-card shadow-sm">
                    <Badge variant="outline" className="w-fit">VISION</Badge>
                    <h3 className="text-2xl font-bold">Global Expansion & Service</h3>
                    <p className="text-muted-foreground">
                        Serente Electronics HK Ltd will expand across APAC and Europe in the next five years, establishing branches in India, China, Japan, South Korea, Singapore, Dubai, Vietnam, Germany, UK, France, Italy, and the Netherlands.
                    </p>
                    <p className="text-muted-foreground">
                        With a focus on pin-to-pin replacements and customized solutions, the company will deliver rapid, reliable service to OEMs and ODMs.
                    </p>
                </div>
            </section>
        </div>
    );
}

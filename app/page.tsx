import IndustrialAbout from '@/components/IndustrialAbout';
import HomeStats from '@/components/HomeStats';
import HomeCapabilities from '@/components/HomeCapabilities';
import ProductCategories from '@/components/ProductCategories';
import ProcessTimeline from '@/components/ProcessTimeline';
import WhyChooseUs from '@/components/WhyChooseUs';
import HomeIndustries from '@/components/HomeIndustries';
import FAQ from '@/components/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Serente Electronics | Leading ESDM Company",
  description: "Leading electronic components distributor and IoT solutions manufacturer. ISO 9001:2015 Certified.",
};

export default function Home() {
  return (
    <div className="w-screen bg-[#EAEAEA] relative" style={{ marginLeft: 'calc(-50vw + 50%)', marginTop: '-2rem' }}>
      {/* 1. Industrial About Section */}
      <IndustrialAbout />

      {/* 3. Global Stats & ISO Metrics Banner */}
      <HomeStats />

      {/* 4. Core Capabilities */}
      <HomeCapabilities />

      {/* 5. Component Sourcing Portfolio */}
      <ProductCategories />

      {/* 6. 5-Step ESDM Manufacturing Workflow */}
      <ProcessTimeline />

      {/* 7. Why Partner With Serente Advantage */}
      <WhyChooseUs />

      {/* 8. Industries Served */}
      <HomeIndustries />

      {/* 9. Animated FAQ & Inquiries */}
      <FAQ />
    </div>
  );
}

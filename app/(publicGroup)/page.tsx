import { Categories } from "@/components/home/categories";
import { FeaturedServices } from "@/components/home/featured-services";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { TopTechnicians } from "@/components/home/top-technicians";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedServices />
      <TopTechnicians />
      <HowItWorks />
    </>
  );
}

import { Button } from "@/components/ui/button";
import { Hero } from "@/components/home/hero";
import { Categories } from "@/components/home/categories";
import { FeaturedServices } from "@/components/home/featured-services";
import { TopTechnicians } from "@/components/home/top-technicians";
import { HowItWorks } from "@/components/home/how-it-works";
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

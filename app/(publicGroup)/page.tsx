import { Categories } from "@/components/home/categories";
import { FeaturedServices } from "@/components/home/featured-services";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { TopTechnicians } from "@/components/home/top-technicians";
import { Button } from "@/components/ui/button";
import { getCategories } from "./_actions/getCategories";
import { getServices } from "./_actions/getServices";

export default async function HomePage() {
  const result1 = await getCategories();
  const categories = result1?.data;
  const result2 = await getServices();
  const services = result2?.data;
  return (
    <>
      <Hero />
      <Categories categories={categories} />
      <FeaturedServices services={services} />
      <TopTechnicians />
      <HowItWorks />
    </>
  );
}

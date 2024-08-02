import CustomizableOptions from "@/components/section/CustomizableOptions";
import WhyChooseMechanicalKeyboards from "@/components/section/WhyChooseMechanicalKeyboards";
import CustomerReview from "@/components/section/CustomerReview";
import FeaturedBrand from "@/components/section/FeaturedBrand";
import Hero from "@/components/section/Hero";
import Service from "@/components/section/Service";
import { Helmet } from "react-helmet";
import FeaturedProduct from "@/components/section/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Mech Arcade</title>
      </Helmet>
      <Hero />
      <Service />
      <FeaturedProduct />
      <FeaturedBrand />
      <CustomerReview />
      <WhyChooseMechanicalKeyboards />
      <CustomizableOptions/>
    </div>
  );
};

export default Home;
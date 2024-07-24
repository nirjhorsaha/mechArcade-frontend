import CustomizableOptions from "@/components/Additinonal/CustomizableOptions";
import WhyChooseMechanicalKeyboards from "@/components/Additinonal/WhyChooseMechanicalKeyboards";
import CustomerReview from "@/components/Customer-Review/CustomerReview";
import FeaturedBrand from "@/components/Featured-Brand/FeaturedBrand";
import FeaturedProduct from "@/components/Featured-Product/FeaturedProduct";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Service/Service";
import { Helmet } from "react-helmet";

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
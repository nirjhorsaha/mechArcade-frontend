import Hero from "@/components/Hero/Hero";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Mech Arcade</title>
      </Helmet>
      <Hero/>
    </div>
  );
};

export default Home;
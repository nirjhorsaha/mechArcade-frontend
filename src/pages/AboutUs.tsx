import { Helmet } from 'react-helmet';
import { FiAward, FiUsers, FiSettings, FiTrendingUp } from 'react-icons/fi';
import logo from '../assets/logo.png';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useEffect } from 'react';


const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      once: true, 
      duration: 800, 
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center rounded-lg">
      <Helmet>
        <title>About Us - Mech Arcade</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
              About Mech Arcade
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              <span className='font-bold'>Mech Arcade</span> is dedicated to bringing you the latest and greatest
              in mechanical keyboards. Our passion for innovation and quality
              drives us to deliver the ultimate keyboard experience.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2024, Mech Arcade has quickly become a leader in the
              keyboard enthusiast community. From gaming to professional use,
              our curated selection ensures every keystroke is a pleasure.
            </p>
            <p className="text-lg text-gray-600">
              Join us in exploring the world of mechanical keyboards and
              discover what sets Mech Arcade apart.
            </p>
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <img
              src={logo}
              alt="About Us"
              className="max-h-96 rounded-lg  object-cover"
            />
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 animate-bounce">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At Mech Arcade, our mission is to provide keyboard enthusiasts with
            top-quality products that enhance their computing experience. We
            strive to deliver:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-6 space-y-4">
            <li className="flex items-start">
              <FiAward className="mr-2 mt-1 text-blue-500 animate-spin" /> Innovative and
              cutting-edge mechanical keyboards.
            </li>
            <li className="flex items-start">
              <FiUsers className="mr-2 mt-1 text-blue-500 animate-bounce" /> Exceptional
              customer service and support.
            </li>
            <li className="flex items-start">
              <FiSettings className="mr-2 mt-1 text-blue-500 animate-spin" /> Curated
              collections that cater to diverse preferences.
            </li>
            <li className="flex items-start">
              <FiTrendingUp className="mr-2 mt-1 text-blue-500 animate-bounce" /> Continuous
              improvement and community engagement.
            </li>
          </ul>
          <p className="text-lg text-blue-600 font-bold">
            Whether you're a seasoned gamer or a professional typist, Mech
            Arcade is here to elevate your typing experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

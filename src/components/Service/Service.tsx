import Cashback from '../../assets/Cashback.png';
import FreeShipping from '../../assets/FreeShipping.png';
import Payment from '../../assets/Payment.png';
import Support from '../../assets/Support.png';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useEffect } from 'react';

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);


  const services = [
    { id: 1, name: 'Free Shipping', description: 'Enjoy free shipping on all orders, no minimum purchase required.', image: FreeShipping },
    { id: 2, name: 'Quick Payment', description: 'Hassle-free checkout with quick payment options.', image: Payment },
    { id: 3, name: 'Big Cashback', description: 'Earn big cashback rewards on your purchases.', image: Cashback },
    { id: 4, name: '24/7 Support', description: 'Need assistance? Our dedicated support team is available around the clock to help.', image: Support },
  ];
  
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-10 ">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Discover Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {services.map(service => (
          <div key={service.id} className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300" data-aos="zoom-in">
            <img className="w-full h-auto mb-2 object-contain md:w-48 md:h-20" src={service.image} alt={service.name} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
            {/* <p className="text-center text-gray-700">{service.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Service;

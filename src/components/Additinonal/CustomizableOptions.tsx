import React from 'react';

const CustomizableOptions: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          {/* <FiSettings className="text-blue-600 h-8 w-8 mr-2" /> */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-600">Customizable Options</h2>
          </div>
        </div>
            <p className="text-lg text-gray-600 mb-5">Explore various customizable features of mechanical keyboards</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 hover:shadow-md" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Switches</h3>
            <p className="text-gray-600 mb-4">Choose from a variety of mechanical key switches such as Cherry MX, Gateron, and more, each offering unique tactile feedback and actuation force.</p>
            <p className="text-sm text-gray-500">Opt for switches that match your typing style and preferences.</p>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 hover:shadow-md" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Keycaps</h3>
            <p className="text-gray-600 mb-4">Customize the look and feel of your keyboard with different keycap materials, profiles, and designs, including double-shot PBT, ABS, and more.</p>
            <p className="text-sm text-gray-500">Enhance durability and aesthetics with quality keycap options.</p>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 hover:shadow-md" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Backlighting</h3>
            <p className="text-gray-600 mb-4">Add personality to your keyboard with customizable backlighting options, including RGB LED lighting with adjustable colors and effects.</p>
            <p className="text-sm text-gray-500">Create a personalized gaming or work environment with vibrant backlight settings.</p>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 hover:shadow-md" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Layouts</h3>
            <p className="text-gray-600 mb-4">Choose from different keyboard layouts such as tenkeyless (TKL), full-size, and compact designs to suit your workspace and typing preferences.</p>
            <p className="text-sm text-gray-500">Optimize productivity and comfort with ergonomic keyboard layouts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableOptions;

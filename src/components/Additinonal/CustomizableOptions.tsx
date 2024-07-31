import { FaKey, FaCapsules, FaLightbulb, FaKeyboard } from 'react-icons/fa';

const CustomizableOptions: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          {/* <FiSettings className="text-blue-600 h-8 w-8 mr-2" /> */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-600 tracking-wide">Customizable Options</h2>
          </div>
        </div>
        <p className="text-lg text-gray-600 mb-5">Explore various customizable features of mechanical keyboards</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className=" border border-gray-200 rounded-lg p-6 hover:shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaKey className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-4">Key Switches</h3>
            </div>
            <p className="text-gray-600 mb-4">Choose from a variety of mechanical key switches such as Cherry MX, Gateron, and more, each offering unique tactile feedback and actuation force.</p>
            <p className="text-sm text-gray-500">Opt for switches that match your typing style and preferences.</p>
          </div>
          <div className=" border border-gray-200 rounded-lg p-6 hover:shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaLightbulb className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-4">Backlighting</h3>
            </div>
            <p className="text-gray-600 mb-4">Add personality to your keyboard with customizable backlighting options, including RGB LED lighting with adjustable colors and effects.</p>
            <p className="text-sm text-gray-500">Create a personalized gaming or work environment with vibrant backlight settings.</p>
          </div>
          <div className=" border border-gray-200 rounded-lg p-6 hover:shadow-md" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaCapsules className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-4">Keycaps</h3>
            </div>
            <p className="text-gray-600 mb-4">Customize the look and feel of your keyboard with different keycap materials, profiles, and designs, including double-shot PBT, ABS, and more.</p>
            <p className="text-sm text-gray-500">Enhance durability and aesthetics with quality keycap options.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaKeyboard className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-4">Layouts</h3>
            </div>
            <p className="text-gray-600 mb-4">Choose from different keyboard layouts such as tenkeyless (TKL), full-size, and compact designs to suit your workspace and typing preferences.</p>
            <p className="text-sm text-gray-500">Optimize productivity and comfort with ergonomic keyboard layouts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableOptions;

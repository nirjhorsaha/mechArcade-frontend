import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  { href: "#", icon: <FaFacebookF className='size-5' />, label: "Facebook" },
  { href: "#", icon: <FaInstagram className='size-5' />, label: "Instagram" },
  { href: "#", icon: <FaTwitter className='size-5' />, label: "Twitter" },
  { href: "#", icon: <FaGithub className='size-5' />, label: "GitHub" },
  { href: "#", icon: <FaDribbble className='size-5' />, label: "Dribbble" }
];

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-black transition hover:text-blue-600">
    {children}
  </Link>
);

const FooterSection = ({ title, links }: { title: string; links: { to: string; text: string }[] }) => (
  <div className="text-center sm:text-left">
    <p className="text-xl font-medium text-blue-600">{title}</p>
    <nav className="mt-8">
      <ul className="space-y-4 text-sm">
        {links.map(({ to, text }, index) => (
          <li key={index}>
            <FooterLink to={to}>{text}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);


const Footer = () => (
  <footer className="bg-gray-200">
    <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="flex justify-center text-teal-300 sm:justify-start">
            <img src={logo} alt="Logo" className="h-24 lg:h-32" />
          </div>
          <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-black sm:max-w-xs sm:mx-0 sm:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
          </p>
          <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
            {socialLinks.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">{label}</span>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
          <FooterSection
            title="About Us"
            links={[
              { to: "/", text: "Company History" },
              { to: "/", text: "Meet the Team" },
            ]}
          />
          <FooterSection
            title="Our Services"
            links={[
              { to: "/products", text: "Products" },
              { to: "/dashboard", text: "Dashboard" },

            ]}
          />
          <FooterSection
            title="Helpful Links"
            links={[
              { to: "/", text: "FAQs" },
              { to: "/", text: "Support" },
            ]}
          />
          <div className="text-center sm:text-left">
            <p className="text-xl font-medium text-blue-600">Contact Us</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="flex items-center justify-center sm:justify-start gap-1.5 group"
                  href="mailto:john@doe.com"
                >
                  <FaEnvelope className="size-4 text-black" />
                  <span className="text-black transition group-hover:text-blue-600">john@doe.com</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center sm:justify-start gap-1.5 group"
                  href="tel:0123456789"
                >
                  <FaPhone className="size-4 text-black" />
                  <span className="text-black transition group-hover:text-blue-600">0123456789</span>
                </a>
              </li>
              <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                <FaMapMarkerAlt className="size-4 text-black" />
                <address className="-mt-0.5 not-italic text-black">
                  213 Lane, London, United Kingdom
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-12 border-t border-gray-800">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-400">
            <span className="block sm:inline">All rights reserved.</span>
            <a
              className="inline-block text-blue-600 underline transition hover:text-teal-500/75"
              href="/"
            >
              Terms & Conditions
            </a>
            <span>&middot;</span>
            <a
              className="inline-block text-blue-600 underline transition hover:text-teal-500/75"
              href="/"
            >
              Privacy Policy
            </a>
          </p>
          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; {new Date().getFullYear()} Mech Arcade
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

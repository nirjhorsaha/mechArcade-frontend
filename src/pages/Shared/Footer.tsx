import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 my-10 rounded-lg">
      <aside className='mx-auto lg:mx-0 lg:my-auto '>
        <img src={logo} alt="Logo" className="h-24 lg:h-32 lg:ml-2 " />
      </aside>
      <nav>
        <h6 className="footer-title font-extrabold text-black">Services</h6>
        <a className="link link-hover text-blue-600">Branding</a>
        <a className="link link-hover text-blue-600">Design</a>
        <a className="link link-hover text-blue-600">Marketing</a>
        <a className="link link-hover text-blue-600">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title font-extrabold text-black">Company</h6>
        <a className="link link-hover text-blue-600">About us</a>
        <a className="link link-hover text-blue-600">Contact</a>
        <a className="link link-hover text-blue-600">Jobs</a>
        <a className="link link-hover text-blue-600">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title font-extrabold text-black">Legal</h6>
        <a className="link link-hover text-blue-600">Terms of use</a>
        <a className="link link-hover text-blue-600">Privacy policy</a>
        <a className="link link-hover text-blue-600">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
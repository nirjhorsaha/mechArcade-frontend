// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';
// import logo from '../../assets/mechArcade-2-2.png';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState(location.pathname); // Initialize with the current path

//   const handleTabClick = (tabName: string) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//             <li>
//               <Link
//                 to="/"
//                 onClick={() => handleTabClick('/')}
//                 className={`nav-link ${activeTab === '/' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/products"
//                 onClick={() => handleTabClick('/products')}
//                 className={`nav-link ${activeTab === '/products' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//               >
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 onClick={() => handleTabClick('/about')}
//                 className={`nav-link ${activeTab === '/about' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 onClick={() => handleTabClick('/contact')}
//                 className={`nav-link ${activeTab === '/contact' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//               >
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard"
//                 onClick={() => handleTabClick('/dashboard')}
//                 className={`nav-link ${activeTab === '/dashboard' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//               >
//                 Dashboard
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="logo-container">
//           <Link to="/" className="logo-link flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="h-10 lg:h-16 p-1 lg:ml-2" />
//           </Link>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link
//               to="/"
//               onClick={() => handleTabClick('/')}
//               className={`nav-link ${activeTab === '/' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/products"
//               onClick={() => handleTabClick('/products')}
//               className={`nav-link ${activeTab === '/products' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//             >
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               onClick={() => handleTabClick('/about')}
//               className={`nav-link ${activeTab === '/about' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               onClick={() => handleTabClick('/contact')}
//               className={`nav-link ${activeTab === '/contact' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/dashboard"
//               onClick={() => handleTabClick('/dashboard')}
//               className={`nav-link ${activeTab === '/dashboard' ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
//             >
//               Dashboard
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="navbar-end">
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//             <div className="indicator">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//               <span className="badge badge-sm indicator-item">8</span>
//             </div>
//           </div>
//           <div
//             tabIndex={0}
//             className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
//             <div className="card-body">
//               <span className="text-lg font-bold">8 Items</span>
//               <span className="text-info">Subtotal: $999</span>
//               <div className="card-actions">
//                 <button className="btn btn-primary btn-block">View cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li><a>Settings</a></li>
//             <li><a>Logout</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Container from './ui/Container';
// import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-900 text-white" role="contentinfo">
//       <Container>
//         <div className="py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Logo and About */}
//             <div>
//               <Link to="/" className="flex items-center mb-4">
//                 <div className="h-8 w-8 bg-white rounded flex items-center justify-center mr-2">
//                   <span className="text-blue-800 font-bold">G</span>
//                 </div>
//                 <div className="font-bold text-lg text-white">GOV<span className="text-red-400">PORTAL</span></div>
//               </Link>
//               <p className="text-slate-300 mb-4">
//                 The official portal of the Government of Example Nation. Providing citizens with access to government services, information, and resources.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-slate-300 hover:text-white" aria-label="Facebook">
//                   <Facebook size={20} />
//                 </a>
//                 <a href="#" className="text-slate-300 hover:text-white" aria-label="Twitter">
//                   <Twitter size={20} />
//                 </a>
//                 <a href="#" className="text-slate-300 hover:text-white" aria-label="Instagram">
//                   <Instagram size={20} />
//                 </a>
//                 <a href="#" className="text-slate-300 hover:text-white" aria-label="YouTube">
//                   <Youtube size={20} />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className="text-slate-300 hover:text-white transition">About Us</Link>
//                 </li>
//                 <li>
//                   <Link to="/services" className="text-slate-300 hover:text-white transition">Services</Link>
//                 </li>
//                 <li>
//                   <Link to="/projects" className="text-slate-300 hover:text-white transition">Projects</Link>
//                 </li>
//                 <li>
//                   <Link to="/gallery" className="text-slate-300 hover:text-white transition">Gallery</Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="text-slate-300 hover:text-white transition">Contact Us</Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Important Links */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Important Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-300 hover:text-white transition">RTI Portal</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-300 hover:text-white transition">Open Data Portal</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-300 hover:text-white transition">E-Gazette</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-300 hover:text-white transition">Public Grievances</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-300 hover:text-white transition">Tenders</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-300 hover:text-white transition">Privacy Policy</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Contact Us</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
//                   <span className="text-slate-300">
//                     Government Secretariat, <br />
//                     Capital City, 123456
//                   </span>
//                 </li>
//                 <li className="flex items-center">
//                   <Phone size={18} className="mr-2 flex-shrink-0" />
//                   <a href="tel:+911234567890" className="text-slate-300 hover:text-white transition">
//                     +91 1234 567 890
//                   </a>
//                 </li>
//                 <li className="flex items-center">
//                   <Mail size={18} className="mr-2 flex-shrink-0" />
//                   <a href="mailto:info@example-gov.org" className="text-slate-300 hover:text-white transition">
//                     info@example-gov.org
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </Container>

//       {/* Bottom bar */}
//       <div className="bg-slate-950 py-4">
//         <Container>
//           <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
//             <div className="mb-2 md:mb-0">
//               &copy; {currentYear} Government of Example Nation. All Rights Reserved.
//             </div>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-white transition">Terms of Use</a>
//               <a href="#" className="hover:text-white transition">Privacy Policy</a>
//               <a href="#" className="hover:text-white transition">Accessibility</a>
//               <a href="#" className="hover:text-white transition">Sitemap</a>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import LOGO from '../asset/csir-new-logo.jpg';
import LOGO2 from '../asset/CSIRNEIST_Jorhat.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div>
              <Link to="/" className="flex items-center mb-4 space-x-2">
                <img
                  src={LOGO}
                  alt="CSIR-NEIST Logo"
                  className="h-12 w-auto"
                />
                <div className="text-xl font-bold text-blue-200">CSIR-NEIST</div>
                <img
                  src={LOGO2}
                  alt="CSIR-NEIST Jorhat Logo"
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-slate-300 mb-4">
                The North-East Institute of Science and Technology (CSIR-NEIST) is committed to scientific innovation and technology-driven development in the region.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-white" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-slate-300 hover:text-white" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-slate-300 hover:text-white" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-slate-300 hover:text-white" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-white transition">Home</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white transition">About Us</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white transition">Services</Link></li>
                <li><Link to="/projects" className="text-slate-300 hover:text-white transition">Projects</Link></li>
                <li><Link to="/gallery" className="text-slate-300 hover:text-white transition">Gallery</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Important Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition">RTI Portal</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">Open Data Portal</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">E-Gazette</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">Public Grievances</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">Tenders</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">
                    CSIR-NEIST Campus,<br />
                    Jorhat, Assam – 785006
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <a href="tel:+913762237126" className="text-slate-300 hover:text-white transition">
                    +91 3762 237126
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  <a href="mailto:info@csir-neist.res.in" className="text-slate-300 hover:text-white transition">
                    info@csir-neist.res.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="bg-slate-950 py-4">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="mb-2 md:mb-0">
              &copy; {currentYear} CSIR-NEIST. All Rights Reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">Terms of Use</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Accessibility</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

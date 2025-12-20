// export default function Footer() {
//   return (
//     <footer className="bg-[#7C474A] text-gray-300 py-10 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* 🟢 Company Info */}
//         <div>
//           <h2 className="text-xl font-semibold text-white mb-4">
//             Visa International
//           </h2>
//           <p className="text-gray-400 leading-relaxed">
//             Importers and distributors of premium grains and pulses across
//             India. Delivering quality, purity, and trust since our inception.
//           </p>
//         </div>

//         {/* 🟢 Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#hero"
//                 className="hover:text-amber-400 transition-colors"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className="hover:text-amber-400 transition-colors"
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="hover:text-amber-400 transition-colors"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* 🟢 Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
//           <ul className="space-y-2">
//             <li>Email: team.visainternational@gmail.com</li>
//             <li>Phone: +91 94440 42100</li>
//             <li>
//               Location: Visa International Ayodhya, Ground Floor, 8/10, Water
//               Works Avenue Road, 2nd Street, Aspiran Garden Colony, Kilpauk,
//               Chennai, Tamil Nadu – 600010
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Divider Line */}
//       <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} Visa International. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#7C474A] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 🟢 Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Visa International
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Importers and distributors of premium grains and pulses across
            India. Delivering quality, purity, and trust since our inception.
          </p>
        </div>

        {/* 🟢 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-amber-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 🟢 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Email: anujgupta@visainternational.org</li>
            <li>Phone: +91 94440 42100</li>
            <li>
              Location: Ayodhya, Ground Floor, 8/10, Water Works Avenue Road,
              Aspiran Garden, 2nd Street, Kilpauk, Chennai – 600010, Tamil Nadu,
              India
            </li>
          </ul>
        </div>
      </div>

      {/* ⭐ Social Media Icons Section */}
      <div className="flex justify-center gap-6 mt-10">
        <a
          href="https://www.facebook.com/share/1Zt9jb2m8u/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition transform hover:scale-110"
        >
          <Facebook size={22} />
        </a>
        <a
          href="https://www.instagram.com/visainternational_?igsh=MXFmaTZucm4xYXZm&utm_source=qr"
          className="hover:text-amber-400 transition transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/visa-international-597642389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition transform hover:scale-110"
        >
          <Linkedin size={22} />
        </a>
        {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition transform hover:scale-110"
        >
          <Twitter size={22} />
        </a> */}
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Visa International. All rights reserved.
      </div>
    </footer>
  );
}

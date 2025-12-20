// import Image from "next/image";
// import styles from "./Navbar.module.css";

// export default function Navbar() {
//   return (
//     <header className="fixed top-5 left-0 w-full z-50 ">
//       <div className="max-w-7xl w-[95%] mx-auto  items-center rounded-lg backdrop-blur-sm bg-[hsla(0,0%,100%,0.25)] border border-[hsla(0,0%,100%,0.18)] flex justify-between px-4 py-2 shadow-sm">
//         {/* Logo */}
//         <a className="flex items-center gap-2" href="#hero">
//           <Image
//             src="/images/logo.jpeg"
//             alt="Visa International logo"
//             width={100}
//             height={100}
//             className="rounded"
//           />
//           {/* <span className="font-semibold text-lg text-gray-800">
//             Visa International
//           </span> */}
//         </a>

//         {/* Menu */}
//         <nav className="space-x-8 hidden md:flex text-black">
//           <a href="#hero" className={` font-medium ${styles.navLink}`}>
//             Home
//             <div className={`${styles.navLinkUnderline}`}></div>
//           </a>
//           <a href="#about" className={` font-medium ${styles.navLink}`}>
//             About Us
//             <div className={`${styles.navLinkUnderline}`}></div>
//           </a>
//           <a href="#whatwedo" className={` font-medium ${styles.navLink}`}>
//             What We Do
//             <div className={`${styles.navLinkUnderline}`}></div>
//           </a>
//           <a href="#team" className={` font-medium ${styles.navLink}`}>
//             Team
//             <div className={`${styles.navLinkUnderline}`}></div>
//           </a>
//           <a href="#contact" className={` font-medium ${styles.navLink}`}>
//             Contact
//             <div className={`${styles.navLinkUnderline}`}></div>
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 w-full z-50">
      <div className="max-w-7xl w-[95%] mx-auto flex items-center justify-between px-4 py-2 rounded-lg backdrop-blur-sm bg-white/30 border border-white/40 shadow-sm">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpeg"
            alt="Visa International logo"
            width={55}
            height={55}
            className="rounded"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-black">
          <a href="#hero" className={` font-medium ${styles.navLink}`}>
            Home
            <div className={`${styles.navLinkUnderline}`}></div>
          </a>
          <a href="#about" className={` font-medium ${styles.navLink}`}>
            About Us
            <div className={`${styles.navLinkUnderline}`}></div>
          </a>
          <a href="#products" className={` font-medium ${styles.navLink}`}>
            Products
            <div className={`${styles.navLinkUnderline}`}></div>
          </a>
          <a href="#networks" className={` font-medium ${styles.navLink}`}>
            Our Networks
            <div className={`${styles.navLinkUnderline}`}></div>
          </a>
          <a href="#team" className={` font-medium ${styles.navLink}`}>
            Team
            <div className={`${styles.navLinkUnderline}`}></div>
          </a>
          <a href="#contact" className={` font-medium ${styles.navLink}`}>
            Contact
            <div className={`${styles.navLinkUnderline}`}></div>
          </a>
        </nav>

        {/* Hamburger Icon */}
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white/80 backdrop-blur-md rounded-lg mt-2 mx-auto w-[95%] shadow px-4 py-3 flex flex-col space-y-3 text-black">
          <a
            href="#hero"
            className="py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="py-2 border-b"
            onClick={() => setOpen(false)}
          >
            About Us
          </a>
          <a
            href="#products"
            className="py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Products
          </a>
          <a
            href="#networks"
            className="py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Our Networks
          </a>
          <a
            href="#team"
            className="py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Team
          </a>
          <a
            href="#contact"
            className="py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

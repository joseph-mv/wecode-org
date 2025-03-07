import Link from "next/link";
import SocialMediaLinks from "../common/SocialMediaLinks";

const navItems = [
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
  { href: "#privacy", label: "Privacy & Policy" },
  { href: "#terms", label: "Terms & Services" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-8 flex flex-col  justify-between items-center gap-6">
      {/* Logo Section */}
      <div className="flex items-center">
        <h2 className="text-3xl font-bold ">Wecode</h2>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 sm:mt-0 flex  space-x-4">
        {navItems.map((item, index) => ( 
          <Link key={index} href={item.href} className="text-center hover:text-blue-600">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Social Media Links */}
      <div className="mt-4 sm:mt-0 flex flex-nowrap space-x-4">
        <SocialMediaLinks className="text-blue-600 hover:text-white text-2xl"/>
      </div>
      <div className="mt-4 sm:mt-0 text-center sm:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wecode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

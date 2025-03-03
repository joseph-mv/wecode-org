
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { LINKS } from "@/constants/links";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-8 flex flex-col  justify-between items-center gap-6">
      <div className="flex items-center">
        <h2  className="text-3xl font-bold ">
          Wecode
        </h2>
      </div>
      <nav className="mt-4 sm:mt-0 flex  space-x-4">
        <Link href="/#about" className="hover:text-blue-600">
          About Us
        </Link>
        <Link href="/#contact" className="hover:text-blue-600">
          Contact
        </Link>
        <Link href="#privacy" className="hover:text-blue-600">
          Privacy & Policy
        </Link>
        <Link href="#terms" className="hover:text-blue-600">
          Terms & Services
        </Link>
      </nav>
      <div className="mt-4 sm:mt-0 flex flex-nowrap space-x-4">
        <Link
         href={LINKS.instagram}
          target="_blank"
          className="text-blue-600 hover:text-white text-2xl"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
         href={LINKS.youtube}
          target="_blank"
          className="text-blue-600 hover:text-white text-2xl"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </Link>

        <Link
          href={LINKS.discord}
          target="_blank"
          className="text-blue-600 hover:text-white text-2xl"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </Link>

        <Link
           href={LINKS.telegram}
          target="_blank"
          className="text-blue-600 hover:text-white text-2xl"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </Link>
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

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { LINKS } from "../../constants/links";
const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-8 flex flex-col  justify-between items-center gap-6">
      <div className="flex items-center">
        <Link to="/" className="text-3xl font-bold ">
          Wecode
        </Link>
      </div>
      <nav className="mt-4 sm:mt-0 flex  space-x-4">
        <a href="/#about" className="hover:text-secondaryClr">
          About Us
        </a>
        <a href="/#contact" className="hover:text-secondaryClr">
          Contact
        </a>
        <a href="#privacy" className="hover:text-secondaryClr">
          Privacy & Policy
        </a>
        <a href="#terms" className="hover:text-secondaryClr">
          Terms & Services
        </a>
      </nav>
      <div className="mt-4 sm:mt-0 flex flex-nowrap space-x-4">
        <a
         href={LINKS.instagram}
          target="_blank"
          className="text-secondaryClr hover:text-primaryClr text-2xl"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
         href={LINKS.youtube}
          target="_blank"
          className="text-secondaryClr hover:text-primaryClr text-2xl"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>

        <a
          href={LINKS.discord}
          target="_blank"
          className="text-secondaryClr hover:text-primaryClr text-2xl"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>

        <a
           href={LINKS.telegram}
          target="_blank"
          className="text-secondaryClr hover:text-primaryClr text-2xl"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
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

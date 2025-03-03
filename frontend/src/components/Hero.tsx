import { LINKS } from "../constants/links";
import {
  faDiscord,
  faSquareInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" relative  bg-hero bg-blend-overlay antialiased flex flex-col justify-center pl-[calc(2*10%)] pr-[10%] ">
    <div className="relative ">
      <h1 className=" md:text-6xl font-arial-black font-extrabold  mb-8">
        {" "}
        Build Your Future with <span className="text-blue-700">WeCode</span>
      </h1>
      <h3 className="text-lg md:text-xl font-bold font-trebuchet   mb-6">
        Join our thriving community of tech enthusiasts, developers, and
        learners. Get guidance, collaborate on projects, and shape your career
        in tech.
      </h3>

      <Link
        href={LINKS.joinCommunity}
        target="_blank"
        className=" bg-primary font-semibold w-max left- text-black gap-3 p-4   rounded-md bg-violet-400 transition-transform transform hover:scale-105 flex items-center sm:ml-[calc(2*30%)] ml-[20%]"
      >
        <FontAwesomeIcon icon={faUsers} className="animate-zoom-in-out" />
        Join Our Community
      </Link>

    </div>
    <div className="absolute bottom-10 left-[50%] -translate-x-[50%] mx-auto   space-x-[10vw] mt-4  flex   ">
      <Link
        href={LINKS.instagram}
        target="_blank"
        className="text-gray-900   text-center animate-zoom-in-out  hover:text-gray-800 hover:animate-none hover:scale-125 text-2xl"
      >
        <FontAwesomeIcon icon={faSquareInstagram} />
      </Link>
      <Link
        href={LINKS.youtube}
        target="_blank"
        className="text-gray-900   animate-zoom-in-out text-center hover:text-gray-800 hover:animate-none hover:scale-125 text-2xl"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </Link>

      <Link
        href={LINKS.discord}
        target="_blank"
        className="text-gray-900  animate-zoom-in-out  text-center hover:text-gray-800 hover:animate-none hover:scale-125 text-2xl"
      >
        <FontAwesomeIcon icon={faDiscord} />
      </Link>

      <Link
        href={LINKS.telegram}
        target="_blank"
        className="text-gray-900  animate-zoom-in-out  text-center hover:text-gray-800 hover:animate-none hover:scale-125 text-2xl"
      >
        <FontAwesomeIcon icon={faTelegram} />
      </Link>
    </div>
  </section>
  );
};

export default Hero

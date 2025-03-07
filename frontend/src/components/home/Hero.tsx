import Link from "next/link";
import Image from "next/image";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LINKS } from "../../constants/links";
import SocialMediaLinks from "../common/SocialMediaLinks";

const Hero = () => {
  return (
    <section className=" relative  w-[100vw] h-[550px] overflow-hidden bg-blend-overlay antialiased flex flex-col justify-center pl-[calc(2*10%)] pr-[10%] ">
      {/* Background Image */}
       <Image width={800} height={800} src="/images/heroBg.webp" alt="" className="absolute inset-0  w-full h-[550px] object-cover  animate-smoothZoom"  ></Image> 
      
      <div className="relative">
        {/* Main Heading */}
        <h1 className=" md:text-6xl font-arial-black font-extrabold  mb-8">
          {" "}
          Build Your Future with <span className="text-blue-700">WeCode</span>
        </h1>

        {/* Subheading */}
        <h3 className="text-lg md:text-xl font-bold font-trebuchet   mb-6">
          Join our thriving community of tech enthusiasts, developers, and
          learners. Get guidance, collaborate on projects, and shape your career
          in tech.
        </h3>

        {/* Join Community Button */}
        <Link
          href={LINKS.joinCommunity}
          target="_blank"
          className=" bg-primary font-semibold w-max left- text-black gap-3 p-4   rounded-md bg-violet-400 transition-transform transform hover:scale-105 flex items-center sm:ml-[calc(2*30%)] ml-[20%]"
        >
          <FontAwesomeIcon icon={faUsers} className="animate-zoom-in-out" />
          Join Our Community
        </Link>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-10 left-[50%] -translate-x-[50%] mx-auto   space-x-[10vw] mt-4  flex   ">
        <SocialMediaLinks className="text-gray-900   text-center animate-zoom-in-out  hover:text-gray-800 hover:animate-none hover:scale-125 text-2xl" />
      </div>
    </section>
  );
};

export default Hero;

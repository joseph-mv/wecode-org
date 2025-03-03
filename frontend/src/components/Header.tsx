'use client'
import { faHome, faPersonRunning,faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    href: "/",
    icon: faHome,
    label: "Home",
  },
  {
    href: "/college-chapter",
    icon: faGraduationCap,
    label: "College Chapter",
  },
  // {
  //   href: "/community",
  //   icon: faPeopleGroup,
  //   label: "Community",
  // },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdmX_iv4g_9y-0AK56lmrb98czcJ6LONTdqEC5e93c9jbQuUQ/viewform",
    icon: faPersonRunning,
    label: "Career",
    external: true, // Open in new tab
    iconClass: "-rotate-[30deg]", // Custom icon class
  },
];

const Header = () => {
  // State href track whether the hamburger menu is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Function href toggle the state of the menu (open/close)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("fixed", "w-full");
    } else {
      document.body.classList.remove("fixed", "w-full");
    }
  }, [isOpen]);


  return (
    <header className=" flex p-3 h-20   justify-between items-center">
      <div className="rounded-full outline-1">
        <Image
          style={{ width: "50px", height: "auto" }}
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
     
      <div className="flex items-center gap-3">
      <button className="order-1 md:hidden relative z-20 w-[30px]  h-[20px]">
        <label
          className="flex  label flex-col gap-1  w-[30px]  h-[20px] "
          htmlFor="burger"
        >
          <input
            className="hidden peer"
            type="checkbox"
            id="burger"
            checked={isOpen}
            onChange={toggleMenu}
          />
          <span className="absolute top-0 block h-[4px] w-full origin-left transition-all bg-black peer-checked:rotate-45 peer-checked:left-[4.5px]"></span>
          <span className="absolute top-[50%] block h-[4px] w-full  bg-black peer-checked:bg-transparent"></span>
          <span className="absolute top-[100%]  block h-[4px]  w-full origin-left transition-all bg-black peer-checked:-rotate-45 peer-checked:left-[4.5px] peer-checked:top-[21px]"></span>
        </label>
      </button>
      
      <nav
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        className={`md:flex-row md:text-mainText md:relative md:right-20  gap-3 font-bold flex flex-col ${
          isOpen
            ? "fixed z-10 text-white  h-[100vh] top-0 rounded-sm pt-[60px] transition-all  right-0 w-[200px]  gap-4 flex backdrop-blur-xs bg-black/35  md:h-auto md:w-auto md:top-0 md:bg-transparent md:backdrop-blur-none md:text-mainText md:pt-0 "
            : "fixed -right-[200px] transition-all"
        }`}
      >
     


      {navLinks.map(({ href, icon, label, external, iconClass }) => (
        <div key={href} className=" border-b-1 border-gray-400 p-2 md:border-none">
        <Link
          
          href={href}
          target={external ? "_blank" : "_self"}
          className="link flex items-center gap-2 p-2 hover:scale-105 "
        >
          <FontAwesomeIcon icon={icon} className={`text-xl ${iconClass || ""}`} />
          <span>{label}</span>
          
        </Link>
        </div>
      ))}


      </nav>  
      </div>
     
      
    </header>
  );
};

export default Header;

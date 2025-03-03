import Image from "next/image";
import {
  FaBook,
  FaUserFriends,
  FaHandsHelping,
  FaBriefcase,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaIndustry,
} from "react-icons/fa";

const CampusFeatures = () => {
  const features = [
    {
      icon: FaBook,
      title: "Comprehensive Learning Resources",
      caption:
        "Access a variety of resources to enhance your learning experience.",
    },
    {
      icon: FaHandsHelping,
      title: "Mentorship and Support",
      caption: "Receive guidance and support from experienced mentors.",
    },
    {
      icon: FaUserFriends,
      title: "Engaging Community Activities",
      caption:
        "Participate in events and activities that build a strong community.",
    },
    {
      icon: FaBriefcase,
      title: "Career Opportunities",
      caption: "Explore various career opportunities and pathways.",
    },
    {
      icon: FaLaptopCode,
      title: "Hackathons",
      caption: "Join hackathons to solve problems and innovate.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Workshops On Latest Tech",
      caption: "Attend workshops on the latest technologies and trends.",
    },
    {
      icon: FaIndustry,
      title: "Bring Industry Leaders To Your Campus",
      caption:
        "Interact with industry leaders and gain insights from their experiences.",
    },
    
  ];

  return (
    <div className=" relative  mx-auto mt-20  outline-dashed -outline-offset-4 max-w-7xl shadow-2xl bg-linear-to-b rounded-lg from-slate-200  pb-24 py-8 px-4 border-y-2">
      <h1
        className="text-center drop-shadow-lg 
    "
      >
        WHAT WECODE BRINGS TO YOUR CAMPUS
      </h1>
      <Image
        className="absolute right-0 bottom-0 h-28 w-auto"
        src="/images/college.png"
        alt=""
        width={80}
        height={80}
      />

      <div
        data-aos="fade-left"
        className=" mx-auto flex gap-4 flex-wrap justify-center items-center font-trebuchet"
      >
        {features.map((feature, index) => (
          <div key={index} className="lg:flex-[20%] lg:max-w-[300px] ">
            <div
              key={index}
              className="  w-[300px]  h-[200px] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
            >
              <feature.icon className="text-4xl text-blue-500 mb-2" />
              <p className="text-center font-semibold">{feature.title}</p>
              <p className="text-center text-sm text-gray-600 mt-2">
                {feature.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusFeatures;

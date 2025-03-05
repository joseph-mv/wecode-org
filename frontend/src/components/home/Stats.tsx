"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faPlay,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import { useStatsAnimation } from "@/hooks/useStats";

// Define an array of statistics data
const stats = [
  {
    id: 1,
    icon: faInstagram,
    color: "text-blue-500",
    label: "Instagram ",
    count:14000
  },
  {
    id: 2,
    icon: faGraduationCap,
    color: "text-green-500",
    label: "College Chapters",
    count:50
  },
  {
    id: 3,
    icon: faPlay,
    color: "text-red-500",
    label: "YouTube Subscribers",
    count:9000
  },
  {
    id: 4,
    icon: faComments,
    color: "text-yellow-500",
    label: "Daily Conversations",
    count:5000
  },
];

// Extract target numbers for animation
const targetNumbers = stats.map((stat)=>stat.count);
function Stats() {
     // Use the custom hook to manage number animations and observe visibility
  const { sectionRef, numbers } = useStatsAnimation(targetNumbers);

  return (
    <section className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 mt-8 px-2 place-items-center">
      {stats.map((stat, index) => (
        <div
          ref={sectionRef}
          key={stat.id}
          className="flex flex-col items-center max-w-96 lg:w-60 w-96 bg-gray-800 text-white shadow-md rounded-lg p-6"
        >
          <FontAwesomeIcon
            icon={stat.icon}
            className={`${stat.color} text-4xl mb-4`}
          />
          <h3 className="text-2xl font-semibold">{numbers[index].toLocaleString()}+</h3>
          <p className=" text-center">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;

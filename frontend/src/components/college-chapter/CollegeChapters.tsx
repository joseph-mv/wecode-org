import Link from "next/link";
import Image from "next/image";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colleges } from "@/lib/utils";
import { LINKS } from "@/constants/links";

function CollegeChapters() {
  return (
    <div>
      <section className="w-full">
        <Image
          width={600}
          height={600}
          className="w-full h-[400px] m-auto object-cover"
          src="/images/collegeChapters/banner_img.png"
          alt="College Chapter"
        />
      </section>
      <Link
        href={LINKS.registerCollege}
        className="bg-blue-600 font-semibold text-white  p-4  rounded-sm hover:scale-105 transition-all hover:bg-blue-500  m-4 cursor-pointer float-right"
        target="_blank"
      >
        <FontAwesomeIcon className="mr-2" icon={faUniversity} />
        Register Your college
      </Link>
      <section>
        <div className="m-10 ">
          <p className="text-[20px] font-normal">Chapters</p>
        </div>
      </section>

      <section className="m-12 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-50">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center   gap-6">
          {colleges.map((college, index) => (
            <div key={index} className="relative">
              <Link
                href={"/college"}
                key={index}
                className={`relative h-[100%] border border-gray-300 shadow-md rounded-lg p-4 bg-white flex items-center space-x-4 hover:bg-gray-100 ${
                  college.comingSoon
                    ? " cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                } `}
              >
                <Image
                  src={college.image}
                  alt={college.name}
                  width={80}
                  height={80}
                  layout="intrinsic"
                  className="object-cover rounded-md"
                />

                <div>
                  <h3 className="text-lg font-semibold">{college.name}</h3>
                  <p className="text-gray-600">{college.place}</p>
                </div>
              </Link>
              {college.comingSoon && (
                <div className="absolute flex inset-0  pointer-events-none">
                  <h2
                    className="text-center text-pop-up-top m-auto text-xl font-bold
                    "
                  >
                    Coming soon...
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CollegeChapters;

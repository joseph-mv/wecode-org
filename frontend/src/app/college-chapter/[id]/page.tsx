import Image from "next/image";
import { College, colleges } from '@/lib/utils'


/**
 * CollegeDetails Component
 * Displays details about a specific college chapter including banner, about section, upcoming events, and organizers.
 */
const CollegeDetails = ({params}:{params:{id:string}}) => {

  const { name, image, place, organizers }: College = colleges[+params.id];
  return (
    <div>
      {/* College Banner */}
      <div className="relative h-[400px]   flex flex-col p-2 justify-end items-end ">
        <Image
          width={800}
          height={800}
          src={image}
          alt=""
          className="absolute inset-0  w-full h-[400px] object-cover -z-10"
        ></Image>

        <h1 className=" bg-white/80 text-center rounded-sm p-2">{name}</h1>
        <h3 className="bg-white/80 p-2 font-semibold text-xl  rounded-sm text-black">
          {place}
        </h3>
      </div>

      {/* about section */}
      <section className="m-4 max-w-7xl mx-auto p-4 text-justify ">
        <h1>About</h1>
        <p className="mb-3 text-xl ">
          👨‍💻 Welcome to{" "}
          <span className="font-semibold"> the WeCode {name}</span> Chapter! 🚀
        </p>

        <p className="ml-3 mb-3">
          WeCode <strong>{name}</strong> is a student-driven{" "}
          <strong>coding community</strong> where tech enthusiasts, programmers,
          and problem solvers{" "}
          <strong>collaborate, learn, and grow together</strong>. Our chapter
          aims to:
        </p>

        <ul className=" ml-5 mb-3">
          <li>
            ✅ Conduct{" "}
            <strong>coding contests, hackathons, and workshops</strong>
          </li>
          <li>
            ✅ Provide{" "}
            <strong>interview preparation and DSA discussions</strong>
          </li>
          <li>
            ✅ Organize{" "}
            <strong>
              tech talks, mentorship programs, and networking events
            </strong>
          </li>
          <li>
            ✅ Foster a culture of{" "}
            <strong>
              collaborative learning and open-source contributions
            </strong>
          </li>
        </ul>

        <p>
          Join us and <strong>be part of an active coding network</strong> that
          helps you level up your skills and connect with like-minded peers!
          🚀🔥
        </p>
      </section>

      {/* upcoming events */}
      <section className="m-4 max-w-7xl mx-auto p-2 h-80 bg-gray-200">
        <h1>Upcoming Events</h1>
        <h2 className="text-center text-pop-up-top text-2xl mt-32">
          Update soon...
        </h2>
      </section>
      
      {/* Organizers Section */}
      <section className="m-4 max-w-7xl mx-auto p-2   rounded-md">
        <h1 className="">Organizers</h1>
        <div className="m-4 p-4 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))]  gap-4  outline-1">
          {organizers?.map((organizer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-4  text-center"
            >
              <Image
                src={organizer.image || ""}
                alt={organizer.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
                width={80}
                height={80}
              />

              <h2 className="text-lg font-semibold mt-3">{organizer.name}</h2>

              <p className="text-gray-500">{organizer.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollegeDetails



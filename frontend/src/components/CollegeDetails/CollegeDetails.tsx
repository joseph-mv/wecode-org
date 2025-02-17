import { useLocation } from "react-router-dom";
import { College } from "../../utils/colleges";

const CollegeDetails = () => {
  // const { name } = useParams();
  const location = useLocation();
  const { name,about, image, place, organizers }: College = location.state;
  return (
    <div>
      <div
        className="h-[400px]  bg-cover bg-no-repeat bg-center flex flex-col p-2 justify-end items-end "
        style={{ backgroundImage: `url("${image}")` }}
      >
        <h1 className=" bg-white bg-opacity-55 text-center rounded p-2">
          {name}
        </h1>
        <h3 className="bg-white bg-opacity-55 p-2 font-semibold text-xl text-black">
          {place}
        </h3>
      </div>
      <a className="bg-blue-600 font-semibold text-white  p-2 rounded hover:scale-105  m-4 cursor-pointer float-right">
        Register Your college
      </a>
      <section className="m-4 max-w-7xl mx-auto p-2 ">
        <h1>About</h1>
        <p>
          {about}
        </p>
      </section>

      <section className="m-4 max-w-7xl mx-auto p-2">
        <h1>Upcoming Events</h1>
        <h2 className="text-center text-pop-up-top text-2xl">Update soon...</h2>
      </section>

      <section className="m-4 max-w-7xl mx-auto p-2 bg-gray-200  rounded-md">
        <h1 className="">Organizers</h1>
        <div className="m-4 p-4 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))]  gap-4 outline outline-1">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-4  text-center"
            >
              {/* Organizer Image */}
              <img
                src={organizer.image}
                alt={organizer.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
              {/* Name */}
              <h2 className="text-lg font-semibold mt-3">{organizer.name}</h2>
              {/* Position */}
              <p className="text-gray-500">{organizer.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollegeDetails;

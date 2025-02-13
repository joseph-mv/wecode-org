import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { name, location, image } = useParams();
  return (
    <div>
      <div
        className="h-[400px]  bg-cover bg-no-repeat bg-center flex flex-col p-2 justify-end items-end "
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className=" bg-white bg-opacity-55 text-center rounded p-2">
          {name}
        </h1>
        <h3 className="bg-white bg-opacity-55 p-2 font-semibold text-xl text-black">
          {location}
        </h3>
      </div>
      <a className="bg-blue-600 font-semibold text-white  p-2 rounded hover:scale-105  m-4 cursor-pointer float-right">Register Your college</a>
      <section className="m-4 max-w-7xl mx-auto p-2 ">
        
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper,
          felis a facilisis consectetur, justo ligula pretium velit, at aliquet
          neque arcu non est. Sed vel est vel nisi consectetur rutrum. Sed
          bibendum, metus non consectetur consectetur, justo ligula pretium
          velit, at aliquet neque arcu non est. Sed vel est vel nisi consectetur
          rutrum. Sed bibendum, metus non consectetur consectetur, justo ligula
          pretium velit, at aliquet neque arcu non est. Sed vel est vel nisi
          consectetur rutrum. Sed bibendum, metus non consectetur consectetur,
          justo ligula pretium velit, at aliquet neque arcu non est. Sed vel est
          vel nisi consectetur rutrum. Sed bibendum, metus non consectetur
          consectetur, justo ligula pretium velit, at aliquet neque arcu non
          est. Sed vel est vel nisi consectetur rutrum. Sed bibendum, metus non
          consectetur consectetur, justo ligula pretium velit, at al
        </p>
      </section>

      <section className="m-4 max-w-7xl mx-auto p-2">
        <h1>Upcoming Events</h1>
       
      </section>

      <section className="m-4 max-w-7xl mx-auto p-2">
        <h1>Organizers</h1>
      </section>
    </div>
  );
};

export default CollegeDetails;

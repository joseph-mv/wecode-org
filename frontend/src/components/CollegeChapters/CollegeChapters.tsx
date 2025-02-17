
import { Link } from "react-router-dom";
import CollegeChapter from "/images/collegeChapters/banner_img.png";
import { colleges } from "../../utils/colleges";

function CollegeChapters() {
 
  return (
    <div>
      <section className="w-full">
        <img className="w-full h-[400px] m-auto object-cover" src={CollegeChapter} alt="College Chapter" />
      </section>

      <section>
        <div className="m-10">
          <p className="text-[20px] font-normal">Chapters</p>
        </div>
      </section>

      <section className="m-12 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-50">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] justify-center   gap-6">
          {colleges.map((college, index) => (
            <Link to={`${encodeURIComponent(college.name)}`} state={college} key={index} className="  border border-gray-300 shadow-md rounded-lg p-4 bg-white flex items-center space-x-4 hover:bg-gray-100 cursor-pointer">
              <img src={college.image} alt={college.name} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <h3 className="text-lg font-semibold">{college.name}</h3>
                <p className="text-gray-600">{college.place}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CollegeChapters;

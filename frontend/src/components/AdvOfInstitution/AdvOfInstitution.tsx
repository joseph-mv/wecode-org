import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToDot, faPerson } from "@fortawesome/free-solid-svg-icons";

const AdvOfInstitution = () => {
  const icons = Array.from({ length: 8 });

  return (
    <div className="max-w-7xl mx-auto mt-10   font-lucida">
      <h1 className="text-center mb-2">ADVANTAGES FOR THE INSTITUTION</h1>
      <div className=" space-y-8 p-4 ">
        {/* EXPOSURE TO TOP TECH COMPANIES section */}
        <div
          className={`relative  m-auto sm:max-w-[700px] sm:min-w-[700px]  min-w-[100vw] h-[400px] overflow-hidden 
          block transition-all`}
        >
          <h2 className="text-center text-xl mb-14 font-trebuchet underline">
            EXPOSURE TO TOP TECH COMPANIES
          </h2>
          <div className="flex justify-center items-center ">
            <ul className="relative z-10 left-[5%] w-[70%] space-y-3 ">
              <li className="space-x-2">
                <FontAwesomeIcon icon={faArrowsToDot} />
                <span>
                  Throughout the year, we plan to host various tech events,
                  hackathons, and workshops.
                </span>
              </li>
              <li className="space-x-2">
                <FontAwesomeIcon icon={faArrowsToDot} />
                <span>
                  {" "}
                  Industry experts will be invited to your campus for these
                  occasions, providing you with valuable networking
                  opportunities.
                </span>{" "}
              </li>
              <li className="space-x-2">
                <FontAwesomeIcon icon={faArrowsToDot} />
                <span>
                  {" "}
                  Companies will discover your campus and consider it for future
                  campus placements and opportunities, expanding the potential
                  for collaboration.
                </span>
              </li>
            </ul>
            <img
              className="relative left-[8%] w-[20%] "
              src="/images/networking.png"
              alt=""
            />

            <img
              className="hidden sm:block right-0 w-[30%]"
              src="/images/company.webp"
              alt=""
            />
          </div>
        </div>
        {/* PLACEMENTS section */}
        <div className="relative overflow-hidden m-auto sm:max-w-[700px]  sm:min-w-[700px] min-w-[100vw]  h-[400px] bg-black text-white p-2   block">
          <h2 className=" text-xl mb-8 font-trebuchet underline">PLACEMENTS</h2>

          <p className="w-[50%] ml-4">
            Students have a greater chance of securing placements in leading
            tech companies with annual packages between 15 lakhs to 35 lakhs.
            This not only enhances the prestige of your college but also
            elevates its overall value.
          </p>
          <div className="bg-white text-black quarter-circle absolute bottom-8 right-0 flex flex-col justify-end gap-3 py-2">
            <h1 className="text-center  ml-[8%] mb-0 ">80%</h1>
            <p className=" ml-[15%]  sm:ml-14 sm:mt-8 sm:mb-5 ">
              &nbsp;&nbsp;&nbsp; more chance that students will get placed or
              able to secure good offers through off- campus placements
            </p>
            <div className="flex ml-[15%] ">
              {icons.map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  className="text-2xl sm:text-3xl"
                  icon={faPerson}
                />
              ))}
              <FontAwesomeIcon
                className="text-2xl sm:text-3xl text-gray-500"
                icon={faPerson}
              />
              <FontAwesomeIcon
                className="text-2xl sm:text-3xl text-gray-500"
                icon={faPerson}
              />
            </div>
          </div>
        </div>
        {/* MORE EVENTS, MORE PLACEMENTS BRINGS MORE QUALITY STUDENTS */}
        <div className="relative overflow-hidden m-auto sm:max-w-[700px]  sm:min-w-[700px] min-w-[100vw]  p-2   block">
          <h2 className=" text-xl font-trebuchet underline ml-2">
            MORE EVENTS, MORE PLACEMENTS BRINGS MORE QUALITY STUDENTS
          </h2>
          <div className=" relative flex  text-sm justify-evenly ">
            <div className="space-y-4 mt-8">
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                Prospective students are inspired to join your institution upon
                learning about the latest placement successes and WeCode club
                activities.
              </div>
              <div className="relative max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                DREAM
                <img
                  className="absolute left-[80%]  w-[50%] -rotate-[80deg] object-contain z-10"
                  src="/images/arrow_bend_left_down_icon.png"
                  alt=""
                />
              </div>
            </div>

            {
              <div className="space-y-4 mt-28">
                <div className=" max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                  <p>
                    Students will explore different paths to secure placements
                    in leading tech firms with the guidance and mentorship
                    provided by WeCode Club.
                  </p>
                </div>
                <div className="relative max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                  <span>
                    STRATEGIZE
                    <img
                      className="absolute left-[100%] bottom-0  w-[50%]  -rotate-[150deg]  object-contain"
                      src="/images/arrow_bend_left_down_icon.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            }
            <div className="space-y-4 mt-4">
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                <p>
                  {" "}
                  Students collaborate with professors and the Wecode community
                  to work on extraordinary projects, enhancing their profiles
                  and skills to excel in interviews.
                </p>
              </div>
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                <span> ACHIEVE</span>
              </div>
            </div>
          </div>
        </div>
        {/* left button */}
      </div>
    </div>
  );
};

export default AdvOfInstitution;

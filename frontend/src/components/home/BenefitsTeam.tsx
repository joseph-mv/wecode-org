import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";

const benefits = [
  {
    text: "Being part of the organizing team of the We Code club at your college will present you with numerous leadership responsibilities and chances to interact with industry and tech professionals.",
  },
  {
    text: "Engaging in these experiences, combined with other activities within the We Code club, will keep you at the forefront of your field.",
  },
  {
    text: "Demonstrating your teamwork, leadership, accountability, and collaboration skills is what catches the attention of companies.",
  },
];

const BenefitsTeam = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10   font-lucida">
      <h1 className="text-center mb-2">
        BENEFITS FOR THE CLUB LEADERSHIP TEAM
      </h1>
      <div className="space-y-8 p-4 ">
        {/*  A STRONG AND OUTSTANDING PROFILE section */}
        <div
          className={`relative m-auto sm:max-w-[700px] sm:min-w-[700px] min-w-[100vw] h-[400px] overflow-hidden 
          block`}
        >
          <h2 className="text-center text-xl mb-14 font-trebuchet underline">
            A STRONG AND OUTSTANDING PROFILE
          </h2>
          <div className="flex justify-center items-center ">
            <ul className="relative z-10 left-[5%] w-[70%] space-y-3 ">
              {benefits.map((benefit, index) => (
                <li key={index} className="space-x-2">
                  <FontAwesomeIcon icon={faArrowsToDot} />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <Image
              className="relative left-[8%] w-[20%] "
              src="/images/leadership.png"
              alt=""
              width={100}
              height={100}
            />

            <Image
              className="hidden sm:block right-0 w-[30%]"
              src="/images/strongProfile.webp"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* EXCLUSIVE INVITATIONS section */}
        <div
          className={`relative overflow-hidden m-auto sm:max-w-[700px] sm:min-w-[700px] min-w-[100vw]  h-[400px] bg-black text-white p-2  block`}
        >
          <h2 className=" text-xl mb-8 font-trebuchet underline">
            EXCLUSIVE INVITATIONS
          </h2>

          <p className="w-[40%] ml-4">
            you get invited to exclusive events conducted by Mr. Yasir, such
            career guidance, meetups, freelance works, opportunities in startups
            and many more
          </p>
          <div className="bg-white text-black quarter-circle2  absolute bottom-8 right-0 flex flex-col justify-end gap-3 py-2">
            <h1 className="text-center  ml-[8%] !mb-0 ">90%</h1>
            <p className=" ml-[15%]  sm:ml-14 sm:mt-8 sm:mb-5 ">
              &nbsp;&nbsp;&nbsp; of software engineers in FAANGs were actively
              involved in university tech clubs, coding competitions,
              hackathons, or other collaborative tech organizations during their
              academic careers. For example, Mark Zuckerberg, Bill Gates, and
              Larry Page were all involved in computer clubs and projects during
              their time at Harvard, Stanford, or similar institutions.
            </p>
          </div>
        </div>

        {/* EARLY EXPERIENCE OF BEING IN AN ORGANIZATION */}
        <div
          className={`relative overflow-hidden m-auto sm:min-w-[700px] sm:max-w-[700px] min-w-[100vw] p-2 pb-4 block`}
        >
          <h2 className=" text-xl font-trebuchet underline ml-2">
            EARLY EXPERIENCE OF BEING IN AN ORGANIZATION
          </h2>
          <div className=" relative flex  text-sm justify-evenly ">

            {/* First experience subsection*/}
            <div className="space-y-4 mt-20">
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                We operate similarly to a tech company, adhering to standard
                task management, event coordination, and coding activities.
              </div>
              <div className="relative max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                FIRST EXPERIENCE{" "}
                <Image
                  className="absolute left-[80%]  w-[50%] -rotate-[80deg] object-contain -z-10"
                  src="/images/arrow_bend_left_down_icon.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>

            {/* Ownership subsection */}
              <div className="space-y-4 mt-48">
                <div className=" max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                  <p>
                    Chance to lead and mentor the next generation of leaders.
                  </p>
                </div>
                <div className="relative max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                  <span>
                    OWNERSHIP{" "}
                    <Image
                      className="absolute left-[100%] bottom-0  w-[50%] -z-10 -rotate-[150deg]  object-contain"
                      src="/images/arrow_bend_left_down_icon.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </span>
                </div>
              </div>
            
            {/* Being the best subsection */}
            <div className="space-y-4 mt-4">
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                <p>
                  {" "}
                  You will acquire the necessary methods and strategies to
                  excel, setting you up for success in your professional journey
                  over the next 5-10 years.
                </p>
              </div>
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                <span> BEING THE BEST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsTeam;

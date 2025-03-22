import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="relative sm:min-h-[500px]  overflow-hidden max-w-[1280px] mx-auto  p-8">
        {/* Section Title */}
        <h1>ABOUT US</h1>

        {/* Background Element at right side */}
        <div className="absolute top-0 right-0 text-gray-400 bg-gray-300 max-w-[30%] w-[200px] min-h-[500px]"></div>

        {/* About Us Image as background at right side */}
        <Image
          className="hidden sm:block absolute right-0 h-[400px] w-auto"
          src="/images/about.webp"
          alt="About Us"
          width={400}
          height={400}
        />

        {/* First Content Block */}
        <div
          data-aos="fade-right"
          className=" sm:absolute  relative mt-4 mx-auto sm:right-52 sm:top-24  sm:w-[70%] max-w-[700px] p-4  bg-gray-100 min-h-max shadow-md text-justify"
        >
          <Image
            className="w-20 object-contain mr-4 shapeOutside"
            src="/images/checklist.png"
            alt=""
            width={80}
            height={80}
            priority
          />
          <p className="font-lucida">
            WeCode Community is an initiative by Mr. Yasir from Germany to
            contribute to the growth of the new generation of developers and
            engineers. We Code currently has over 20000 students across India,
            the Middle East, and Europe and is growing exponentially.
          </p>
        </div>

        {/* Second Content Block */}
        <div
          data-aos="fade-right"
          className="sm:absolute  relative mt-4 mx-auto sm:right-52 sm:top-80  sm:w-[70%] max-w-[700px] p-4 bg-gray-100 min-h-max shadow-md text-justify"
        >
          <Image
            className="w-20 object-contain mr-4 shapeOutside"
            src="/images/user.png"
            alt=""
            width={80}
            height={80}
            priority
          />

          <p className="font-lucida">
            We are dedicated to building a Coding Community focused on all
            Computer Science and Engineering students, preparing them to be
            interview- ready for product- based companies like Google, Meta,
            Amazon, and many more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

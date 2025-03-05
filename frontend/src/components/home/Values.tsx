import Image from "next/image";

const Values = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-2 mt-8">
       {/* Section Title */}
      <h1 className="text-center ">OUR VALUES</h1>

      <div className="grid grid-cols-2  md:grid-cols-3 md:grid-rows-2 gap-2">
         {/* Mission Section */}
        <div className="flex items-center p-4 col-span-2   row-span-1 border-4 border-black  overflow-hidden">
          <p className="font-lucida text-justify">
            Students from diverse backgrounds may have their aspirations
            restricted by their immediate surroundings. Our focus is on
            encouraging them to DREAM BIG. Our goal is to inspire everyone to
            dream big and support them in reaching their goals.
          </p>
        </div>
         {/* Mission Section Image*/}
        <div className="  max-h-44 ">
          <p className="bg-black text-white text-center text-xl font-bold max-w-[232px] md:max-w-[266px] mx-auto" >Mission</p>
          <Image className="max-h-36 mx-auto max-w-[232px] md:max-w-[266px] w-auto"  src="/images/mission.webp" alt=""
          width={200}
          height={200} />
        </div>

         {/* Vision Section Image*/}
        <div className="  max-h-44">
          <Image className="max-h-36 mx-auto  w-auto" src="/images/vision.webp" alt=""
          width={200}
          height={200} />
          <p className="bg-black text-white text-center text-xl font-bold max-w-[232px] md:max-w-[266px] mx-auto">Vision</p>
         
        </div>
         {/* Vision Section*/}
        <div  className="flex items-center p-4 col-span-2 row-span-3 border-4 border-black  overflow-hidden">
          <p className="font-lucida text-justify">
            Our commitment lies in creating a vibrant community centered around
            Computer Science and Engineering Students. Our vision is to equip
            everyone for interviews with leading product- based companies such
            as FAANG ( Facebook, Amazon, Apple, Netflix, Google) and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;

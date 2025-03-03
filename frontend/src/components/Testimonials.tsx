import Image from "next/image";

const Testimonials = () => {
  const path = "/images/testimonials/";
  const testimonials = [
    "mohammed_amaan.png",
    "ameena_kareem.png",
    "mr.akhin_t.png",
    "mr.akshay.png",
    "mr.veshal_raj.png",
  ];
  return (
    <div className="max-w-7xl p-4 mx-auto font-trebuchet outline-dashed -outline-offset-4">
      <h1 className="text-center">TESTIMONIALS</h1>
      <div className="flex flex-wrap gap-6 justify-center ">
        {testimonials.map((testimonial, index) => (
          <Image
            key={index}
            className=" w-84 h-[350px] max-h-min rounded-md border border-black p-2 bg-yellow-50 shadow-md"
            src={path + testimonial}
            alt={testimonial}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    desc: "Design by Akira transformed our brand's image. Their innovative approach and attention to detail are unparalleled.",
    name: "Emily",
    title: "Marketing Director",
  },
  {
    desc: "Working with Design by Akira was an absolute pleasure. Their creativity and professionalism exceeded our expectations.",
    name: "Michael",
    title: "CEO",
  },
  {
    desc: "The team at Design by Akira truly understands the essence of great design. Their work has significantly boosted our online presence.",
    name: "Sophia",
    title: "Business Owner",
  },
  {
    desc: "Design by Akira's expertise in design has been a game-changer for our projects. Their solutions are always innovative and user-friendly.",
    name: "Daniel",
    title: "Product Manager",
  },
  {
    desc: "I've worked with many design studios, but Design by Akira stands out with their dedication and creative vision.",
    name: "Jessica",
    title: "Creative Director",
  },
  {
    desc: "The designs provided by Akira have been instrumental in our marketing campaigns, bringing a fresh and modern look to our brand.",
    name: "Chris",
    title: "Head of Marketing",
  },
  {
    desc: "Choosing Design by Akira was the best decision for our rebranding. They captured our vision perfectly and delivered outstanding results.",
    name: "Amanda",
    title: "Founder",
  },
];


const ReviewCard = ({ description, name, title } : { description: string, name: string, title: string }) => {
  return (
    <div className="max-w-md bg-[#1F1F1F]">
      <div className="pt-[40px] pb-[29px] px-[35px]">
        <div className="flex gap-0.5 text-[#404040]">
          {[...Array(5)].map((_, starIndex) => (
            <svg
              key={starIndex}
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="mt-4 text-[25px] md:text-[23px] font-bold uppercase tracking-tighter">
          "{description}""
        </p>
        <p className="mt-10 text-[17px] font-bold uppercase tracking-tighter">
            {name}, <span className="text-white/60">{title}</span></p>
      </div>
    </div>
  );
};

export function TestimonailMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  ">
      <Marquee pauseOnHover className="[--duration:60s]">
        {reviews.map((item, index) => (
            <ReviewCard 
                key={index} 
                name={item.name}
                title={item.title}
                description={item.desc}
            />
        ))}
      </Marquee>
    </div>
  );
}

import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const brand =
  "https://www.akiramediamarketing.com/assets/images/brands/remix.png";
const brandImages = Array(5).fill(brand);

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  image,
}: {
  image: string;
}) => {
  return (
    <div className="mx-20">
      <img
        src={image}
        alt="brand"
        height={200}
        width={200}
        className="flex-none h-8 sm:h-10 w-auto"
      />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex px-8 py-[72px] sm:py-24 w-full flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl">
    <h2 className="text-xl sm:text-center font-bold uppercase text-white">WE'VE WORKED WITH AMAZING BRANDS</h2>
      <Marquee pauseOnHover className="[--duration:20s] mt-10">
        {brandImages.map((image, index) => (
          <ReviewCard key={index} image={image} />
        ))}
      </Marquee>
      {/* <Marquee pauseOnHover reverse className="[--duration:20s] mt-10">
        {brandImages.map((image, index) => (
          <ReviewCard key={index} image={image} />
        ))}
      </Marquee> */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div> */}
    </div>
  );
}

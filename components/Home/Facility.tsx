import Image from "next/image";
import { Play } from "lucide-react";

const facilities = [
  {
    title: "Tennis",
    tags: ["9 Clay Courts", "4 Hard Courts"],
    image: "/Facility1.jpg",
    dark: true,
  },
  {
    title: "Accommodation",
    tags: ["5 Star Hotel"],
    image: "/Facility2.jpg",
    dark: true,
  },
  {
    title: "Fitness",
    tags: ["Gym", "Fitness Room"],
    image: "/Facility3.jpg",
  },
  {
    title: "Recovery",
    tags: ["Spa", "Pool", "Massage"],
    image: "/Facility4.jpg",
  },
];

export default function Facility() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div>
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold lg:text-[42px]">
              Facilities
            </h2>

            <span className="absolute -right-4 top-1 h-3 w-3 rounded-full bg-[#A7C520]" />
          </div>

          <p className="mt-4 max-w-sm text-sm leading-7 text-[#555] lg:text-[15px]">
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>

        {/* Top Cards */}
        <div className="relative z-20 mt-10 grid gap-10 md:grid-cols-2 lg:max-w-4xl">
          {facilities.slice(0, 2).map((item) => (
            <FacilityCard
              key={item.title}
              item={item}
              dark
            />
          ))}
        </div>
      </div>

      {/* Desktop Gradient Background */}
      <div className="absolute left-0 right-0 top-[340px] z-0 hidden h-[470px] lg:block">
        <div className="grid h-full grid-cols-2">
          <div className="bg-[#003D67]" />
          <div className="bg-[#6F9922]" />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.08]">
          <span className="text-[340px] font-black text-white">
            SSA
          </span>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="relative z-20 mx-auto mt-12 max-w-4xl px-6 lg:mt-28 lg:ml-auto lg:mr-32">
        <div className="grid gap-10 md:grid-cols-2">
          {facilities.slice(2).map((item) => (
            <FacilityCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({
  item,
  dark = false,
}: {
  item: {
    title: string;
    tags: string[];
    image: string;
  };
  dark?: boolean;
}) {
  return (
    <div>
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          width={450}
          height={350}
          className="
            h-[250px]
            w-full
            object-cover
            md:h-[300px]
            lg:h-[350px]
          "
        />

        <button
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            flex
            h-10
            w-10
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
          "
        >
          <Play
            size={12}
            className="ml-[2px] fill-current text-black"
          />
        </button>
      </div>

      {/* Title */}
      <h3
        className={`mt-5 text-[24px] font-semibold ${
          dark
            ? "text-black lg:text-white"
            : "text-black"
        }`}
      >
        {item.title}
      </h3>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1 text-[11px] ${
              dark
                 ? "bg-[#A7C520] text-white lg:bg-white lg:text-black"
    : "bg-[#A7C520] text-white"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p
        className={`mt-4 max-w-xs text-sm leading-7 ${
          dark
            ? "text-[#666] lg:text-white/90"
            : "text-[#666]"
        }`}
      >
        Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s.
      </p>
    </div>
  );
}
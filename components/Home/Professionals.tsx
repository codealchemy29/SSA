import Image from "next/image";

const professionals = [
  {
    name: "Craig Tiley",
    role: "CEO Tennis Australia & Australian Open",
    image: "/Expert1.jpg",
    featured: true,
  },
  {
    name: "Stephen Farrow",
    role: "Director - Tournament, Players & International Relations",
    image: "/Expert2.jpg",
    featured: false,
  },
  {
    name: "Cameron Pearson",
    role: "Head Major Events - Tennis Australia",
    image: "/Expert3.jpg",
    featured: false,
  },
];

export default function Professionals() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div>
            <div className="relative inline-block">
              <h2 className="text-[34px] font-bold leading-none text-black">
                Meet our professionals
              </h2>

              <span className="absolute -right-6 top-0 h-3 w-3 rounded-full bg-[#A7C520]" />
            </div>

            <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#555]">
              Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s,
            </p>
          </div>

          <button
            className="
              h-[48px]
              rounded-full
              bg-[#A7C520]
              px-10
              text-sm
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {professionals.map((person) => (
            <div key={person.name}>
              {/* Image */}
              <div
                className={`
                  overflow-hidden
                  rounded-lg
                  ${
                    person.featured
                      ? "border-[3px] border-[#2196F3]"
                      : ""
                  }
                `}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={400}
                  height={450}
                  className="h-[500px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Name */}
              <h3 className="mt-5 text-[22px] font-medium text-black">
                {person.name}
              </h3>

              {/* Role */}
              <p className="mt-2 max-w-[260px] text-[15px] italic leading-7 text-[#555]">
                {person.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import Image from "next/image";

const programs = [
  {
    title: "Academy",
    subtitle: "Live and train with us",
    image: "/program3.jpg",
    active: false,
  },
  {
    title: "Camps",
    subtitle: "Train like a pro with us",
    image: "/program1.jpg",
    active: false,
  },
  {
    title: "Performance",
    subtitle: "Elevate your game with us",
    image: "/program2.jpg",
    active: false,
  },
];

export default function Programs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="relative inline-block">
              <h2 className="text-4xl font-bold">
                Programs
              </h2>

              <span className="absolute -right-4 top-0 h-3 w-3 rounded-full bg-[#A7C520]" />
            </div>

            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it
              to make a type specimen book.
            </p>
          </div>

          <button className="rounded-full bg-[#A7C520] px-8 py-3 text-white transition hover:opacity-90">
            Register Now
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                h-[425px]
                group
                ${
                  program.active
                    ? "border-[3px] border-[#2196F3]"
                    : ""
                }
              `}
            >
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-8 z-10 px-8 text-center text-white">
                <h3 className="text-3xl font-medium">
                  {program.title}
                </h3>

                <p className="mt-3 text-lg text-white/90">
                  {program.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
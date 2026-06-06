import Image from "next/image";

const stats = [
  {
    value: "20",
    label: "Courts",
  },
  {
    value: "12",
    label: "Coaches",
  },
  {
    value: "17",
    label: "Years",
  },
  {
    value: "10",
    label: "Clubs",
  },
];

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-gray-700">
            To be the first venue in the world to have
            <span className="font-semibold text-[#A7C520]">
              {" "}
              60 multi surface courts
            </span>
            {" "}at one location and establish first one stop
            tennis academy in the Asia Pacific producing
            grand slam champions.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-8">
          <button className="border-b-2 border-[#A7C520] pb-2 font-semibold">
            About Us
          </button>

          <button className="pb-2 text-gray-400">
            Coaches
          </button>

          <button className="pb-2 text-gray-400">
            Vision
          </button>

          <button className="pb-2 text-gray-400">
            Mission
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="relative inline-block">
  <h2 className="text-4xl font-bold">
    About Us
  </h2>

  <span className="absolute -right-4 top-0 h-3 w-3 rounded-full bg-[#A7C520]" />
</div>

            <p className="mb-10 text-gray-600">
              To be the first venue in the world to have
              60 multi surface courts at one location and
              establish first one stop tennis academy in
              the Asia Pacific producing grand slam
              champions.
            </p>

            <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-4xl font-bold text-[#A7C520]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <button className="rounded-full bg-[#A7C520] px-8 py-3 text-white transition hover:opacity-90">
              Read More
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-3 gap-4">

  {/* Top Left - Large */}
  <div className="col-span-2">
    <Image
      src="/about1.jpg"
      alt="Image 1"
      width={700}
      height={300}
      className="h-[220px] w-full rounded-lg object-cover"
    />
  </div>

  {/* Top Right - Small */}
  <div>
    <Image
      src="/about2.jpg"
      alt="Image 2"
      width={300}
      height={300}
      className="h-[220px] w-full rounded-lg object-cover"
    />
  </div>

  {/* Bottom Left */}
  <div>
    <Image
      src="/about3.jpg"
      alt="Image 3"
      width={300}
      height={300}
      className="h-[220px] w-full rounded-lg object-cover"
    />
  </div>

  {/* Bottom Right - Large */}
  <div className="col-span-2">
    <Image
      src="/about4.jpg"
      alt="Image 4"
      width={700}
      height={300}
      className="h-[220px] w-full rounded-lg object-cover"
    />
  </div>

</div>
        </div>
      </div>
    </section>
  );
}
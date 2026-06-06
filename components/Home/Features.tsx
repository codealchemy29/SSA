const features = [
  "First venue in the world",

  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",

  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",

  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",

  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",

  "First one stop tennis academy in Asia Pacific",
];

export default function Features() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        backgroundImage: "url('/feature-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
  <div className="relative inline-block">
    <h2 className="text-4xl font-bold">
      Key Features
    </h2>

    <span className="absolute -right-4 top-0 h-3 w-3 rounded-full bg-[#A7C520]" />
  </div>

  <p className="mt-5 max-w-2xl text-gray-600">
    Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s.
  </p>
</div>
          <button className="rounded-full bg-[#A7C520] px-8 py-3 text-white transition hover:opacity-90">
            Register Now
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <span className="text-xl text-[#A7C520]">
                  →
                </span>

                <p className="leading-8 text-gray-700">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <span className="text-xl text-[#A7C520]">
                  →
                </span>

                <p className="leading-8 text-gray-700">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
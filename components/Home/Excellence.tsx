import Image from "next/image";

export default function Excellence() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        backgroundImage: "url('/wave-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="relative inline-block">
              <h2 className="text-4xl font-bold lg:text-5xl">
                A Glimpse of Excellence
              </h2>

              <span className="absolute -right-4 top-1 h-3 w-3 rounded-full bg-[#A7C520]" />
            </div>

            <p className="mt-4 text-gray-600">
              Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
          </div>

          <button className="rounded-full bg-[#A7C520] px-8 py-3 text-white transition hover:opacity-90">
            Register Now
          </button>
        </div>

        {/* Images */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.5fr]">
          {/* Left Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/excellence.jpg"
              alt="Tennis Player"
              width={500}
              height={700}
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/Excellence-1.jpg"
              alt="Tennis Courts"
              width={900}
              height={700}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
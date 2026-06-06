import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <Image
        src="/hero1.jpg"
        alt="SSA Hunter Valley"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-5xl px-6 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[6px]">
            SSA HUNTER VALLEY
          </p>

          <h1 className="mb-6 text-4xl font-light uppercase md:text-6xl lg:text-7xl">
            Grow Your Game With The
            <span className="block font-bold">
              Professionals
            </span>
          </h1>

          <div className="mb-8 inline-flex flex-wrap items-center gap-3 bg-[#A7C520]/80 px-8 py-3 text-sm font-semibold uppercase tracking-widest">
            <span>Adopt</span>
            <span>•</span>
            <span>Nurture</span>
            <span>•</span>
            <span>Deliver</span>
          </div>

          <div>
            <button className="rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black">
              Register Now
            </button>
          </div>
        </div>
      </div>


{/* Right Side Widget */}
<div
  className="
    absolute
    z-20
    w-[280px]
    sm:w-[300px]
    md:w-[320px]

    left-1/2
    -translate-x-1/2

    bottom-8

    lg:left-auto
    lg:bottom-auto
    lg:right-4
    lg:top-[58%]
    lg:translate-x-0
    lg:-translate-y-1/2
  "
>
  <div className="text-white">

    {/* WEATHER */}
    <div className="mb-2 flex items-center gap-2">
      <span className="text-[#A7C520] text-sm sm:text-base">
        {`<<`}
      </span>

      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
        Weather
      </span>

      <div className="h-[1px] flex-1 bg-[#A7C520]" />
    </div>

    {/* WEATHER CARD */}
    <div className="bg-[#97B11A]/80 p-4 sm:p-5 backdrop-blur-sm">
      <h3 className="mb-4 text-xl sm:text-2xl font-semibold">
        Hunter Valley
      </h3>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-5xl sm:text-7xl font-bold leading-none">
            19
          </span>

          <span className="align-top text-2xl sm:text-3xl">
            °C
          </span>
        </div>

        <div>
          <h4 className="text-xl sm:text-2xl font-semibold">
            Weather
          </h4>

          <p className="text-xs sm:text-sm opacity-90">
            Saturday, 8 pm
          </p>
        </div>
      </div>
    </div>

    {/* ONGOING MATCHES */}
    <div className="mt-4 sm:mt-6 flex items-center gap-2">
      <span className="text-[#A7C520] text-sm sm:text-base">
        {`<<`}
      </span>

      <span className="text-xs sm:text-sm font-bold uppercase whitespace-nowrap">
        Ongoing Matches
      </span>

      <div className="h-[1px] flex-1 bg-[#A7C520]" />
    </div>

    {/* SCORE */}
    <div className="mt-4 sm:mt-8 flex items-center gap-2">
      <span className="text-[#A7C520] text-sm sm:text-base">
        {`<<`}
      </span>

      <span className="text-xs sm:text-sm font-bold uppercase">
        Score
      </span>

      <div className="h-[1px] flex-1 bg-[#A7C520]" />
    </div>

  </div>
</div>

    </section>
  );
}
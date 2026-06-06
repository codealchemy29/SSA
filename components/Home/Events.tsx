import Image from "next/image";

export default function Events() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-8xl overflow-hidden">
        <div className="grid md:grid-cols-2">

          {/* COACHES */}
          <div className="relative h-[240px] overflow-hidden">

            <Image
              src="/Event1.jpg"
              alt="Our Coaches"
              fill
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/78" />

            {/* Content */}
            <div className="absolute left-10 top-10 z-10 text-white">
              <div className="relative inline-block">
                <h2 className="text-[28px] font-bold">
                  Our Coaches
                </h2>

                <span className="absolute -right-4 top-1 h-2.5 w-2.5 rounded-full bg-white" />
              </div>

              <p className="mt-4 max-w-[280px] text-sm leading-7 text-white/90">
                Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s,
              </p>

              <button className="mt-8 flex items-center gap-2 text-sm">
                Read More
                <span>→</span>
              </button>
            </div>
          </div>

          {/* EVENTS */}
          <div className="relative h-[240px] overflow-hidden bg-[#A7C520]">

            {/* Silhouette */}
            <Image
              src="/Event2.jpg"
              alt=""
              fill
              className="
                object-contain
                object-right
                opacity-20
                scale-90
              "
            />

            <div className="absolute left-10 top-10 z-10 text-white">
              <div className="relative inline-block">
                <h2 className="text-[28px] font-bold">
                  Events
                </h2>

                <span className="absolute -right-4 top-1 h-2.5 w-2.5 rounded-full bg-white" />
              </div>

              <p className="mt-4 max-w-[280px] text-sm leading-7 text-white/90">
                Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s,
              </p>

              <button className="mt-8 flex items-center gap-2 text-sm">
                Read More
                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
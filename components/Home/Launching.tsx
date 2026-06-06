import Image from "next/image";
import { MapPin } from "lucide-react";

const connectivity = [
  {
    place: "Hunter Valley Golf And Country Club",
    distance: "220m",
  },
  {
    place: "Rydges Resort Hunter Valley",
    distance: "550m",
  },
  {
    place: "Cessnock Airport",
    distance: "1.7km",
  },
  {
    place: "Cessnock CBD",
    distance: "7km",
  },
  {
    place: "Nulkaba Public School",
    distance: "4.8km",
  },
  {
    place: "Cessnock Hospital",
    distance: "7.3km",
  },
  {
    place: "Mcdonalds, KFC, Oporto",
    distance: "7km",
  },
];

export default function Launching() {
  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto overflow-hidden rounded-md">

        <div className="grid lg:grid-cols-[40%_60%]">

          {/* LEFT PANEL */}
          <div
            className="
              bg-gradient-to-r
              from-[#003B68]
              via-[#156B56]
              to-[#86AE1F]
              px-6
              py-8
              lg:px-10
              lg:py-10
            "
          >
            {/* Launching */}
            <p className="mb-4 text-sm uppercase tracking-wider text-white/90 lg:text-base">
              Launching
            </p>

            {/* Heading */}
            <h2 className="max-w-[450px] text-2xl font-bold leading-tight text-white lg:text-[34px]">
              Signature Slam Academy
              <br />
              Hunter Valley
            </h2>

            {/* Connectivity */}
            <h3 className="mt-8 text-xl font-semibold text-white lg:text-2xl">
              SSA Connectivity
            </h3>

            {/* List */}
            <div className="mt-6 space-y-4">
              {connectivity.map((item) => (
                <div
                  key={item.place}
                  className="flex items-center gap-3"
                >
                  <MapPin
                    size={14}
                    className="shrink-0 text-white"
                  />

                  <span className="text-xs text-white md:text-sm">
                    {item.place}
                  </span>

                  <div className="flex-1 border-b border-dashed border-white/30" />

                  <span className="text-xs text-white md:text-sm">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[600px]">
            <Image
              src="/launch3.jpg"
              alt="Hunter Valley"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
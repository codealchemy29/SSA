import Image from "next/image";

export default function Quote() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      {/* Background Image */}
      <Image
        src="/bg-12.jpg"
        alt="Background Pattern"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#E9ECF2]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="max-w-4xl">
          <h2 className="text-3l font-semibold leading-relaxed text-white md:text-5xl">
            “ We have created an environment ideal for
            building craft. Our goal is to be recognized
            as the best tennis performance centre in the
            world. ”
          </h2>

          <div className="my-10 h-px bg-white/60" />

          <div>
            <h3 className="text-2xl font-medium text-white">
              John Doe
            </h3>

            <p className="mt-2 text-lg text-white/80">
              Chairman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
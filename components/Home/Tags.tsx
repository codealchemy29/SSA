export default function Tags() {
  return (
    <section className="overflow-hidden py-10">
  <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">

    {[
      "ADOPT",
      "NURTURE",
      "DELIVER",
      "ADOPT",
      "NURTURE",
      "DELIVER",
    ].map((item, index) => (
      <div key={index} className="flex items-center gap-10">

        <span
          className={`text-5xl font-extrabold uppercase ${
            index % 2 === 0
              ? "text-[#A7C520]"
              : "text-transparent"
          }`}
          style={
            index % 2
              ? { WebkitTextStroke: "1.5px #A7C520" }
              : {}
          }
        >
          {item}
        </span>

        <span className="text-[#A7C520] text-2xl">
          •
        </span>

      </div>
    ))}

  </div>
</section>
  )
};
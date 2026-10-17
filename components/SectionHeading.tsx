type Props = {
  kicker: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  tone = "dark",
  align = "left",
}: Props) {
  const light = tone === "light";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.32em] ${
          light ? "text-gold" : "text-forest-emerald"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-4 font-serif text-4xl leading-[1.12] tracking-tight md:text-5xl ${
          light ? "text-parchment" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-[15px] leading-7 ${light ? "text-sage" : "text-mist"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

"use client";

type SectionHeaderProps = {
  eyebrow?: string; // النص الصغير مثل "About Olivion"
  title: string; // الجزء الأساسي من العنوان
  highlighted?: string; // الجزء الملون مثل "Interior Designs, Crafting"
  suffix?: string; // بقية العنوان بعد الجزء الملون
  align?: "left" | "center";
};

const SectionHeader = ({
  eyebrow,
  title,
  highlighted,
  suffix,
  align = "left",
}: SectionHeaderProps) => {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-6 ${
        isCenter
          ? "items-center text-center"
          : "lg:flex-row lg:items-end lg:justify-between"
      }`}
    >
      <div className={`w-full ${isCenter ? "" : "lg:w-1/3"} pt-4`}>
        {eyebrow && (
          <span className="GolosText inline-flex rounded-full border border-gray-400 px-6 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-600">
            {eyebrow}
          </span>
        )}
      </div>

      <div className={`w-full ${isCenter ? "" : "lg:w-2/3"}`}>
        <h1 className="CalSans max-w-[20ch] text-[clamp(2.4rem,5vw,5.8rem)] leading-[0.95] tracking-[-0.06em] text-neutral-950">
          {title}{" "}
          {highlighted && (
            <span className="text-[var(--prim)]">{highlighted}</span>
          )}{" "}
          {suffix}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeader;

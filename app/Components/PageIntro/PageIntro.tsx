"use client";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  desc?: string;
};

const PageIntro = ({ eyebrow, title, desc }: PageIntroProps) => {
  return (
    <div className="relative mb-16 border-b border-black/8 pb-12 sm:mb-20 sm:pb-14 lg:mb-24 lg:pb-16">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[var(--prim)]/70 via-[var(--prim)]/18 to-transparent" />

      <div className="grid grid-cols-1 gap-8 pl-5 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.72fr)] md:items-end md:gap-10 md:pl-8 lg:gap-14 lg:pl-10">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--prim)] sm:w-14" />
            <span className="GolosText text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--prim)] sm:text-xs">
              {eyebrow}
            </span>
          </div>

          <h2 className="GolosText mt-6 max-w-[13ch] text-[clamp(2.4rem,4.8vw,5.4rem)] leading-[0.94] tracking-[-0.055em] text-neutral-950">
            {title}
          </h2>
        </div>

        {desc && (
          <div className="max-w-[34rem] md:pb-2">
            <p className="GolosText text-[15px] leading-7 text-black/55 sm:text-base sm:leading-8">
              {desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageIntro;

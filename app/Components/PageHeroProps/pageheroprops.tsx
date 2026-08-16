"use client";

import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  backgroundImage: string;
  breadcrumbs?: BreadcrumbItem[];
  minHeight?: string;
  titleClassName?: string;
  containerClassName?: string;
  overlayClassName?: string;
  maxWidth?: string;
};

const PageHero = ({
  title,
  description,
  eyebrow,
  backgroundImage,
  breadcrumbs = [],
  minHeight = "min-h-[50vh] lg:min-h-[58vh]",
  titleClassName = "",
  containerClassName = "",
  overlayClassName = "",
  maxWidth = "max-w-[820px]",
}: PageHeroProps) => {
  return (
    <section
      className={`relative flex items-end overflow-hidden text-white ${minHeight}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(8,8,8,0.82), rgba(8,8,8,0.40), rgba(8,8,8,0.72)), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 ${overlayClassName}`}
      />

      <div
        className={`relative z-10 w-full px-5 pb-14 pt-28 sm:px-8 md:px-12 md:pb-20 md:pt-32 lg:px-[7%] lg:pb-24 lg:pt-36 ${containerClassName}`}
      >
        <div className={maxWidth}>
          {eyebrow && (
            <span className="GolosText text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs">
              {eyebrow}
            </span>
          )}

          <h1
            className={`mt-4 text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl ${titleClassName}`}
          >
            {title}
          </h1>

          {description && (
            <p className="GolosText mt-5 max-w-[48ch] text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              {description}
            </p>
          )}

          {breadcrumbs.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/75 sm:text-base">
              {breadcrumbs.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="flex items-center gap-2"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-all duration-300 hover:text-[var(--prim)]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="GolosText text-white">{item.label}</span>
                  )}

                  {index !== breadcrumbs.length - 1 && (
                    <i className="ri-arrow-right-wide-fill text-white/50" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;

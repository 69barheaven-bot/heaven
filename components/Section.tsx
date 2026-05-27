import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  titleJa?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, titleJa, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`fade-up px-5 py-14 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="mb-3 font-heading text-sm uppercase tracking-[0.22em] text-heaven-amber">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mb-6 font-heading text-4xl uppercase leading-none text-heaven-text sm:text-5xl">
          {title}
        </h2>
        {titleJa ? <p className="-mt-3 mb-7 text-lg font-semibold text-heaven-text">{titleJa}</p> : null}
        {children}
      </div>
    </section>
  );
}

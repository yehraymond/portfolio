interface SectionProps {
  // id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section
      id={title}
      className="flex flex-col mx-auto py-5 px-10 max-w-screen-lg scroll-mt-12"
    >
      <h2 className="font-bold uppercase tracking-widest dark:text-light">
        {title}
      </h2>
      {children}
    </section>
  );
}

const Section = ({ id, background, children }: SectionProps) => {
  return (
    <section id={id} className={`flex flex-wrap w-full h-full ${background}`}>
      {children}
    </section>
  );
};

export default Section;

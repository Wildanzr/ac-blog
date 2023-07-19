const Wrapper = ({ id, baseProps, secondProps, row = false, center, children, }: WrapperProps) => {
  return (
    <section id={id} className={`flex flex-col w-full h-full ${baseProps}`}>
      <div
        className={`flex flex-wrap w-full px-10 md:px-12 lg:px-26 max-w-screen-2xl 
        ${center ? "items-center justify-center" : ""}
        ${row ? "flex-row" : "flex-col"}
        ${secondProps}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Wrapper;

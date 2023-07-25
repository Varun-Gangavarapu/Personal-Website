const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-1g text-textGreen font-semibold flex items-center tracking-wide">
        4. What's Next
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        {" "}
        I am activly looking for any new oppertuinities to expand my horizons
        and provide value with my skillset. My inbox is always open, so feel
        free to contact me and I'll try my best to get back to you!{" "}
      </p>
      <a href="mailto:varunsaigangavarapu@gmail.com">
        <button
          className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md
         hover:bg-hoverColor duration-308"
        >
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;

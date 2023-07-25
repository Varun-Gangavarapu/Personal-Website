import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-16 mdl:py-32 flex flex-col gap-4
    lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-2xl font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-8xl font-titleFont font-semibold flex flex-col"
      >
        Varun Gangavarapu.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I like to build things.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-lg md:max-w-[750px] text-textDark font-medium"
      >
        {" "}
        I am a software engineer with multiple years of experience with
        technologies such as Java, Python, and the web-development toolstack. I
        have a strong foundation in Data Management and I am skilled in creating
        responsive full stack applications using React and its ecosystem.{" "}
        <Link href="#about">
          <span className=" text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span
              className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 
            transition-transform duration-500"
            ></span>
          </span>
        </Link>
      </motion.p>
      <a href="https://www.linkedin.com/in/varungangavarapu/">
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen 
      tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my LinkedIn!
      </motion.button>
      </a>
    </section>
  );
};

export default Banner;

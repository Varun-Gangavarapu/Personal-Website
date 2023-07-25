import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { easeIn, motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handlClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef. current
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 1g:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-14" src={logo} alt={"logo"} />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
              >
                <span className="text-textGreen">1. </span>
                About
              </motion.li>
            </Link>

            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
              >
                <span className="text-textGreen">2. </span>
                Experience
              </motion.li>
            </Link>

            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
              >
                <span className="text-textGreen">3. </span>
                Projects
              </motion.li>
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
              >
                <span className="text-textGreen">4. </span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/VarunResumeCurrent.pdf" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
              className="px-4 py-2 rounded-md text-textGreen text-[13x] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resumé
            </motion.button>
          </a>
        </div>
        {/* Small Icon Section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4x1 text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handlClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black
            bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbar-none bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    href="#about"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">1. </span>
                      About
                    </motion.li>
                  </Link>

                  <Link
                    href="#experience"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">2. </span>
                      Experience
                    </motion.li>
                  </Link>

                  <Link
                    href="#projects"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">3. </span>
                      Projects
                    </motion.li>
                  </Link>

                  <Link
                    href="#contact"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">4. </span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/VarunResumeCurrent.pdf" target="_blank">
                  <motion.button
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    className="px-4 py-2 rounded-md text-textGreen text-[13x] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resumé
                  </motion.button>
                </a>
                <div className="flex gap-7">
                  <a
                    href="https://github.com/Varun-Gangavarapu"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300"
                    >
                      <TbBrandGithub />
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/varungangavarapu/"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300"
                    >
                      <SlSocialLinkedin />
                    </span>
                  </a>

                  <a
                    href="mailto: varunsaigangavarapu@gmail.com"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300"
                    >
                      <HiOutlineMail />
                    </span>
                  </a>
                </div>
              </div>
              <a href="mailto: varunsaigangavarapu@gmail.com" target="_blank">
                <p className="text-sml w-72 mt-7 tracking-widest text-textGreen">
                  varunsaigangavarapu@gmail.com
                </p>
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

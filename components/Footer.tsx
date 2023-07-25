import { HiOutlineMail } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/Varun-Gangavarapu" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>

        <a href="https://www.linkedin.com/in/varungangavarapu/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>

        <a href="mailto: varunsaigangavarapu@gmail.com" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300">
            <HiOutlineMail />
          </span>
        </a>
    </div>
  );
};

export default Footer;

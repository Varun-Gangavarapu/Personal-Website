import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CSR = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Session Manager and Syllabus Creator{" "}
        <span className="text-textGreen tracking-wide">
          @Computer Science Remastered
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        September 2021 - May 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Managed and{" "}
            <span className="text-textLight">
              facilitated engaging sessions
            </span>{" "}
            for a 501(c)(3) non-profit organization, successfully{" "}
            <span className="text-textLight">
              teaching over 250 aspiring students
            </span>{" "}
            the
            <span className="text-textLight">
              {" "}
              fundamentals of computer science
            </span>{" "}
            and guiding them towards{" "}
            <span className="text-textLight">career opportunities</span> in the
            industry.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Created and{" "}
            <span className="text-textLight">
              delivered comprehensive courses
            </span>{" "}
            on{" "}
            <span className="text-textLight">
              Data Structures and Algorithms
            </span>{" "}
            and <span className="text-textLightFront-End Development"></span>{" "}
            equipping students with essential{" "}
            <span className="text-textLight">problem-solving skills </span>and a
            <span className="text-textLight">
              {" "}
              strong foundation in computer science
            </span>{" "}
            principles.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Organized a{" "}
            <span className="text-textLight">highly successful hackathon,</span>{" "}
            attracting over{" "}
            <span className="text-textLight">50 participants</span> and
            garnering{" "}
            <span className="text-textLight">recognition from NJ.com</span> and
            professionals in the field.
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default CSR;

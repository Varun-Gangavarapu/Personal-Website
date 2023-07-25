import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const BluePrint = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Associate in Computer Science Fellowship{" "}
        <span className="text-textGreen tracking-wide">@BluePrint</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        September 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Acquired <span className="text-textLight">proficiency</span> in{" "}
            <span className="text-textLight">
              Website Development and Management,
            </span>{" "}
            and the implementation of{" "}
            <span className="text-textLight">industry best practices.</span>{" "}
            Developed a deep understanding of{" "}
            <span className="text-textLight">React framework</span> and{" "}
            <span className="text-textLight">Networking with Firebase, </span>
            enabling the creation of{" "}
            <span className="text-textLight">
              dynamic and interactive web applications.
            </span>
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Benefited from{" "}
            <span className="text-textLight">invaluable mentorship </span>from{" "}
            <span className="text-textLight">accomplished professionals</span>
            who have made significant contributions at{" "}
            <span className="text-textLight">renowned companies </span>
            including{" "}
            <span className="text-textLight">
              LinkedIn, Palantir, and Snapchat.
            </span>
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Worked <span className="text-textLight">collaborativly</span> with
            other members selcted through{" "}
            <span className="text-textLight">selective application </span>
            process to give a presentation regarding the{" "}
            <span className="text-textLight">product management</span> process.
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default BluePrint;

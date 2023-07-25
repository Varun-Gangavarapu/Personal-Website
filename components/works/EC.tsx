import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const EC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Founding Manager of Computer Science Department{" "}
        <span className="text-textGreen tracking-wide">@Engineering Club</span>
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
            Delivered an{" "}
            <span className="text-textLight">interactive curriculum, </span>
            educidating various{" "}
            <span className="text-textLight">Engineering principles</span> to
            over <span className="text-textLight">50 students, </span>thereby
            enhancing my capacity to
            <span className="text-textLight">
              {" "}
              effectively communicate complex concepts.
            </span>
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Utilized advanced tools such as{" "}
            <span className="text-textLight">Arduino and Raspberry Pi </span>in
            the instruction of{" "}
            <span className="text-textLight">
              Computer Assisted Design (CAD),{" "}
            </span>
            leading to the successful creation of a basic{" "}
            <span className="text-textLight">remote-control car.</span>
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Pioneered the <span className="text-textLight">integration</span> of
            a novel <span className="text-textLight">Mobile App </span>segment
            into the club, contributing to the{" "}
            <span className="text-textLight">functionality enhancement</span> of
            the
            <span className="text-textLight"> remote-control car</span> project
            prior to graduation.
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default EC;

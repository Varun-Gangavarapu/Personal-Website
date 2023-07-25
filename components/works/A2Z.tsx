import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const A2Z = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Session Manager, Peer Leader, and Mentor{" "}
        <span className="text-textGreen tracking-wide">@A2Z Mentoring</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        September 2019 - March 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Coordinated and led{" "}
            <span className="text-textLight">one-third</span> of the{" "}
            <span className="text-textLight">academic sessions</span> for a
            501(c)(3) non-profit organization, demonstrating{" "}
            <span className="text-textLight">commitment</span> towards improving
            the <span className="text-textLight">academic success</span> of
            underprivileged children.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            <span className="text-textLight">Supervised</span> a team of over{" "}
            <span className="text-textLight">25 tutors</span> while{" "}
            <span className="text-textLight">overseeing</span> the{" "}
            <span className="text-textLight">syllabi</span> of numerous
            students, showcasing my{" "}
            <span className="text-textLight">effective management</span> and
            <span className="text-textLight"> organizational </span>skills.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Accumulated over{" "}
            <span className="text-textLight">85 hours of experience,</span>{" "}
            strengthening my abilities in{" "}
            <span className="text-textLight">leadership and education </span>
            through extensive hands-on engagement.
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default A2Z;

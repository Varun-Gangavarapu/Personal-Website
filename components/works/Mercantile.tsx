import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Mercantile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer Intern{" "}
        <span className="text-textGreen tracking-wide">
          @Mercantile Systems Inc.
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        September 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Developed a{" "}
            <span className="text-textLight">full-stack application</span> that
            enabled users to intuitively select{" "}
            <span className="text-textLight">1,000s of data points </span>
            from <span className="text-textLight">AWS S3</span> through a{" "}
            <span className="text-textLight">front-end interface </span> using
            work on{" "}
            <span className="text-textLight">
              HTML, CSS, Javascript, Flask,{" "}
            </span>{" "}
            and <span className="text-textLight">Docker.</span>{" "}
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Implemented{" "}
            <span className="text-textLight">8 machine learning</span> and{" "}
            <span className="text-textLight">statistical algorithms</span> with{" "}
            <span className="text-textLight">Python</span> using{" "}
            <span className="text-textLight">TenserFlow </span>and{" "}
            <span className="text-textLight">Pandas.</span> Leveraged historical
            data, achieving a
            <span className="text-textLight"> 8%-13% improvement</span> in
            prediction accuracy compared to existing methods.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Utilized <span className="text-textLight">PowerBi</span> to craft{" "}
            <span className="text-textLight">
              comprehensive reports, translating complex predictions
            </span>{" "}
            and <span className="text-textLight">statistical outputs</span> into{" "}
            <span className="text-textLight">digestible insights. </span>
            Delivered{" "}
            <span className="text-textLight">
              4 distinct reports, facilitating better decision-making
            </span>{" "}
            for employees.
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Mercantile;

import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Amneal = () => {
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
          @Amneal Pharmacuticals
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2023 - August 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Migrated <span className="text-textLight">100,000</span>s of data
            points from <span className="text-textLight">AWS data lake</span> to
            modify a <span className="text-textLight">visualization layer</span>{" "}
            of the <span className="text-textLight">supply chain pipeline</span>{" "}
            to <span className="text-textLight">optimize</span>{" "}
            inventory <span className="text-textLight">efficiency</span>.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Implemented{" "}
            <span className="text-textLight">statistical models</span> such as{" "}
            <span className="text-textLight">ARIMA</span>,{" "}
            <span className="text-textLight">Exponential Smoothing</span> and{" "}
            <span className="text-textLight">Time Series Regression</span> using{" "}
            <span className="text-textLight">API</span>’s like{" "}
            <span className="text-textLight">Pandas</span> and{" "}
            <span className="text-textLight">NumPy</span> in{" "}
            <span className="text-textLight">Python</span> to improve{" "}
            <span className="text-textLight">demand forecasting</span> by
            achieving an <span className="text-textLight">accuracy</span> of{" "}
            <span className="text-textLight">82%</span>.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Designed an <span className="text-textLight">automated script</span>{" "}
            in <span className="text-textLight">Python</span> that identified
            and{" "}
            <span className="text-textLight">terminated</span> unnecessary{" "}
            <span className="text-textLight">AWS EC2 server</span> instances,
            leading to a substantial{" "}
            <span className="text-textLight">reduction</span>{" "}
            in operational <span className="text-textLight">AWS costs</span>{" "}
            by <span className="text-textLight">12%</span>.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Collaborated with cross-functional teams and executive management
            understanding business needs to facilitate meetings with{" "}
            <span className="text-textLight">Google</span>,{" "}
            <span className="text-textLight">Amazon</span>,{" "}
            <span className="text-textLight">Microsoft</span>, and more to
            explore <span className="text-textLight">AI and Cloud
            Computing solutions</span>.
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Amneal;

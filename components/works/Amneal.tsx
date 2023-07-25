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
        Software Engineer{" "}
        <span className="text-textGreen tracking-wide">
          @Amneal Pharmacuticals
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Migrated{" "}
            <span className="text-textLight">100,000s of data points</span> from{" "}
            <span className="text-textLight">AWS data lake </span>
            to create a{" "}
            <span className="text-textLight">visualization layer</span> of the{" "}
            <span className="text-textLight">supply chain pipeline </span> to
            work on <span className="text-textLight">analytical forecasts</span>{" "}
            that{" "}
            <span className="text-textLight">
              generate 1,000,000s of dollars
            </span>{" "}
            in revenue by collaborating with cross-functional teams to
            understand business requirements and deliver effective
            <span className="text-textLight"> data visualization</span>{" "}
            solutions.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Implemented{" "}
            <span className="text-textLight">efficient API endpoints</span>{" "}
            using <span className="text-textLight">Postman</span> to{" "}
            <span className="text-textLight">streamline data retrieval</span>{" "}
            and <span className="text-textLight">processing </span>by{" "}
            <span className="text-textLight">reducing latency by 7.3%,</span>{" "}
            optimizing system performance and enhancing user experience.
            Conducted
            <span className="text-textLight"> comprehensive testing</span> and
            <span className="text-textLight"> debugging</span> to ensure{" "}
            <span className="text-textLight">seamless integration</span> and{" "}
            <span className="text-textLight">smooth operation</span> with
            external systems and applications
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Organized <span className="text-textLight">AI initiative</span> with{" "}
            <span className="text-textLight">Executive management</span> by
            working on a
            <span className="text-textLight"> forecasting model</span> in{" "}
            <span className="text-textLight">Python</span> to{" "}
            <span className="text-textLight">predict demand</span> while
            integrating tools from <span className="text-textLight">AWS </span>{" "}
            and <span className="text-textLight">Microsoft Azure</span> to
            further{" "}
            <span className="text-textLight">optimize data analysis</span> tools
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Amneal;

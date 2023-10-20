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
            Migrated{" "}
            <span className="text-textLight">100,000s of data points</span> from{" "}
            <span className="text-textLight">AWS data lake </span>
            to modify a{" "}
            <span className="text-textLight">visualization layer</span> of the{" "}
            <span className="text-textLight">supply chain pipeline </span> to
            optimize{" "}
            <span className="text-textLight">inventory efficiency</span> by
            collaborating with{" "}
            <span className="text-textLight">cross-functional teams</span> to
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
            Organized <span className="text-textLight">AI Initiative</span> with{" "}
            <span className="text-textLight">Executive Management</span> by
            implementing{" "}
            <span className="text-textLight">statistical models</span> such as{" "}
            <span className="text-textLight">ARIMA</span> and{" "}
            <span className="text-textLight">Time Series Regression</span> using
            numerous <span className="text-textLight">APIs</span> in{" "}
            <span className="text-textLight">Python</span> to greatly improve
            <span className="text-textLight"> demand forecasting</span> compared
            to historical predictions. Contacted{" "}
            <span className="text-textLight">billion dollar companies</span> in
            an effort to integrate more advanced{" "}
            <span className="text-textLight">AI driven insights.</span>
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Leveraged <span className="text-textLight">Python</span> to help
            create an <span className="text-textLight">automated script</span>{" "}
            that intelligently identified and terminated unnecessary
            <span className="text-textLight">
              {" "}
              Amazon EC2 server instances,
            </span>{" "}
            leading to a{" "}
            <span className="text-textLight">substantial reduction</span> in
            wastage and{" "}
            <span className="text-textLight">operational AWS costs</span> by{" "}
            <span className="text-textLight">12% </span> from previous month.
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Amneal;

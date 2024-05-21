import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const QuantFinance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Quantitative Developer{" "}
        <span className="text-textGreen tracking-wide">
          @Quantitative Finance Club
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2023 - April 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Developed a robust{" "}
            <span className="text-textLight">trading algorithm</span> using{" "}
            <span className="text-textLight">Python</span> on{" "}
            <span className="text-textLight">QuantConnect</span>, focusing on{" "}
            SPY, incorporating{" "}
            <span className="text-textLight">strategies</span> such as{" "}
            <span className="text-textLight">mean reversion</span> and{" "}
            <span className="text-textLight">momentum trading</span>.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Performed extensive{" "}
            <span className="text-textLight">back testing</span> to optimize
            parameters and validate the strategy on stock data from 2020-2021,{" "}
            <span className="text-textLight">outperforming</span> the S&P 500 by{" "}
            <span className="text-textLight">6%</span>.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Utilized technical{" "}
            <span className="text-textLight">indicators</span> including{" "}
            <span className="text-textLight">SMA</span> and{" "}
            <span className="text-textLight">EMA</span> for trend{" "}
            identification, <span className="text-textLight">RSI</span> for{" "}
            momentum analysis, and{" "}
            <span className="text-textLight">Bollinger Bands</span> for mean
            reversion, improving{" "}
            <span className="text-textLight">predictive accuracy</span> and{" "}
            <span className="text-textLight">trading efficiency</span>.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            Secured <span className="text-textLight">2nd Place</span> in the
            Salhotra Quant Challenge, a competition with over{" "}
            <span className="text-textLight">200 participants</span> sponsored
            by <span className="text-textLight">Jane Street</span> and{" "}
            <span className="text-textLight">
              Susquehanna International Group
            </span>
            .
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default QuantFinance;

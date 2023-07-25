import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amneal from "./works/Amneal";
import A2Z from "./works/A2Z";
import CSR from "./works/CSR";
import BluePrint from "./works/BluePrint";
import EC from "./works/EC";

const Experience = () => {
  const [workAmneal, setWorkAmneal] = useState(true);
  const [workCSR, setWorkCSR] = useState(false);
  const [workBluePrint, setWorkBluePrint] = useState(false);
  const [workEC, setWorkEC] = useState(false);
  const [workA2Z, setWorkA2Z] = useState(false);

  const handleAmneal = () => {
    setWorkAmneal(true);
    setWorkCSR(false);
    setWorkBluePrint(false);
    setWorkEC(false);
    setWorkA2Z(false);
  };

  const handleCSR = () => {
    setWorkAmneal(false);
    setWorkCSR(true);
    setWorkBluePrint(false);
    setWorkEC(false);
    setWorkA2Z(false);
  };

  const handleBluePrint = () => {
    setWorkAmneal(false);
    setWorkCSR(false);
    setWorkBluePrint(true);
    setWorkEC(false);
    setWorkA2Z(false);
  };

  const handleEC = () => {
    setWorkAmneal(false);
    setWorkCSR(false);
    setWorkBluePrint(false);
    setWorkEC(true);
    setWorkA2Z(false);
  };

  const handleA2Z = () => {
    setWorkAmneal(false);
    setWorkCSR(false);
    setWorkBluePrint(false);
    setWorkEC(false);
    setWorkA2Z(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have worked" titleNum="2. " />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-64 flex flex-col">
          <li
            onClick={handleAmneal}
            className={`${
              workAmneal
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent 
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Amneal Pharmacuticals
          </li>

          <li
            onClick={handleCSR}
            className={`${
              workCSR
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent 
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Computer Science Remastered
          </li>

          <li
            onClick={handleBluePrint}
            className={`${
              workBluePrint
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent 
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            BluePrint
          </li>

          <li
            onClick={handleEC}
            className={`${
              workEC
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent 
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Engineering Club
          </li>

          <li
            onClick={handleA2Z}
            className={`${
              workA2Z
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent 
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            A2Z Mentoring
          </li>
        </ul>
        {workAmneal && <Amneal />}
        {workCSR && <CSR />}
        {workBluePrint && <BluePrint />}
        {workEC && <EC />}
        {workA2Z && <A2Z />}
      </div>
    </section>
  );
};

export default Experience;

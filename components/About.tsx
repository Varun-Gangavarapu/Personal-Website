import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title=" About Me" titleNum="1." />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            From my high school days,{" "}
            <span className="text-textGreen">
              teaching computer science to more than 50 kids,{" "}
            </span>{" "}
            I was captivated by the world of computer science. I saw it as a
            race, a thrilling pursuit where{" "}
            <span className="text-textGreen">
              every solution led to a new, more complex challenge.{" "}
            </span>
          </p>
          <p>
            At Rutgers University my passion intensified as, I{" "}
            <span className="text-textGreen">
              dove into my studies and personal projects,
            </span>{" "}
            realizing that striving for the ideal software was a marathon,
            demanding endurance, adaptability, and an insatiable quest for
            knowledge.
          </p>
          <p>
            The next milestone in my journey was an{" "}
            <span className="text-textGreen">
              internship at Amneal Pharmaceuticals.
            </span>{" "}
            where I navigated the complexities of a large corporation, working
            on{" "}
            <span className="text-textGreen">
              analytics for large datasets{" "}
            </span>
            and making tangible impacts. This real-world experience reaffirmed
            how far I had come in my race, while reminding me of the journey
            ahead.
          </p>
          <p>
            Looking ahead, I know the journey doesn&apos;t end. The finish line is
            <span className="text-textGreen"> ever-evolving,</span> the
            challenges continue to transform, and my appetite for learning and
            growth amplifies. I eagerly{" "}
            <span className="text-textGreen">
              anticipate the future, with all its opportunities{" "}
            </span>
            for the next thrilling leg of this ongoing expedition.
          </p>
          <p>
            Here are a few <span className="text-textGreen">technologies</span>{" "}
            I have been working with recently:
          </p>
          <ul className="max-w-[700px] text-sm font-titleFont grid grid-cols-4 gap-3 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                {" "}
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+){" "}
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                {" "}
                <AiFillThunderbolt />
              </span>
              React.js{" "}
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                {" "}
                <AiFillThunderbolt />
              </span>
              AWS{" "}
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                {" "}
                <AiFillThunderbolt />
              </span>
              Java{" "}
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                {" "}
                <AiFillThunderbolt />
              </span>
              Python{" "}
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                {" "}
                <AiFillThunderbolt />
              </span>
              SQL{" "}
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                {" "}
                <AiFillThunderbolt />
              </span>
              Express.js{" "}
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                {" "}
                <AiFillThunderbolt />
              </span>
              Go{" "}
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-[27rem] relative group">
          <div className="absolute w-full h-[27rem] -left-3 -top-2 rounded-xl">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-xl h-full object-cover max-w-[320px] "
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-[27rem] bg-imgCover/40 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-[27rem] absolute top-3 left-3 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

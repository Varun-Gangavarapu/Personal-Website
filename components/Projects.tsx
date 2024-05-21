import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { project1, project2 } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

// Update links for the projects
const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I Have Built" titleNum="3. " />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* Fill the href with the link to the project */}
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-lg"
                  src={project1}
                  alt="Vector Database Image"
                />
                <div className="hidden lgl:inline-block absolute w-full h-full bg-imgCover/40 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full h-4/5 mt-7 xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Vector Based Spotify Reccomendation Engine
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                An innovative music recommendation engine that utilizes vector
                databases and machine learning to analyze users' emotional
                responses to song lyrics, offering personalized playlists based
                on mood and sentiment.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Python</li>
                <li>Flask</li>
                <li>Pinecone</li>
                <li>Spotify API</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
              </ul>
              <div className="text-2xl flex gap-4">
                {/* Fill the href with the link to the project github*/}
                <a href="https://github.com/Varun-Gangavarapu/VectorDatabaseMoodAnalysis" target="_blank">
                  <span
                    className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
                                hover:-translate-y-2 transition-all duration-300"
                  >
                    <TbBrandGithub />
                  </span>
                </a>
                {/* Fill the href with the link to the project */}
                {/* <a href="" target="_blank">
                  <span
                    className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
                                hover:-translate-y-2 transition-all duration-300"
                  >
                    <RxOpenInNewWindow />
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            {/* Fill the href with the link to the project */}
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                  src={project2}
                  alt="Project 2 Image"
                />
                <div className="hidden lgl:inline-block absolute w-full h-full bg-imgCover/40 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full h-4/5 mt-7 xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Course Reveal</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                A digital platform that connects students by allowing them to
                sign in and discover peers who have taken the same classes,
                encompassing a vast database of over 10,000 courses.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Tailwind.css</li>
                <li>Python</li>
                <li>Flask</li>
                <li>AWS</li>
              </ul>
              <div className="text-2xl flex gap-4">
                {/* Fill the href with the link to the project github*/}
                <a href="" target="_blank">
                  <span
                    className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
                                hover:-translate-y-2 transition-all duration-300"
                  >
                    <TbBrandGithub />
                  </span>
                </a>
                {/* Fill the href with the link to the project */}
                <a href="" target="_blank">
                  <span
                    className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
                                hover:-translate-y-2 transition-all duration-300"
                  >
                    <RxOpenInNewWindow />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

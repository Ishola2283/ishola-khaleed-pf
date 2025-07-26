import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCoreldraw } from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";
const Skills = () => {
  return (
    <div>
      <section id="skills" className="p-20 bg-[#000000] ">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-center items-center text-center max-w-[600px] mx-auto max-tablet:text-[30px] ">
            <h1 className="text-white pt-20 mb-12 text-[40px]  font-medium max-tablet:text-[25px] max-tablet:mt-[-20px]">
              <span className="text-emerald-400 font-bold">My Background</span>{" "}
              Skills and Tools
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div>
              <div className="flex items-center gap-3 ">
                <FaReact color="#00D68F" size={35} />
                <h1 className="text-white text-2xl">React.js</h1>
              </div>
              <div className="bg-emerald-600 h-[40px] rounded-full mt-4  w-[300px]">
                <div className="bg-emerald-400 h-[40px] w-[190px]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <IoLogoJavascript color="#00D68F" size={35} />

                <h1 className="text-white text-2xl">JavaScript</h1>
              </div>
              <div className="bg-emerald-600 h-[40px] rounded-full mt-4  w-[300px]">
                <div className="bg-emerald-400 h-[40px] w-[150px]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <SiAdobephotoshop color="#00D68F" size={35} />
                <h1 className="text-white text-2xl">Adobe Photoshop</h1>
              </div>
              <div className="bg-emerald-600 h-[40px] rounded-full mt-4  w-[300px]">
                <div className="bg-emerald-400 h-[40px] w-[230px]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <SiAdobeillustrator color="#00D68F" size={35} />
                <h1 className="text-white text-2xl">Adobe Illustrator</h1>
              </div>
              <div className="bg-emerald-600 h-[40px] rounded-full mt-4  w-[300px]">
                <div className="bg-emerald-400 h-[40px] w-[160px]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <SiCoreldraw color="#00D68F" size={35} />
                <h1 className="text-white text-2xl">Corel-Draw</h1>
              </div>
              <div className="bg-emerald-600 h-[40px] rounded-full mt-4  w-[300px]">
                <div className="bg-emerald-400 h-[40px] w-[250px]"></div>
              </div>
            </div>
          </div>
          <div className=" text-white  flex  items-center mt-20 mb-5 max-tablet:flex-col  ">
            <div className="mb-4">
              <h1 className="font-semibold text-[40px] max-tablet:text-[25px] mb-4 ">
                Other Skills
              </h1>
              <h2 className="flex items-center gap-3 text-2xl mb-3 max-tablet:text-[18px]">
                <FaArrowCircleRight color="#00D68F" />
                TypeScript, Nodejs, Express, Mongo DB.
              </h2>
              <h2 className="flex items-center gap-3 text-2xl mb-3 max-tablet:text-[18px]">
                <FaArrowCircleRight color="#00D68F" />
                HTML, CSS, Tailwind CSS
              </h2>
              <h2 className="flex items-center gap-3 text-2xl mb-3 max-tablet:text-[18px]">
                <FaArrowCircleRight color="#00D68F" />
                Moition Graphics-Basic
              </h2>
              <h2 className="flex items-center gap-3 text-2xl mb-3 max-tablet:text-[18px]">
                <FaArrowCircleRight color="#00D68F" />
                Video Editing-Basic
              </h2>
              <h2 className="flex items-center gap-3 text-2xl mb-3 max-tablet:text-[18px]">
                <FaArrowCircleRight color="#00D68F" />
                Drawing, Painting
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

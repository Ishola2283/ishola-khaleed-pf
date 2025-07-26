import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className=" bg-[#ffffff] p-20">
      <div className="flex max-w-[1280px] mx-auto justify-between items-center max-tablet:flex-col max-tablet:text-center  ">
        <div className="w-[70%]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-[40px] font-bold mb-5 text-emerald-400 max-tablet:text-[30px]"
            >
              Ishola Khaleed
            </motion.h1>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-[18px] font-medium mb-8 max-tablet:text-[15px] max-tablet:mt-[-12px]"
            >
              Creative Designer | Freelance Visual Branding Specialist |
              Software Developer (React, Tailwind CSS) | Bridging Design & Tech
              for Impact
            </motion.h3>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-[600px] mb-8 max-tablet:text-[15px]  "
            >
              Ishola Khaleed a passionate creative with years of experience in
              graphic design, specializing in visual brand identity and digital
              content. Currently, I'm expanding my skills into software
              development, combining design thinking with technical solutions.
              I’m focused on building clean, user-friendly interfaces and
              scalable web applications. Let's create, build, and solve real
              problems through design and code.
            </motion.p>
          </div>
          <div>
            <h1 className="text-[20px] text-emerald-400 font-medium mb-5  ">
              Experience Highlights
            </h1>
            <p className="mb-3 max-tablet:text-[15px] ">
              - Designed and delivered brand identity systems, proposals, and
              roll-up banners for various businesses — including hands-on
              implementation
            </p>
            <p className="mb-3 max-tablet:text-[15px] max-tablet:mt-[-15px]">
              - Freelanced as a creative brand designer working closely with
              clients to define and express their brand visually
            </p>
            <p className="mb-3 max-tablet:text-[15px] max-tablet:">
              - Played a central role in group projects at Sail Innovation Lab —
              leading the visual design and branding direction for collaborative
              presentations
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-emerald-400 font-medium mb-5  ">
              Education & Certifications
            </h1>
            <p className="mb-4 max-tablet:text-[15px] ">
              - National Diploma (Upper Credit) – Art & Industrial Design, Lagos
              State Polytechnic, Ikorodu
            </p>
            <p className="mb-4 max-tablet:text-[15px] ">
              - WAEC Certificate – Homat Group of Schools, Agric, Ikorodu
            </p>
            <p className=" max-tablet:text-[15px] ">
              - Various online design & development courses (self-paced)
            </p>
          </div>
        </div>
        <div id="mypic">
          <img
            className="max-tablet:h-[400px] mx-auto "
            src="./my photo edit.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default About;

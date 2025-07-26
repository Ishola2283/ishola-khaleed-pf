import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const images = [
  "/piggy.jpg",
  "/meta.jpg",
  "/moove.jpg",
  "/Trade-Link Logo.jpg",
  "/colors.jpg",
  "/flyers.jpg",
  "/cloth brand.jpg",
  "/navada brand.jpg",
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <section id="projects" className="  text-center p-20 bg-white">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-15 text-emerald-400">
            Projects & Design <span className="text-black">Preview</span>
          </h1>

          {/* Slideshow */}
          <div className="relative w-full  h-[650px]  rounded-3xl overflow-hidden shadow-lg max-tablet:h-[300px] max-tablet:w-[450px]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Prev & Next Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full shadow-md"
            >
              <FaArrowAltCircleLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full shadow-md"
            >
              <FaArrowAltCircleRight size={24} />
            </button>
          </div>
        </div>

        {/* Projects Links Heading */}
        <h1 className="text-black text-3xl font-semibold mt-16 ">
          Projects Links
        </h1>
      </section>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-4 pb-20">
        {[
          {
            title: "PiggyVest",
            desc: "Re-creating the Piggyvest web App using React.js",
            live: "https://piggy-clone.vercel.app/",
            github: "https://github.com/Ishola2283/Piggy-vest-clone-React.git",
          },
          {
            title: "Meta-App",
            desc: "Re-creating the Meta web App using HTML and CSS",
            live: "https://ishola2283.github.io/meta-webpage/",
            github: "https://github.com/Ishola2283/meta-webpage.git",
          },
          {
            title: "Moove-App",
            desc: "Re-creating the Moove web App using HTML and CSS",
            live: "https://ishola2283.github.io/moove-re-create/",
            github: "https://github.com/Ishola2283/moove-re-create.git",
          },
          {
            title: "Coolors-App",
            desc: "Re-creating the Coolors web App using HTML and CSS",
            live: "https://ishola2283.github.io/webpage/",
            github: "https://github.com/Ishola2283/webpage.git",
          },
          {
            title: "TradeLink-App",
            desc: "Team Project | Ongoing - Tradelink is a B2B platform we're building to connect wholesalers and retailers, making trade easier through smart product listing, order management, and secure transactions.",
          },
        ].map((proj, i) => (
          <div
            key={i}
            className="bg-emerald-400 rounded-3xl w-full max-w-[300px] p-6 shadow-md"
          >
            <h1 className="font-semibold text-2xl mb-2">{proj.title}</h1>
            <hr className="mb-2" />
            <h2 className="text-[15px] text-left font-medium mb-4">
              {proj.desc}
            </h2>
            <hr className="mb-2" />
            {proj.live && (
              <a
                href={proj.live}
                className="flex items-center gap-2 text-sm mb-2 hover:text-white transition-transform hover:translate-x-2"
                target="_blank"
              >
                <FaArrowAltCircleRight />
                Live Link
              </a>
            )}
            {proj.github && (
              <a
                href={proj.github}
                className="flex items-center gap-2 text-sm hover:text-white transition-transform hover:translate-x-2"
                target="_blank"
              >
                <FaArrowAltCircleRight />
                GitHub Link
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

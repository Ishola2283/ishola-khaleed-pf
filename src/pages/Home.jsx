import { motion } from "framer-motion";
import { FaFan } from "react-icons/fa";

function Home() {
  const backgroundStyle = {
    backgroundImage: "url('/side-shot.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(5px) brightness(45%)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  };

  return (
    <section
      id="home"
      className="  flex flex-col justify-center items-center w-[100%] p-64 text-center bg-[#000000]"
      style={{
        position: "relative",
      }}
    >
      <div style={backgroundStyle}></div>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[100px] relative z-1 font-bold mb-13 text-white max-w-[700px] leading-24 max-tablet:text-[60px] max-tablet:leading-18"
        >
          Crafting Pixels <span className="text-emerald-400">&</span> Pushing
          Codes
        </motion.h1>
      </div>
      <div>
        <button className="px-15 py-5 text-[17px] relative z-1 bg-emerald-400 flex items-center gap-2 transform hover:scale-105 transition-all font-medium rounded-full max-tablet:px-9 ">
          <FaFan className="spin" size={25} />
          welcome to my space
        </button>
      </div>
    </section>
  );
}

export default Home;

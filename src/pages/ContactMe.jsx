import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="bg-[#000000]">
      <section
        id="contactme"
        className=" max-w-[1280px] justify-center items-center mx-auto pt-[50px]  "
      >
        <h2 className="text-4xl text-emerald-400 mt-50  font-bold mb-9 max-tablet:text-center">
          Get In Touch
        </h2>
        <p className="text-white text-2xl mb-7 max-w-[600px] max-tablet:text-center max-tablet:text-[20px] max-tablet:max-w-[400px] max-tablet:mx-auto ">
          Have a project in mind or just want to connect? I’m open to
          opportunities, collaborations, and freelance gigs. Let’s build
          something great together!
        </p>
        <a
          href="/mycv.pdf"
          download
          className="inline-block bg-emerald-400 mb-10 mt-8 text-black px-8 py-4 rounded-full hover:bg-white transition duration-300 max-tablet:flex max-tablet:w-max max-tablet:items-center max-tablet:mx-auto"
        >
          Download My CV
        </a>
        <a
          className="flex w-max items-center gap-2 bg-emerald-400 mb-10  text-black px-8 py-4 rounded-full hover:bg-white transition duration-300 max-tablet:flex max-tablet:w-max max-tablet:items-center max-tablet:mx-auto"
          href="mailto:olamilekan2283@gmail.com"
        >
          <BiLogoGmail size={20} /> Send me an Email
        </a>
        <div>
          <a
            className=" flex w-max items-center gap-2 bg-emerald-400 mb-40 mt-8 text-black px-8 py-4 rounded-full hover:bg-white transition duration-300 max-tablet:flex max-tablet:w-max max-tablet:items-center max-tablet:mx-auto"
            href="https://wa.me/2349083041224"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp size={20} />
            WhatsApp
          </a>
        </div>
      </section>
      <div>
        <footer className="bg-emerald-400 text-black py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Ishola Khaleed. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-xl">
              <a
                href="https://github.com/Ishola2283"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ishola-khaleed/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;

import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-center space-x-2 bg-[#f2f3f4] p-4 dark:bg-neutral-800">
      <a
        className="flex items-center transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out md:text-xl xl:text-3xl"
        href="https://github.com/ChunWenHsueh"
      >
        <FaGithub className="h-6 w-6" />
      </a>
      <a
        className="flex items-center transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out md:text-xl xl:text-3xl"
        href="https://www.linkedin.com/in/chun-wen-hsueh/"
      >
        <FaLinkedin className="h-6 w-6" />
      </a>
      <a
        className="flex items-center transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out md:text-xl xl:text-3xl"
        href="./Chun_Wen_Hsueh_Resume.pdf"
      >
        <FaFileDownload className="h-6 w-6" />
      </a>
    </footer>
  );
}

export default Footer;

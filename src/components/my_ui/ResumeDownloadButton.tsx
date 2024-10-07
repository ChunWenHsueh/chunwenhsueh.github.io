import { FaFileDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function ResumeDownloadButton() {
  return (
    <Button
      className="p-0 transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out"
      variant="link"
    >
      <a
        className="lg:2xl flex items-center space-x-2 text-lg font-semibold md:text-xl xl:text-3xl"
        href="./Chun_Wen_Hsueh_Resume.pdf"
      >
        <FaFileDownload className="h-10 w-10" />
        <div>Resume</div>
      </a>
    </Button>
  );
}

export default ResumeDownloadButton;

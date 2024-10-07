import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaExternalLinkAlt } from "react-icons/fa";

function Experience() {
  return (
    <div
      id="experience"
      className="flex h-lvh flex-col justify-center space-y-2 p-4 md:p-16"
    >
      <div>
        <h2 className="text-3xl font-bold md:text-4xl">Education</h2>
        <Separator className="my-2 w-2/5 md:w-1/3" />
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 bg-white md:h-20 md:w-20">
            <AvatarImage src="/Northeastern_seal.png" />
            <AvatarFallback>NEU</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold md:text-2xl">
              Northeastern University
            </h3>
            <h4 className="text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
              Align M.S. in Computer Science
            </h4>
            <h4 className="text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
              Sep. 2024 - Present
            </h4>
          </div>
        </div>
        <div className="flex items-center space-x-4 py-4">
          <Avatar className="h-16 w-16 bg-white md:h-20 md:w-20">
            <AvatarImage src="/National_Taiwan_University_seal.png" />
            <AvatarFallback>NTU</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold md:text-2xl">
              National Taiwan University
            </h3>
            <h4 className="text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
              B.S. in Mathematics, B.A. in Economics
            </h4>
            <h4 className="text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
              Sep. 2018 - June 2023
            </h4>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold md:text-4xl">Experience</h2>
        <Separator className="my-2 w-2/5 md:w-1/3" />
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 md:h-20 md:w-20"
            src="/dila.png"
            alt="Dila"
          ></img>
          <div className="flex flex-col">
            <div className="flex items-center">
              <h3 className="text-xl font-bold md:text-2xl">
                Dila: Connect Through Music
              </h3>
              <button className="px-2 transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out">
                <a href="https://apps.apple.com/us/app/dila-connect-through-music/id6478120257">
                  <FaExternalLinkAlt className="h-5 w-5" />
                </a>
              </button>
            </div>
            <h4 className="text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
              Software Engineer
            </h4>
            <h4 className="text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
              Focused on optimizing data handling and enhancing user experience
            </h4>
            <h4 className="text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
              May 2024 - July 2024
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

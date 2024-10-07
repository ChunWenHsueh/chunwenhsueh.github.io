import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./mode-toggle";
import { ModeToggleMobile } from "./mode-toggle-mobile";

export default function NavBar() {
  return (
    <nav className="bg-background fixed inset-x-0 top-0 z-50 shadow-sm backdrop-blur-sm dark:shadow-neutral-200/40">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => window.location.replace("/#about")}
          className="text-2xl font-bold transition-opacity hover:opacity-70"
        >
          cwHsueh
        </button>
        <div className="flex md:hidden">
          <ModeToggleMobile></ModeToggleMobile>
        </div>
        <div className="hidden md:flex">
          <div className="flex h-8 items-center justify-end space-x-2">
            <Button
              variant="link"
              onClick={() => window.location.replace("/#about")}
              className="font-semibold transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out"
            >
              About
            </Button>
            <Button
              variant="link"
              onClick={() => window.location.replace("/#experience")}
              className="font-semibold transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out"
            >
              Experience
            </Button>
            <Button
              onClick={() => window.location.replace("/#project")}
              variant="link"
              className="font-semibold transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out"
            >
              Project
            </Button>
            <Button
              variant="link"
              className="transition duration-200 hover:scale-110 hover:ease-out active:scale-90 active:ease-out"
            >
              <a href="./Chun_Wen_Hsueh_Resume.pdf" className="font-semibold">
                Resume
              </a>
            </Button>
            <Separator orientation="vertical" className="w-[2px]" />
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </div>
    </nav>
  );
}

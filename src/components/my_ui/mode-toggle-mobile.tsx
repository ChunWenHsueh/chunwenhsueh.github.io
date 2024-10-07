import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ui/theme-provider";
import { CiMenuKebab } from "react-icons/ci";

export function ModeToggleMobile() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <CiMenuKebab className="min-h-5 min-w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => window.location.replace("/#about")}
            className="h-9 font-semibold"
          >
            About
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => window.location.replace("/#experience")}
            className="h-9 font-semibold"
          >
            Experience
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => window.location.replace("/#project")}
            className="h-9 font-semibold"
          >
            Project
          </DropdownMenuItem>

          <a href="./Chun_Wen_Hsueh_Resume.pdf">
            <DropdownMenuItem className="h-9 font-semibold">
              Resume
            </DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="h-9" onClick={() => setTheme("light")}>
            <div className="flex items-center gap-2 font-semibold">
              <FaRegSun />
              Light
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-9" onClick={() => setTheme("dark")}>
            <div className="flex items-center gap-2 font-semibold">
              <FaRegMoon />
              Dark
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

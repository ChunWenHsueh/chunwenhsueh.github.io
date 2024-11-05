import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "./components/my_ui/NavBar";
import Hero from "./components/my_ui/Hero";
import Experience from "./components/my_ui/Experience";
import Project from "./components/my_ui/Projects";
import Footer from "./components/my_ui/Footer";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {NavBar()}
      <div className="flex h-screen flex-col">
        <div className="h-screen">{Hero()}</div>
        <div className="h-screen">{Experience()}</div>
        <div className="relative flex h-screen flex-col">
          {Project()}
          <div className="absolute inset-x-0 bottom-0">{Footer()}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

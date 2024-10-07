"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Contact from "@/components/my_ui/Contact";

const about_me_1 = "Hi, I'm Chun-Wen.";
const about_me_2 =
  "I'm currently pursuing a master's degree in computer science at Northeastern University.";
const about_me_3 =
  "Looking for 2025 summer SDE intern role. Feel free to contact me.";
function Hero() {
  return (
    <div id="about" className="flex h-screen bg-[#f2f3f4] dark:bg-neutral-800">
      <div className="relative flex w-3/5 flex-col justify-center p-10">
        <TextGenerateEffect words={about_me_1} />
        <TextGenerateEffect words={about_me_2} />
        <TextGenerateEffect words={about_me_3} />
        {Contact()}
      </div>
      <div
        className="relative h-full w-2/5 bg-contain bg-fixed bg-right bg-no-repeat"
        style={{ backgroundImage: "url(./fade_portrait.png)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent from-70% to-[#f2f3f4] dark:to-neutral-800"></div>
      </div>
    </div>
  );
}

export default Hero;

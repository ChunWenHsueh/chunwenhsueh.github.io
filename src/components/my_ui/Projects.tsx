import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { FaYoutube } from "react-icons/fa";

const Projects = [
  {
    id: 0,
    title: "",
    skills: [],
    description: "",
    src: "",
    alt: "",
    more: Array.from({ length: 4 }, () => ""),
  },
  {
    id: 1,
    title: "Personal Website",
    skills: ["Tailwind", "React"],
    description:
      "A react based website, showcasing my projects and passion for software development",
    src: "./personal_website_screenshot.jpeg",
    alt: "personal website",
    more: [
      "Developed a personal website using React for dynamic front-end functionality",
      // "Implemented responsive design techniques to ensure optimal viewing on various devices",
      "Leveraged a combination of React, Vite and Tailwind CSS to build a visually appealing and technically proficient personal website",
    ],
  },
  {
    id: 2,
    title: "Gesture Recognition System",
    skills: ["Python", "CNN"],
    youtube_link: "https://youtu.be/atW7UJwFIr8",
    description: "A CNN based rock paper scissors game",
    src: "./Gesture_Recognition.jpg",
    alt: "system",
    more: [
      "Designed user interface with animation by OpenCV",
      "Employed a Convolutional Neural Network (CNN) for hand gesture recognition, achieving 70% accuracy",
    ],
  },
  {
    id: 3,
    title: "Car Speed Tracking System",
    skills: ["Python", "OpenCV"],
    youtube_link: "https://youtu.be/pKf4xWdj0Z4",
    description: "Analyzing car speed through video frame by frame",
    src: "./car_speed.jpeg",
    alt: "car",
    more: [
      "Developed an algorithm to track the speed of the cars by analysing the video frames",
      "Reduced noise in each frame to enhance the accuracy of car recognition",
    ],
  },
];

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Project() {
  const [hoveredId, setHoveredId] = useState(0);

  return (
    <div
      id="project"
      className="hidden h-screen bg-[#f2f3f4] p-16 dark:bg-neutral-800 md:flex"
    >
      <div className="flex w-1/2 flex-col justify-center">
        <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
        <Separator className="my-2 w-2/5 md:w-1/3" />
        {Projects.slice(1).map((item) => (
          <motion.div
            className="relative my-2 flex w-5/6 items-center space-x-4 rounded-lg bg-white px-4 py-3 shadow-xl dark:bg-[#373737]"
            whileHover={{ scale: 0.97 }}
            onHoverStart={() => setHoveredId(item.id)}
            onHoverEnd={() => setHoveredId(0)}
            key={item.id}
          >
            <img className="w-32" src={item.src} alt={item.alt} />
            <div className="flex w-full flex-col items-start">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <div className="flex space-x-1">
                {item.skills.map((skill, index) => (
                  <h4
                    className="rounded-lg bg-[#f2f3f4] px-1 py-0.5 text-sm dark:bg-black"
                    key={index}
                  >
                    {skill}
                  </h4>
                ))}
              </div>
              <h4 className="text-base">{item.description}</h4>
            </div>
            {item.youtube_link ? (
              <a href={item.youtube_link} className="absolute bottom-0 right-0">
                <FaYoutube className="mx-3 my-2 size-6" />
              </a>
            ) : null}
            <motion.div
              animate={hoveredId === item.id ? "open" : "closed"}
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <IoIosArrowForward />
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <motion.div
          className="flex w-5/6 flex-col items-center justify-center space-y-4 rounded-lg bg-white p-4 shadow-xl dark:bg-[#373737]"
          initial={{ opacity: 0 }}
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(50% 50% 50% 50% round 10px)",
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          animate={hoveredId === 0 ? "closed" : "open"}
        >
          <img src={Projects[hoveredId].src} alt={Projects[hoveredId].alt} />
          <div className="flex w-full flex-col items-start p-1">
            <motion.h2 variants={itemVariants} className="text-2xl font-bold">
              {Projects[hoveredId].title}
            </motion.h2>
            {Projects[hoveredId].more.map((about, index) => (
              <motion.h2
                key={index}
                variants={itemVariants}
                className="my-1 text-base"
              >
                {about}
              </motion.h2>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

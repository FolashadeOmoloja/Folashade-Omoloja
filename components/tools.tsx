"use client";
import { motion } from "framer-motion";
import ReactIcon, {
  Css,
  Express,
  Git,
  GitHub,
  Html,
  Javascript,
  MongoDB,
  NextIcon,
  NodeJs,
  ReduxLogo,
  Tailwind,
  TypeScript,
} from "./ui/tech-icons";

const tools = [
  { name: "React.Js", percentage: 95, direction: "left", icon: <ReactIcon /> },
  { name: "NextJs", percentage: 90, direction: "top", icon: <NextIcon /> },
  {
    name: "JavaScript",
    percentage: 90,
    direction: "left",
    icon: <Javascript />,
  },

  {
    name: "TypeScript",
    percentage: 80,
    direction: "left",
    icon: <TypeScript />,
  },
  {
    name: "Tailwind Css",
    percentage: 90,
    direction: "bottom",
    icon: <Tailwind />,
  },
  { name: "HTML5", percentage: 90, direction: "right", icon: <Html /> },

  { name: "CSS3", percentage: 90, direction: "right", icon: <Css /> },
  { name: "Redux", percentage: 75, direction: "top", icon: <ReduxLogo /> },
  { name: "MongoDB", percentage: 70, direction: "bottom", icon: <MongoDB /> },

  { name: "Express Js", percentage: 70, direction: "right", icon: <Express /> },
  { name: "Node js", percentage: 70, direction: "bottom", icon: <NodeJs /> },
  { name: "Git", percentage: 85, direction: "top", icon: <Git /> },

  { name: "GitHub", percentage: 85, direction: "top", icon: <GitHub /> },
];

const getAnimation = (direction: any) => {
  switch (direction) {
    case "left":
      return {
        initial: { x: -40, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
      };
    case "right":
      return {
        initial: { x: 40, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
      };
    case "top":
      return {
        initial: { y: -40, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
      };
    case "bottom":
      return {
        initial: { y: 40, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
      };
    default:
      return { initial: { opacity: 0 }, whileInView: { opacity: 1 } };
  }
};

export default function MyTools() {
  return (
    <section className=" text-white sm:pb-32 sm:px-6 px-4 mb-16" id="tools">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 xsm:mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            My Tool<span className="bg-text">Box</span>
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg text-center mx-auto">
            From frontend polish to backend logic, here are the tools I rely on
            to bring digital products to life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xsm:gap-8 gap-5 mx-auto overflow-hidden">
          {tools.map((tool, index) => {
            const anim = getAnimation(tool.direction);
            return (
              <motion.div
                key={index}
                initial={anim.initial}
                whileInView={anim.whileInView}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#111827] rounded-xl p-6 flex flex-col items-center shadow-lg space-y-2"
              >
                <div>{tool.icon ? tool.icon : <span>Hi</span>}</div>
                <div className="text-4xl font-bold bg-text ">
                  {tool.percentage}%
                </div>
                <p className="text-sm uppercase tracking-wide">{tool.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

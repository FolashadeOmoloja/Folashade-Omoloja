"use client";
import { divVariants, fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
};

export default function ExperienceCard({
  index,
  expArrLength,
  experience,
}: {
  index: number;
  expArrLength: number;
  experience: Experience;
}) {
  const isEdge = index === 0 || index === expArrLength - 1;
  const isEven = index % 2 === 0;

  if (index === 0) {
    return (
      <section className=" relative">
        <ExpDets exp={experience} />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="absolute top-[100px] left-[50%] max-lg:hidden  "
        >
          <img src="processline.svg" />
        </motion.div>
      </section>
    );
  } else if (!isEdge && !isEven) {
    return (
      <section className=" flex justify-end relative">
        <AnimatedDiv
          delay={0.4}
          className="absolute top-[100px] right-[50%] max-lg:hidden"
        >
          {" "}
          <img src="processline.svg" className="transform scale-x-[-1]" />
        </AnimatedDiv>
        <AnimatedDiv delay={0.6} className="flex justify-end w-full">
          {" "}
          <ExpDets exp={experience} />
        </AnimatedDiv>
      </section>
    );
  } else if (!isEdge && isEven) {
    return (
      <section className="flex relative">
        <AnimatedDiv delay={0.8} className="w-full">
          <ExpDets exp={experience} />
        </AnimatedDiv>
        <AnimatedDiv
          delay={1}
          className="absolute top-[100px] left-[50%] max-lg:hidden"
        >
          <img src="processline.svg" />
        </AnimatedDiv>
      </section>
    );
  } else if (index === expArrLength - 1) {
    return (
      <AnimatedDiv delay={1.2} className="flex justify-end relative">
        <ExpDets exp={experience} />
      </AnimatedDiv>
    );
  }
}

const ExpDets = ({ exp }: { exp: Experience }) => {
  return (
    <div className="bg-[#111827]   p-6 relative max-xmd:gap-[20px] rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,69,165,0.2)] w-[50%] max-md:w-full ">
      <h3 className="text-lg max-xsm:text-base font-semibold text-white">
        {exp.role} @ <span className="text-[#007aff]">{exp.company}</span>
      </h3>
      <p className="text-sm max-xsm:text-xs text-gray-400 mb-2">{exp.period}</p>
      <p className="text-xs text-gray-300 mb-4">{exp.description}</p>
      <div className="flex flex-wrap gap-2">
        {exp.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-[#1f1f1f] text-xs text-gray-200 px-2 py-1 rounded border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const AnimatedDiv = ({
  children,
  delay,
  className = "",
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
          type: "tween",
        },
      }}
      viewport={{ once: true, amount: 0.6 }}
      variants={divVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

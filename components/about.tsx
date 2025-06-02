import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaTools, FaWrench } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BiSolidZap } from "react-icons/bi";

const codeString = `// Meet your next favorite dev 
const developer = {
name: "Folashade Omoloja",
vibe: "Focused. Curious. Always growing.",
stack: [ "React", "Next.js", "Typescript", "Javascript",\n "Node.js", "MongoDB", "Express.js"],
passion: "Building thoughtful, scalable web apps"
};

return (
  <div>
    <span>{developer.name}</span>
    <span>{developer.vibe}</span>
  </div>
);`;
export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full  text-white sm:py-20 sm:pb-32 sm:px-6 px-4 mb-16"
    >
      <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-center mb-12 xsm:mb-16 ">
        Know About <span className="bg-text">Me</span>
      </h2>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 max-xsm:gap-8 items-center relative z-10 max-xsm:text-center">
        <div className="w-full overflow-x-hidden">
          <AboutCodeBlock />
        </div>
        {/* Right: Code Block */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            the developer you need.
          </h2>

          <p className="text-white font-semibold text-lg mb-2">
            Folashade Omoloja
          </p>
          <p className="text-[#007aff] uppercase text-sm mb-6 tracking-wide front font-medium">
            {"<Full Stack Developer/>"}
          </p>

          <div className="text-sm text-gray-400 mb-4 flex flex-col space-y-1 animate-fade-in max-xsm:text-xs  max-xsm:space-y-3">
            <span className="flex items-center gap-2 group">
              5x builder of passion projects
              <span className="about-icons">
                <FaTools />
              </span>
              & 2x startup contributor
              <span className="about-icons">
                <BsFillRocketTakeoffFill />
              </span>
            </span>
            <span className="flex items-center gap-2 group">
              React & TypeScript whisperer
              <span className="about-icons">
                <BiSolidZap />
              </span>{" "}
              | Professional feature tweaker
              <span className="about-icons">
                <FaWrench />
              </span>
            </span>
          </div>

          <div className="text-gray-300 leading-relaxed text-justify max-xsm:text-sm space-y-4">
            <p>
              Hi! I'm Folashade, a curious and creative full-stack developer
              with a soft spot for good UX and clean code. I love transforming
              ideas into scalable digital experiences that people actually enjoy
              using.
            </p>
            <p>
              I'm obsessed with learning and improving, currently exploring
              backend architecture and AI-powered interfaces. I value
              minimalism, elegance, and performance in every line of code I
              ship.
            </p>
            <p>
              When I’m not coding, you’ll find me deep into tech blogs,
              journaling life ideas, or replaying my favorite chill playlist for
              the 173rd time 🎧.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const AboutCodeBlock = () => (
  <div className="rounded-xl bg-gradient-to-br from-[#0f4d92] via-[#007aff] to-[#5bc0f8] p-1 shadow-[#007aff]/20 shadow-xl relative ">
    <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-no-repeat bg-cover opacity-40 pointer-events-none" />

    <div className="bg-[rgb(31,31,31)] text-white font-mono p-4 rounded-lg h-[350px] max-w-full overflow-auto text-xs sm:text-sm ">
      <SyntaxHighlighter
        language="jsx"
        style={vscDarkPlus}
        wrapLines={true}
        wrapLongLines={true}
        customStyle={{
          backgroundColor: "transparent",
          padding: 0,
          margin: 0,
          fontSize: "inherit",
          lineHeight: "1.5",
          overflowX: "auto",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  </div>
);

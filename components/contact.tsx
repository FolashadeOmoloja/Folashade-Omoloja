"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import OutlineButton, { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="text-white sm:pb-32 sm:px-6 px-4 mb-16">
      <div className="max-w-6xl mx-auto flex flex-col space-y-4 text-center mb-12 xsm:mb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Let's <span className="bg-text">Talk</span>
        </h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg text-center mx-auto">
          Your Next Project Awaits! Whether you have a question, want to
          collaborate, or just want to say hi, I'm all ears. Let's connect and
          create something amazing together!
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex flex-col items-center w-full"
        >
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#007aff] shadow-md mb-6">
            <Image
              src="/shades.png"
              alt=""
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/FolashadeOmoloja"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-[#007aff] transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/folashade-omoloja"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-[#007aff] transition"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://twitter.com/beunknown_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-[#007aff] transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
          <div className="mt-8 w-full  mx-auto gap-5 flex max-w-sm justify-center -tr">
            <OutlineButton
              padding="basis-1/2 h-11"
              spanSize="w-[210px] h-[210px]"
              translateHover="-translate-x-64 -translate-y-[104px]"
              opacitySpan="opacity-0"
              href="mailto:omolojashade@gmail.com"
            />
            <Button
              padding="basis-1/2 h-11"
              spanSize="w-[210px] h-[210px]"
              translateHover="-translate-x-64 -translate-y-[100px]"
              opacitySpan="opacity-0"
              cta="Download Resume"
              href="/FOLASHADE_OMOLOJA_Resume.pdf"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import HeroOrbit from "./HeroOrbit";
import OutlineButton, { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center px-4 py-16 md:px-6 md:py-24 relative ">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] max-sm:hidden overflow-hidden">
        <div className="hero-ring w-[520px] h-[520px] "></div>
        <div className="hero-ring w-[720px] h-[720px]  "></div>
        <div className="hero-ring w-[920px] h-[920px] "></div>
        <div className="hero-ring w-[1120px] h-[1120px]  "></div>
        <HeroOrbit
          size="w-[1100px] h-[400px] "
          duration="[animation-duration:20s]"
        >
          <StarIcon className="text-blue-500/50 w-10 h-10" />
        </HeroOrbit>
        <HeroOrbit
          size="w-[875px] h-[400px] "
          duration="[animation-duration:25s]"
        >
          <StarIcon className="text-blue-500/50 w-8 h-8" />
        </HeroOrbit>
        <HeroOrbit
          size="w-[380px] h-[400px] "
          duration="[animation-duration:20s]"
        >
          <StarIcon className="text-blue-500/30 w-5 h-5" />
        </HeroOrbit>

        <HeroOrbit
          size="w-[640px] h-[400px] max-sm:hidden"
          duration="[animation-duration:35s]"
        >
          <StarIcon className="text-blue-500/50 w-5 h-5" />
        </HeroOrbit>
        <HeroOrbit
          size="w-[500px] h-[400px] "
          duration="[animation-duration:30s]"
        >
          <div className="bg-blue-500/30 w-3 h-3 rounded-full" />
        </HeroOrbit>
      </div>
      <div className="mx-auto flex max-w-[800px] flex-col items-center space-y-8 text-center">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Building experiences that leave a lasting impression - one{" "}
          <span className="bg-text">code at a time</span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground  sm:leading-8">
          Hello there! I'm Folashade, a software developer passionate about
          solving problems, building intuitive user experiences, and developing
          scalable full-stack web applications
        </p>
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
          cta="View Projects"
          href="#projects"
          download={false}
        />
      </div>
    </section>
  );
}

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
      fill="currentColor"
    />
  </svg>
);

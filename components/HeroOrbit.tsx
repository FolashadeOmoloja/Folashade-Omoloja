import { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  duration,
}: PropsWithChildren<{ size: string; duration?: string }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
      <div className={` animate-spin  ${duration} ${size} `}>
        <div className={` inline-flex animate-spin  ${duration}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;

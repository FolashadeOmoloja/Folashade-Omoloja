import { Equal } from "lucide-react";

const OutlineButton = ({
  cta = "Let's talk",
  padding = "px-5 py-3",
  spanSize = "w-48 h-48",
  translateHover = "-translate-x-56 -translate-y-24",
  opacitySpan = "opacity-[3%]",
  href = "#_",
}: {
  cta?: string;
  padding?: string;
  spanSize?: string;
  translateHover?: string;
  opacitySpan?: string;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-start  ${padding} overflow-hidden font-bold rounded-[10px] group text-sm`}
    >
      <span
        className={`w-32 h-32  rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white ${opacitySpan}`}
      ></span>
      <span
        className={`absolute top-0 left-0 ${spanSize} -mt-1 transition-all duration-500 ease-in-out rotate-45 ${translateHover} bg-white opacity-100 group-hover:-translate-x-8`}
      ></span>
      <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
        {cta}
      </span>
      <span className="absolute inset-0 border-2 border-white rounded-[10px]"></span>
    </a>
  );
};

export default OutlineButton;

export const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <div
    onClick={onClick}
    className="relative inline-flex items-center justify-start  p-2 overflow-hidden font-bold rounded-full group"
  >
    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
      <Equal />
    </span>
    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
  </div>
);

export const Button = ({
  cta = "Let's talk",
  padding = "px-5 py-3",
  spanSize = "w-48 h-48",
  translateHover = "-translate-x-56 -translate-y-24",
  opacitySpan = "opacity-[3%]",
  href = "#_",
  download = true,
}: {
  cta?: string;
  padding?: string;
  spanSize?: string;
  translateHover?: string;
  opacitySpan?: string;
  href?: string;
  download?: boolean;
}) => (
  <a
    href={href}
    download={download}
    className={`relative inline-flex items-center justify-start  ${padding} overflow-hidden font-bold rounded-[10px] group text-sm`}
  >
    <span
      className={`w-32 h-32  rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-btngradient ${opacitySpan}`}
    ></span>
    <span
      className={`absolute top-0 left-0 ${spanSize} -mt-1 transition-all duration-500 ease-in-out rotate-45 ${translateHover} bg-btngradient opacity-100 group-hover:-translate-x-8`}
    ></span>

    <span className="absolute inset-0 bg-white flex items-center justify-center   rounded-[10px] text-center text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-white group-hover:bg-transparent">
      {cta}
    </span>
  </a>
);

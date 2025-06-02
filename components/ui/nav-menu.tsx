import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTools,
} from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";

export default function NavMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const menuItems = [
    { name: "Home", icon: FaHome, href: "#" },
    { name: "About", icon: FaUser, href: "#about" },
    { name: "ToolBox", icon: FaTools, href: "#tools" },
    { name: "Project", icon: FaBriefcase, href: "#projects" },
    { name: "Experience", icon: MdWorkHistory, href: "#experience" },
    { name: "Contact", icon: FaEnvelope, href: "#contact" },
  ];
  return (
    <div
      className={`fixed inset-0 w-full min-h-screen h-full bg-[#0f0f0f]/95 text-white z-40 flex justify-end transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div className="flex flex-col justify-between p-10 md:p-16 h-full w-[320px] max-xsm:w-[80%] bg-[#111827]">
        <div className="flex flex-col gap-10 mt-10 text-lg">
          <h3 className="uppercase text-gray-400 text-sm">Menu</h3>
          <div className="space-y-4">
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.href} className="menu-item group">
                <item.icon className="menu-item-icon" /> {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="text-sm">
          <h3 className="uppercase text-gray-400 text-sm mb-4">Social</h3>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/folashade-omoloja"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#007aff] transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/FolashadeOmoloja"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#007aff] transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://twitter.com/beunknown_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#007aff] transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Pacifico } from "next/font/google";
import OutlineButton, { MenuButton } from "./ui/button";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-xsm:px-4 flex h-14 max-w-screen-2xl items-center justify-between w-full">
        <div className=" flex items-center space-x-2">
          <span className={`${pacifico.className} text-lg max-xsm:text-base`}>
            Folashade <span className="bg-text">Omoloja</span>
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <OutlineButton
            padding="px-4 py-2"
            href="mailto:omolojashade@gmail.com"
          />
          <MenuButton />
        </div>
      </div>
    </header>
  );
}

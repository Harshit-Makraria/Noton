import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2  ">
      <Image
        src={"/unnamed.webp"}
        className="dark:hidden"
        height={40}
        width={40}
        alt="logo"
      />
      <Image
        src={"/unnamed.webp"}
        className="hidden dark:block"
        height={40}
        width={40}
        alt="logo"
      />
      <p className={cn("font-semibold", font.className)}>Weppdev{"'"}s Notion</p>
    </div>
  );
};

export default Logo;

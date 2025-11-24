import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";
function header() {
  return (
    <>
      <nav className="flexed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex item-center">
            <Image
              src="/spott.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-full h-11"
              property
            />
          </Link>

          {/* Search & Location - Desktop Only */}

          {/* Right Side Action */}
        </div>

        {/* Mobile Search & Location - Below Header */}
      </nav>

      {/* Modals */}
    </>
  );
}

export default header;

"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
      setShouldRenderMenu(true);
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!isMenuOpen && shouldRenderMenu) {
      timeoutId = setTimeout(() => {
        setShouldRenderMenu(false);
      }, 1000); // Assurez-vous que ce délai correspond à la durée de votre animation
    }
    return () => clearTimeout(timeoutId);
  }, [isMenuOpen, shouldRenderMenu]);

  return (
    <div className=" py-3 px-1 flex justify-center bg-black bg-opacity-70">
      <div className="flex flex-col gap-3 max-width w-full">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="ml-5">
            RUMBLEZOUMA
          </Link>
          <div className="flex gap-3 items-center">
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
            <div
              onClick={toggleMenu}
              className="w-10 p-2 bg-slate-500 rounded-md bg-opacity-30 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} className="text-white w-full" />
            </div>
          </div>
        </div>
      </div>
      {shouldRenderMenu && <Menu isOpen={isMenuOpen} />}
    </div>
  );
}

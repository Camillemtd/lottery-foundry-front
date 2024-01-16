import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
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
            <div className="w-10 p-2 bg-slate-500 bg-opacity-30">
              <FontAwesomeIcon icon={faBars} className="text-white w-full"/>
            </div>
          
            {/* <Link
              href={"/admin"}
              className="flex items-center justify-center py-5 "
            >
              <FontAwesomeIcon icon={faDragon} className="text-white w-5" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

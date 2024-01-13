import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';


export default function NavBar() {
  return (
    <div className=" py-3 px-1 flex justify-center bg-black bg-opacity-70 ml-20">
      <div className="flex flex-col gap-3 max-width w-full">
        <div className="flex justify-between items-center">
          <Link href={'/'} className='ml-5'>RUMBLEZOUMA</Link>
          <div className="flex gap-3 items-center">
          <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}

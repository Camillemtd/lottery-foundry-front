
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function NavBar() {
  return (
    <div className=" py-3 px-1 flex justify-center">
      <div className="flex flex-col gap-3 max-width w-full">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <div className="flex gap-3 items-center">
            <ConnectButton label='Connect Wallet' />
          </div>
        </div>
      </div>
    </div>
  );
}

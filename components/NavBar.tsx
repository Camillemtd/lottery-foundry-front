
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function NavBar() {
  return (
    <div className="border-b border-orange-200 border-gold py-3 px-1  ">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <div className="flex gap-3 items-center">
            <ConnectButton label='Connect Wallet' />
          </div>
        </div>
        <div className="flex gap-3">
          <div>All the games</div>
          <div>EtherMillions</div>
        </div>
      </div>
    </div>
  );
}

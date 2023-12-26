import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavBar() {
  return (
    <div className="border-b border-orange-200 border-gold py-3 px-1  ">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <div className="flex gap-3 items-center">
            <Button variant="outline">Connect Wallet</Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
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

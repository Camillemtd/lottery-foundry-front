import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GameCard({id}: {id: number}) {
  
  return (
    <div className="flex flex-col justify-center items-center border-y-4 rounded-xl border-orange-200 gap-3 h-full ">
      <div className="w-full">
      <Image src={"/EthLogo.png"} alt="eth logo" width="180" height="180" className="rounded-xl w-full"/>
      </div>
      
      <div className="flex flex-col justify-center items-center gap-3 mb-2">
        <span>340/1200 participant</span>
        <h2 className="text-2xl font-bold">1ETH</h2>
		{/* <Button variant="outline">Participate</Button> */}
      </div>
    </div>
  );
}

'use client';
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";
import { RUMBLE_CONTRACT_ABI, RUMBLE_SEPOLIA_ADRESS } from "../lib/contracts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react";

//Viem
import { parseEther } from "viem";

export default function CreateRumble() {
  const [amount, setAmount] = useState<string>("");
  const [maxNumOfParticipants, setMaxNumOfParticipants] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const { toast } = useToast()

  const createRumble = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	try {
		const rewardAmount = parseEther(amount);
		const { request } = await prepareWriteContract({
			address: RUMBLE_SEPOLIA_ADRESS,
			abi: RUMBLE_CONTRACT_ABI,
			functionName: "createRumble",
			args: [rewardAmount, maxNumOfParticipants, duration],
		  });
		  const { hash } = await writeContract(request);
		  const data = await waitForTransaction({
			hash: hash,
		  });

		  console.log(data);

		  toast({
			description: "Rumble Create",
		  })

	} catch (error) {
		toast({
			title: "Uh oh! Something went wrong.",
			description: "There was a problem with your request.",
		  })
	}
    
  };
  return (
	<div className="flex flex-col justify-center items-center">
	<h2 className="text-xl p-5">Create Rumble</h2>
    <form onSubmit={createRumble} className="gap-10 flex flex-col text-white w-1/3 justify-center items-center">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Montant à gagner (ETH):</Label>
        <Input
          type="string"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Montant en ETH"
        />
      </div>
	  <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Nombre de participants max:</Label>
        <Input
          type="string"
          value={maxNumOfParticipants}
          onChange={(e) => setMaxNumOfParticipants(e.target.value)}
          placeholder="Nombre max de participants"
        />
      </div>
	  <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Durée max (en secondes):</Label>
        <Input
          type="string"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Durée en secondes"
        />
      </div>
	  <Button className="bg-white text-black" type="submit">Submit</Button>
    </form>
	</div>
  );
}

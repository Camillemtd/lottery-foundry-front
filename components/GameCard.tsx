"use client"
import React, { useEffect } from "react";
import Image from "next/image";

import useReadContract from "../hooks/useReadContract"; 
import { formatEther } from 'viem'
import EnterRumble from "./EnterRumble";



export default function GameCard({ id }: { id: number }) {
  const { data, loading, error, execute } = useReadContract();
  
  useEffect(() => {
    execute("getRumble", [id]);
  }, [execute, id]); // Ajoutez `id` comme dépendance

  // Afficher le chargement ou l'erreur
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // S'assurer que `data` n'est pas null avant d'accéder à ses propriétés
  if (!data) return null; // ou un autre élément de repli

   // Convertir les BigInts en nombres
   const duration = Number(data.duration);
   const entryFee = formatEther(data.entryFee.toString());
   const maxNumOfParticipants = Number(data.maxNumOfParticipants);
   const rewardAmountInEth = formatEther(data.rewardAmount.toString());
   console.log(entryFee);
   

   const startTime = Number(data.startTime);
   
  return (
    <div className="flex flex-col justify-center items-center border-y-4 rounded-t-xl rounded-b-md border-orange-200 h-full ">
      <div className="w-full">
        <Image src={"/EthLogo.png"} alt="eth logo" width="180" height="180" className="rounded-t-xl w-full opacity-70"/>
      </div>
      
      <div className="flex flex-col justify-center items-center gap-3 pt-3 w-full bg-black bg-opacity-50 rounded-b-xl ">
        <span>{data.participants.length}/{maxNumOfParticipants}</span>
        <h2 className="text-2xl font-bold">{rewardAmountInEth}ETH</h2>
        <EnterRumble rumbleId={id} entryFee={entryFee}/>
      </div>
    </div>
  );
}
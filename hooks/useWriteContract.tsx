import { useState, useCallback } from 'react';
import { prepareWriteContract, writeContract, waitForTransaction } from "@wagmi/core";
import { RUMBLE_CONTRACT_ABI, RUMBLE_SEPOLIA_ADRESS } from '../lib/contracts';
//Viem
import { parseEther } from "viem";

interface UseWriteContractReturn {
  loading: boolean;
  error: Error | null;
  execute: (functionName: string, args?: any[], value?: string) => Promise<any>; // Remplacez `any` si vous connaissez le type de réponse
}

function useWriteContract(): UseWriteContractReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (functionName: string, args: any[] = [], value?: string) => {
	try {
	  setLoading(true);
	  const valueInWei = value ? parseEther(value) : undefined;
	  const { request } = await prepareWriteContract({
		address: RUMBLE_SEPOLIA_ADRESS,
		abi: RUMBLE_CONTRACT_ABI,
		functionName,
		args,
		value: valueInWei ? BigInt(valueInWei.toString()) : undefined,
	  });
      const { hash } = await writeContract(request);
      const result = await waitForTransaction({
        hash,
      });

      console.log(result);
      return result; // Retourne le résultat de la transaction
    } catch (err: any) {
      setError(err);
      console.error("Error writing contract:", err);
      throw err; // Renvoie l'erreur pour une gestion plus avancée
    } finally {
      setLoading(false);
    }
  }, []); 

  return { loading, error, execute };
}

export default useWriteContract;
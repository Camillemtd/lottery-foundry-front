import { useState, useCallback } from 'react';
import { readContract } from '@wagmi/core';
import { RUMBLE_CONTRACT_ABI, RUMBLE_SEPOLIA_ADRESS } from '../lib/contracts';

interface UseReadContractReturn {
  data: any; 
  loading: boolean;
  error: Error | null;
  execute: (functionName: string, args?: any[]) => Promise<void>; 
}

function useReadContract(): UseReadContractReturn {
  const [data, setData] = useState<any>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (functionName: string, args: any[] = []) => {
    try {
      setLoading(true);
      const result = await readContract({
        address: RUMBLE_SEPOLIA_ADRESS, 
        abi: RUMBLE_CONTRACT_ABI,       
        functionName,
        args,
      });
      setData(result);
      console.log(result);
    } catch (err: any) {
      setError(err);
      console.error("Error reading contract:", err);
    } finally {
      setLoading(false);
    }
  }, []); 

  return { data, loading, error, execute };
}

export default useReadContract;




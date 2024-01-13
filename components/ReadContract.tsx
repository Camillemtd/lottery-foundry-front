'use client';
import { readContract } from '@wagmi/core'
import {RUMBLE_CONTRACT_ABI, RUMBLE_SEPOLIA_ADRESS} from '../lib/contracts'
 


export default function ReadContract(){
	const readRumble = async () => {
		const data = await readContract({
			address: RUMBLE_SEPOLIA_ADRESS,
			abi: RUMBLE_CONTRACT_ABI,
			functionName: 'getRumble',
			args: [1],
		  })
		  console.log(data)
	}
	  return (
	<button onClick={readRumble}>
	  Read Rumble
	</button>
  )
}
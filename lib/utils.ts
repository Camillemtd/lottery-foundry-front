import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ethers } from "ethers"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convertir 1 ETH en WEI


// const rewardAmountInWei = ethers.utils.parseEther("1.0")
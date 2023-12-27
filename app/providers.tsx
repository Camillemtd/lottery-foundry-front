"use client";

import React, { ReactNode } from "react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme 
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
	mainnet,
	polygon,
	optimism,
	arbitrum,
	base,
	zora,
  } from 'wagmi/chains';
import { publicProvider } from "wagmi/providers/public";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet,
	polygon,
	optimism,
	arbitrum,
	base,
	zora,],
  [publicProvider()]
);

const {connectors} = getDefaultWallets({
  appName: "RainbowKit demo",
  projectId,
  chains,
});




const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
  webSocketPublicClient,
});

interface ProvidersProps {
	children: ReactNode;
  }

  const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
		modalSize="compact"
		theme={darkTheme()}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Providers;
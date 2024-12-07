"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { useTheme } from "next-themes";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()] // Using only the public provider
);

const { connectors } = getDefaultWallets({
  appName: "Rudrodip Sarker",
  projectId: "374c8a0582469955f03a41575a1964f2",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={theme === "dark" ? darkTheme() : undefined}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

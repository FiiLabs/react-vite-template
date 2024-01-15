import { configureChains, createConfig } from 'wagmi';
import { bsc } from '@wagmi/core/chains';
import {
  metaMaskWallet, okxWallet, rainbowWallet, trustWallet, walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

const projectId = import.meta.env.VITE_APP_PROJECT_ID;

export const chains = [bsc];

const { wallets } = getDefaultWallets({
  appName: 'CyberPetaCraft',
  chains,
  projectId,
});

const connectors = connectorsForWallets([
  // ...wallets,
  {
    groupName: 'Popular',
    wallets: [
      // injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      okxWallet({ chains }),
      trustWallet({ projectId, chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
  // ...wallets,
]);

const { publicClient } = configureChains(chains, [
  jsonRpcProvider({ rpc: (_chain) => ({ http: _chain.rpcUrls.default?.http?.[0] }) }),
  publicProvider(),
]);

export const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RenderRouters } from './router';
import { chains, wagmiClient } from './config/wagmiClient';

export default function App() {
  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider
        locale="en-US"
        chains={chains}
        appInfo={{
          appName: 'CyberPetaCraft',
          learnMoreUrl: 'https://cyberpetacraft.xyz',
        }}
      >
        <BrowserRouter>
          <Suspense>
            <RenderRouters />
          </Suspense>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

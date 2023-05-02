import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RenderRouters } from './router';
import { chains, wagmiClient } from './config/wagmiClient';

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
          <Suspense>
            <RenderRouters />
          </Suspense>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

import { useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';

export default function index() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  return (
    <div>
      <p>address: {address}</p>
      <div className="flex items-center gap-10 justify-center">
        <button
          className="border px-5 py-2 bg-black/10"
          onClick={isConnected ? disconnect : openConnectModal}
        >
          {isConnected ? 'disconnect' : 'connect'}
        </button>

        <button
          className="border px-5 py-2 bg-black/10"
          onClick={openAccountModal}
        >
          account modal
        </button>

        <button
          className="border px-5 py-2 bg-black/10"
          onClick={openChainModal}
        >
          switch chains
        </button>

      </div>
    </div>
  );
}

// main.js - ESM entry that exposes the WalletConnect EVM provider to window
import EthereumProvider from "@walletconnect/ethereum-provider";
import SignClient from "@walletconnect/sign-client";

// Expose the constructor/object so legacy non-bundled code can detect them
// and call .init() / use SignClient directly.
window.EthereumProvider = EthereumProvider;
window.SignClient = SignClient;
console.log('window.EthereumProvider and window.SignClient set');

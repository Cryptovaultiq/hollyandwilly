// src/main.js - ESM entry for Vite: exposes WalletConnect EVM provider to window
import EthereumProvider from "@walletconnect/ethereum-provider";
import SignClient from "@walletconnect/sign-client";

window.EthereumProvider = EthereumProvider;
window.SignClient = SignClient;
console.log('window.EthereumProvider and window.SignClient set (from src/main.js)');

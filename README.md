# HollyHub Connect — WalletConnect v2 setup

Quick steps to install and expose the modern WalletConnect EVM provider for this frontend.

1) From your project root run:

```bash
npm install
# or explicitly:
npm install @walletconnect/ethereum-provider
```

2) If you use a bundler (Vite, Webpack, Rollup, Create React App):

Import and expose the provider so the existing `script.js` can detect it via `window.EthereumProvider`:

```js
import EthereumProvider from "@walletconnect/ethereum-provider";
window.EthereumProvider = EthereumProvider;
```

Then bundle and serve your app. Example dev server (if using Vite):

```bash
npm run dev
```

3) If you are not using a bundler, you should still use npm to install and then use a bundler or build step to produce a browser artifact — there is no official, supported CDN for the package.

4) In your `index.html` ensure you load `script.js` as a module when you rely on ES module imports elsewhere:

```html
<script type="module" src="/script.js"></script>
```

Notes
- After bundling, `script.js` will detect `window.EthereumProvider` and use the modern provider automatically.
- I can add a small bundler config or a runnable example app (React/Vite) if you want — tell me which stack you prefer.

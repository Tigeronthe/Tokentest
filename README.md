# TokenLab Smart Contract API

A simple Node.js API that connects to DAI stablecoin contract and reads data from a smart contract using ethers.js.

## Overview

This project exposes a local API endpoint that fetches data such as:

- contract name
- contract symbol
- total supply

It reads configuration from environment variables and uses a public Ethereum RPC provider.

## Tech Stack

- Node.js
- Express
- ethers.js
- dotenv

## Project Structure

- [server.js](server.js) — Express API server
- [contractConfig.js](contractConfig.js) — contract address and ABI
- [.env](.env) — runtime configuration (do not commit this to public repos)
- [package.json](package.json) — dependencies and start script
- [screenshots](screenshots) — place screenshots here for GitHub preview

## Setup

1. Install dependencies:

```bash
npm install
```

2. Update [.env](.env) with your configuration:

```env
PORT=3000
RPC_URL=https://ethereum-rpc.publicnode.com
CONTRACT_ADDRESS=0x6B175474E89094C44Da98b954EedeAC495271d0F
```

3. Start the server:

```bash
npm start
```

4. Request the contract data:

```bash
Invoke-WebRequest http://localhost:3000/contract
```

or open in a browser:

```text
http://localhost:3000/contract
```

## Example Response

```json
{
  "contractAddress": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "name": "Dai Stablecoin",
  "symbol": "DAI",
  "totalSupply": "4583183601.397993331309143578"
}
```

## Screenshots

Add screenshots of the app output or browser response into the [screenshots](screenshots) folder and reference them here.

Example:

```md
![App Screenshot](screenshots/your-image.png)
```

## Notes

- The project is meant as a local blockchain API example.
- For production, store private values in a real secret manager instead of a local `.env` file.
- The contract address can be replaced with any deployed contract address you want to query.

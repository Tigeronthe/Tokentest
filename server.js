require('dotenv').config();

const express = require('express');
const { ethers } = require('ethers');
const { RPC_URL, CONTRACT_ADDRESS, CONTRACT_ABI, SECOND_CONTRACT_ADDRESS, SECOND_CONTRACT_ABI } = require('./contractConfig');

const app = express();
const PORT = process.env.PORT || 3000;

const provider = new ethers.JsonRpcProvider(RPC_URL);
const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
const secondContract = new ethers.Contract(SECOND_CONTRACT_ADDRESS, SECOND_CONTRACT_ABI, provider);

app.get('/contract', async (req, res) => {
  try {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();

    const result = {
      contractAddress: CONTRACT_ADDRESS,
      name,
      symbol,
      totalSupply: ethers.formatUnits(totalSupply, 18),
      rawTotalSupply: totalSupply.toString()
    };

    console.log('Smart contract data:', result);
    res.json(result);
  } catch (error) {
    console.error('Error fetching contract data:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get('/second-contract', async (req, res) => {
  try {
    const name = await secondContract.name();
    const symbol = await secondContract.symbol();
    const totalSupply = await secondContract.totalSupply();

    const result = {
      contractAddress: SECOND_CONTRACT_ADDRESS,
      name,
      symbol,
      totalSupply: ethers.formatUnits(totalSupply, 18),
      rawTotalSupply: totalSupply.toString()
    };

    console.log('Second contract data:', result);
    res.json(result);
  } catch (error) {
    console.error('Error fetching second contract data:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Using contract: ${CONTRACT_ADDRESS}`);
});

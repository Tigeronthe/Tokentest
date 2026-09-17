const RPC_URL = process.env.RPC_URL || 'https://ethereum-rpc.publicnode.com';

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const CONTRACT_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)'
];

const SECOND_CONTRACT_ADDRESS = process.env.SECOND_CONTRACT_ADDRESS || '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const SECOND_CONTRACT_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)'
];

module.exports = {
  RPC_URL,
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
  SECOND_CONTRACT_ADDRESS,
  SECOND_CONTRACT_ABI
};

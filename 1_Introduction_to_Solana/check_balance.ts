import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const publicKey = new PublicKey("Cm6EWEv6C2jxSCBqrBjz2kyjPPefMiPoYjskhFexML1");
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;


console.log(`The balance of the account at ${publicKey} is ${balanceInSOL} SOL`);
console.log(`✅ Finished!`);
// import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

// // 1. Set up connection to the DevNet
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// // 2. Generate a new wallet keypair for testing
// const wallet = Keypair.generate();
// const publicKey = new PublicKey("Cm6EWEv6C2jxSCBqrBjz2kyjPPefMiPoYjskhFexML1");

// // 3. Function to request an airdrop
// async function requestAirdrop(amount: number) {
//     try {
//         // Convert SOL to lamports (1 SOL = 1 billion lamports)
//         const lamports = amount * LAMPORTS_PER_SOL;

//         // Request airdrop to the generated wallet
//         const signature = await connection.requestAirdrop(publicKey, lamports);

//         // Wait for the transaction confirmation
//         await connection.confirmTransaction(signature, "confirmed");

//         console.log(`Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
//         console.log(`Transaction Signature: ${signature}`);
//     } catch (error) {
//         console.error("Airdrop failed:", error);
//     }
// }

// // 4. Run the airdrop function
// const amountToAirdrop = 0.1; // amount in SOL
// requestAirdrop(amountToAirdrop);


import { Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

async function getRentExemption() {
    const rentExemptBalance = await connection.getMinimumBalanceForRentExemption(0);
    console.log("Minimum rent-exempt balance:", rentExemptBalance / LAMPORTS_PER_SOL, "SOL");
}

getRentExemption();


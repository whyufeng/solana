import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(keypair.publicKey.toBase58())  //Cm6EWEv6C2jxSCBqrBjz2kyjPPefMiPoYjskhFexML1
console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`,
);
//import Keypair, but we're also going to import Connection to let us
//establish a connection to the Solana devnet

import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./dev-wallet.json";

//import keypair from wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection to get devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
  try {
    // Claim 2 devnet SOL tokens
    const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
    console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch(e) {
    console.error(`Oops, something went wrong: ${e}`)
  }
}) ();
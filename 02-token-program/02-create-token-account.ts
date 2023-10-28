import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("5k2cALiKk3crXjLbFvPoFCDBJwZ67LhtbkDLv89sPh3g") // PUBKEY of person you want to create the token account

const decoded = base58.decode('Lr7gt6pgNaaTmJ4hMdcxhZ7Fcv934dECDSh4qmmrNqx3uSyQT796tByyugTanZ51H7fZWkX6XZznGyBFNdg7nLe')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "7L8FgsDonW4RXhwArAhks2qKyavd26waHspveqGjjLzK"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();
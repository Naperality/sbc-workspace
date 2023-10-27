import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("EdY5p1mUuc9ExgMUNW6fgrUTSDWAtuBoAgoiy4U9mQar")
const decoded = base58.decode('Lr7gt6pgNaaTmJ4hMdcxhZ7Fcv934dECDSh4qmmrNqx3uSyQT796tByyugTanZ51H7fZWkX6XZznGyBFNdg7nLe')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();
import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('7L8FgsDonW4RXhwArAhks2qKyavd26waHspveqGjjLzK'), //mint 
        new Web3.PublicKey('86t9YaCeNQXvd9jneStCEdaUJYFK63LperewLo2CK7wH'), //owner
        new Web3.PublicKey('EdY5p1mUuc9ExgMUNW6fgrUTSDWAtuBoAgoiy4U9mQar'), //authority
        100, //amount
    )
    console.log('mint Token ', mintToken)
    //mint token: 2f4A9nhYqkPjbmrtExbaGVSberTiN21MTNnyHQvBeGsW6dJDNjdzvbmNYEqSfddhNdWCEcyX5oQhFBERVoahRSrC

}
main()
import axios from 'axios';
const { Keypair } = require('stellar-base');
const config = { headers: { 'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }

export async function getAccountInfomation(privateKey) {
    try{
    const keypair = Keypair.fromSecret(privateKey);
    const publicKey = keypair.publicKey();
    const r = await axios.get(`http://localhost:5000/forestnetworking/account/${publicKey}`,config
        ).then(res=>{
        return res;
    });
    if(r.status === 200) 
        {
            console.log(r.data.data);
            return r.data.data;
        }
    return null;
    } catch(err) {
        console.log('ERROR to get account info', err);
        return null;
    }
}
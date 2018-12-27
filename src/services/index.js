import axios from 'axios';
import {sign,encode,decode} from '../transaction';
import vstruct from 'varstruct'
const { Keypair } = require('stellar-base');
const config = { headers: { 'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }

const PlainTextContent = vstruct([
    { name: 'type', type: vstruct.UInt8 },
    { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) },
]);

const Followings = vstruct([
    { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
  ]);

export async function getAccount(publicKey) {
    try{
    const r = await axios.get(`http://localhost:5000/forestnetworking/account/${publicKey}`, config
        ).then(res => {
            return res;
        });
        if (r.status === 200) {
            // console.log(r.data.data);
            return r.data.data;
        }
        return null;
    } catch (err) {
        console.log('ERROR to get account info', err);
        return null;
    }
}

export async function getAccountInfomation(privateKey) {
    try {
        const keypair = Keypair.fromSecret(privateKey);
        const publicKey = keypair.publicKey();
        return getAccount(publicKey);
    } catch (err) {
        console.log('ERROR to get account info', err);
        return null;
    }
        
}

export async function getInfoAccountForNewsfeed(newsfeed) {
    for(let i = 0 ; i < newsfeed.length; i++) {
        const account = await getAccount(newsfeed[i].publicKey);
        newsfeed[i]['username'] = account.username;
        newsfeed[i]['avatar'] = account.avatar;
    }
}

// random from 1->max+1
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
  }

export async function getSomeUserRecommend() {
    try{
        const randomPage = getRandomInt(20);
        const r = await axios.get(`http://localhost:5000/forestnetworking/allUser/${randomPage}&10`, config).then(
            res=>{
                return res
            }
        );
        console.log('IN API', r.data);
        if(r.status === 200) {
            return r.data.data;
        }
        return null;
    }catch(e){
        console.log(e);
        return null;
    }
}

///////////////////////////////////////////////////////////////

export async function getAllNewsfeed(page, perpage) {
    try {
        const r = await axios.get(`http://localhost:5000/forestnetworking/newfeed/${page}&${perpage}`, config).then(res => {
            return res
        });
        if (r.status === 200) {
            
            await getInfoAccountForNewsfeed(r.data.data);
            // console.log(r.data.data);
            return r.data.data;
        }
        return null;
    } catch (err) {
        console.log('ERROR to get newsfeed info', err);
        return null;
    }
}

/////////////////////////////////////////////////////////
function createTx(Sequence, Operation, Params){
    return {
        version: 1,
        sequence: Sequence,
        memo: Buffer.from(''),
        operation: Operation,
        params: Params
    }
}

async function postTx(tx) {
    const r = await axios.post('http://localhost:5000/forestnetworking/tx/', {
        txData: encode(tx).toString('base64')
    });
    return r;
}
export async function payment(privateKey, toAccountPuk, Amount, sequence) {
    const params = {
        address: toAccountPuk,
        amount: parseInt(Amount)
    }
    const paymentTx = createTx(parseInt(sequence),'payment',params);
    sign(paymentTx,privateKey);
    // console.log('Send tx',encode(paymentTx).toString('base64'));
    const r = await postTx(paymentTx);
    return r;
    // return client.broadcastTxCommit({tx: encode(paymentTx).toString('base64')})
}
export async function changeName(privateKey, newName, sequence) {
    const params = {
        key: 'name',
        value: Buffer.from(newName)
    }
    const changeNameTx = createTx(parseInt(sequence),'update_account',params);
    sign(changeNameTx,privateKey);
    const r = await postTx(changeNameTx);
    return r;
    // console.log('Send tx',encode(paymentTx).toString('base64'));
    
}
export async function publishContent(privateKey, content, sequence) {
    const postBuffer = PlainTextContent.encode({
        type: 1,
        text: content
    })
    const params = {
        content: postBuffer,
        keys: []
    }
    const publishTx = createTx(parseInt(sequence),'post',params);
    sign(publishTx,privateKey);
    const r = await postTx(publishTx);
    return r;
}
export async function changeImage(privateKey, imageData, sequence) {
    const params = {
        key: 'picture',
        value: Buffer.from(imageData,'base64')
    }
    const changeImageTx = createTx(parseInt(sequence),'update_account',params);
    sign(changeImageTx,privateKey);
    const r = await postTx(changeImageTx);
    return r; 
}
export async function changeFollowing(privateKey, fData, sequence) {
    const fBuffer = Followings.encode({
        addresses: fData
    })
    const params = {
        key: 'followings',
        value: fBuffer
    }
    const changeFollowingTx = createTx(parseInt(sequence),'update_account',params);
    sign(changeFollowingTx,privateKey);
    const r = await postTx(changeFollowingTx);
    return r; 
}
export async function createNewAccount(privateKey, newPublicKey, sequence) {
    const params = {
        address: newPublicKey
    }
    const createAccountTx = createTx(parseInt(sequence),'create_account',params);
    sign(createAccountTx,privateKey);
    const r = await postTx(createAccountTx);
    return r;
}
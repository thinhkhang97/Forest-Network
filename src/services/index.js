import axios from 'axios';
const { Keypair } = require('stellar-base');
const config = { headers: { 'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }

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
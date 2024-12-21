const express =require('express');

const app=express();
const  {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const database='ecomm';

async function get_data()
{
    let result=await client.connect();
    let db=result.db(database);
    return db.collection('prod');
    
}
module.exports=get_data;
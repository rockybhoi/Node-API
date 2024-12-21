const express=require('express');
const dbConnect=require("./conn");
const mongoDb=require('mongodb');
const app=express();
app.use(express.json());
app.get('/',async (req,res)=>{
    let db=await dbConnect();
    let data=await db.find({type:"lenovo"}).toArray();
    res.send(data);
})

app.post('/',async (req,res)=>{
    let db=await dbConnect();
    console.log(req.body);
    
    //let data=await db.find({type:"lenovo"}).toArray();
    const result=await db.insertOne(req.body);
    console.log(result);
    res.send(result);
})
app.put('/:prod_name',async (req,res)=>{
    const db=await dbConnect();
    const result=await db.updateOne(
        {prod_name : req.params.prod_name},
        {$set:(req.body)}
    )
    console.log("put data");
    res.send(result)
})

app.delete('/:id',async (req,res)=>{
    const db=await dbConnect();
    const result=await db.deleteOne({_id: new mongoDb.ObjectId(req.params.id)});
    res.send(result);
})
app.listen(5000);
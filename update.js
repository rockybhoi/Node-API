const  dbConnect= require('./conn');

const update=async ()=>{
    const db=await dbConnect();
    const result=await db.updateMany(
        {name:'test'},
        {$set:{name:"xyz",type:"accer"}}
    )
    console.warn(result.acknowledged);

}

update();
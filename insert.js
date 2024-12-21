const  dbConnect= require('./conn');

const insert= async ()=>{
    const db=await dbConnect();
    const result=await db.insertOne({prod_name:"comp",type:"lenovo",price:4000,"name":"testing"});
    console.log(result);
}
insert();

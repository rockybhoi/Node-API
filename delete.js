const dbConnect=require("./conn");


const delete_data =async ()=>{
    const db=await dbConnect();
    const result=db.deleteOne({"name":"xyz"});
    console.log(db);
}
delete_data();
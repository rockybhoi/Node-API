
const  get_data=require('./conn.js');
const main=async ()=>{
    let data=await get_data();
    data=await data.find().toArray();
    console.log(data);
    
}
main();
//console.warn(get_data());
// get_data().then((response)=>{
//     response.find().toArray().then((data)=>{
//         console.log(data);
//     });
// })

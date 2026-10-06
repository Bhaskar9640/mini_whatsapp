const mongoose=require('mongoose');
const chat = require('./model/schema');

main().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
};


let allchats=[
    {
        from:'bhaskar',
        msg:'hii Nanna',
        to:'nanna',
        created_at:new Date()
    },
     {
        from:'sravan',
        msg:'bro,where are you',
        to:'kiran',
        created_at:new Date()
    },
    {
        from:'venkatesh',
        msg:'will we go college tomorrow',
        to:'Mahendher',
        created_at:new Date()
    },
    {
        from:'govsrdhan',
        msg:'send me importent questions for sem exam',
        to:'shireesha',
        created_at:new Date()
    },
    {
        from:'sathish',
        msg:'i like editing',
        to:'mother',
        created_at:new Date()
    }

];

chat.insertMany(allchats).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
});
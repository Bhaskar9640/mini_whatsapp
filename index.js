const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const methodOverride=require('method-override')
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method")); 

const chat=require('./model/schema');
const { matchesGlob } = require('path/posix');

main().then((res)=>{
    console.log("db connected successfully");
}).catch((err)=>{
    console.log(err);
})
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
};

// const chatSchema=new mongoose.Schema({
//     from:{
//         type:String,
//         required:true,

//     },
//     msg:{
//         type:String,
//         required:true
//     },
//     to:{
//         type:String,
//         required:true
//     },
//     created_at:{
//         type:Date
//     }
// });

// const chat=mongoose.model('chat',chatSchema);

// const chat1=new chat({
//     from:'bhaskar',
//     msg:'I like to do hardwork',
//     to:"raju",
//     created_at:new Date()

// });
// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
//show all chats
app.get('/chats', async (req,res)=>{
    let chats=await chat.find()
     console.log(chats);
    res.render('show.ejs',{chats})
})
//create new route
app.get('/chats/new',(req,res)=>{
    res.render('new.ejs')

});
//insert new chat
app.post("/chats/new",async (req,res)=>{
    let{ from, msg,to}=req.body;
    let newchat=new chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
    })
    let chat1=await newchat.save();
    res.redirect('/chats')
    console.log(newchat1)
});
//reader edit chat
app.get('/chats/:id/edit',async (req,res)=>{
    let {id}=req.params;
    let editchat= await chat.findById(id)
    console.log(editchat)
      res.render('edit.ejs',{editchat})
})
//edit chat
app.put('/chats/:id',async(req,res)=>{
    let {id}=req.params;
    let{ msg }=req.body;
    let deletechat= await chat.findByIdAndUpdate(id,{msg:msg},{new:true});
    res.redirect('/chats')

});

app.delete('/chats/:id',async (req,res)=>{
    let {id}=req.params;
    const deletechat= await chat.findByIdAndDelete(id);
    // console.log(deletechat);
    console.log('chat was deleted')
    res.redirect('/chats')

    


})

app.get('/',(req,res)=>{
    res.send('this is my root')
});

app.listen(8080,()=>{
    console.log('server is listening port{8080}')
});
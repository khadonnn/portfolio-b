const express=require('express');
const cors=require('cors');
const nodemailer=require('nodemailer');
const router=express.Router();
// const port=8080;
//send mail

const app=express();
app.use(cors());
app.use(express.json())
app.use("/",router);
app.listen(8080,()=>{
    console.log(`Server running http://localhost:8080`)
})

const contactEmail=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"stoppingwave@gmail.com",
        pass:"futm ecbk nlpr uyui"
    },
})
contactEmail.verify(error=>{
    if(error){
        console.log(error)
    } else {
        console.log("Ready to Send");
    }
    
})
router.post("/contact",(req, res)=>{
    const name=req.body.firstName + req.body.lastName
    const email=req.body.email;
    const message=req.body.message;
    const phone=req.body.phone;
    const mail={
        from:name,
        to:'stoppingwave@gmail.com',
        subject:'Contact Form - Portfolio-b',
        html:`
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
        `
    };
    contactEmail.sendMail(mail,(error)=>{
        if(error){
            res.json(error);
        }else{
            res.json({code:200, status:"Message sent"})
        }
    })
})
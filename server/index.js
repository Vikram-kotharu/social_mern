const express = require('express');
require("dotenv").config()
const mongoose = require('mongoose');
const multer = require('multer');
const app  = express();
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
//middlewares
app.use(express.json())
//uploading files
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"public/images");  
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})
app.post('/upload',upload.single('file'),(req,res)=>{
    res.json({
        msg:"upload successfull"
    })
})
app.get('/',(req,res)=>{
    res.send('good')
})

//Routes
app.use("/auth",authRoutes);
app.use("/users",userRoutes);
//app.use("/posts",postRoutes);
mongoose.connect(process.env.MONGO_URI,()=>{
    app.listen(process.env.PORT,()=>{
        console.log('running at 6000!');
    })

})

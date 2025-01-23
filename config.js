const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/bdnew",{useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(()=>{console.log("connecteddddddddddd")})
    .catch((er)=>{console.log(er)})


    // models->config= connection establish in database with our mongodb(database)
    // 
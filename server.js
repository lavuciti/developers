const express = require("express");

const app = express();

app.get("/data/developers",(req,res) => {
    const developers = [
        {id:1, name:"Danilo"},
        {id:2, name:"Ivan"},
        {id:3, name:"Milos"}
    ];

    res.json(developers);
}
)

app.listen(5000, function(){
    console.log("Listening to port 5000");
}
)
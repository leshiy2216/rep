let express=require("express");
    cors=require("cors");
let app=express();

app.use(cors());

app.get("/", function(request, response) {
    response.send("Hello, Node.js!");
});

app.listen(591);
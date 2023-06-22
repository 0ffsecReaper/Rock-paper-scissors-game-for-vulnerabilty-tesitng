const express = require('express');
const app = express();
const PORT = process.env["NODE_PORT"] || 4444;

app.use(express.static("public"));
//Listen on port
app.listen(PORT, ( )=> {
    console.log(`Listening on ${PORT}`);

})

//
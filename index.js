const express = require('express')
const app = express()
const port = 4000

app.use(require("./routes/brands.route"));
app.use(require("./routes/products.route"));

// app.get('/',(req,res) =>{
//     res.send('Hello Мир')
// });


app.listen(port, () => {
    console.log(`end http://localhost:${port}`)
});
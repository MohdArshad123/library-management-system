const express = require('express');

const app = express();

const PORT = 8001;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "Home Page :-)"
})
})

// app.all('.',(req,res)=>{
//     res.status(500).json({
//         message: "Not Built yet"
//     })
// })

app.listen(PORT, ()=>{
    console.log(`erver is up and runing on http://localhost:${PORT}`)
})
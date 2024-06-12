const bodyParser = require('body-parser')
const express = require('express')
const { emproute } = require('./Routes/route')
const cors=require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/img",express.static("./pimg"))

app.use("/emp",emproute)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(5000)
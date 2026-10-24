import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res ) =>{
    res.status(200).json({
        message: " Hello my friend "
    })
    })

    app.get("/api/get", (req , res) =>{
        const data = {
            id:1,
            name:"Sample data",
            description: " this is complete a sample data for the response from API."
        };

        res.status(200).json(data)
    })
    
    export  default app
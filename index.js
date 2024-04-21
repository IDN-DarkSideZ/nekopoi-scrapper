const express = require('express');
const cors = require('cors');
const { appRouter } = require('./routes');
require('dotenv').config()
/*  */
const app = express()
const PORT = process.env.PORT || 3000 || 5000 || 8080;
/*  */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
/* call route */
app.use(appRouter)

app.use("*", (req, res) => {
    res.send("Hello")
});

app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        api_detail: {
            name: "Neko API",
            author: "KazuoYK",
            description: "A Nekopoi Scrapper",
            version: "v1.0.0",
            repository: "error_cant_find_repos",
        },
        connect_with_me: {
            email: "user@kazuo.rf.gd",
            github: "https://github.com/RyuXyro",
        }
    });
});

app.listen(PORT, () => {
    console.log(`App now running on port ${chalk.yellow(PORT)}`);
});

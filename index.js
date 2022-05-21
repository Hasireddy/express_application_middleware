const express = require("express");
const { send } = require("process");
const app = new express();
const port = 3000;

const secure = (req, res, next) => {
    const { token } = req.query;
    if (!token)
        return res.status(403).send("Not valid token")
    else
        return res.status(200).send("Hello World");
    next();
}; //Middleware to check if token is valid or not.

app.use(secure); //with app.use() we r making use of secure() throughout the app.

app.get('/', (req, res) => {
    res.send("Hello there");
});

app.listen(port, () => { console.log(`Server is running at http://localhost:${port}`) });
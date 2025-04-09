const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standard Get response. Welcome  ${user}! Your password is ${password}`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body ;
    res.send( `standard POST response. Welcome  ${user}! Your password is ${password}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}` );
});
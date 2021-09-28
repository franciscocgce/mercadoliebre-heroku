const express = require ("express")
const app = express ()

const path = require ("path")

app.use(express.static(path.resolve(__dirname, "./public")));


app.listen (process.env.PORT || 3000, () => console.log ("Servidor corriendo http://localhost:3000/home" ));

app.get("/home", (req,res) => {
    const fileToSend = path.join (__dirname, "/views/home.html")
    res.sendFile(fileToSend);
})

app.get("/register", (req, res) => {
    const fileToSend2 = path.join (__dirname, "/views/register.html");
    res.sendFile(fileToSend2)
});

app.post("/register", (req,res) => {
    res.redirect("/home")
})

app.get("/login", (req,res) => {
    const fileToSend3 = path.join (__dirname, "/views/login.html");
    res.sendFile(fileToSend3)
});

app.post("/login", (req,res) => {
    res.redirect("/home")
})
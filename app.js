import express from "express";
import cookieParser from "cookie-parser"


let app = express()
app.use(cookieParser());


//rota básica do app
app.get('/', (req, res) => {
    res.send('welcome to express app');
});

//JSON objeto para adcionar ao cookie
let users = {
    name: "é os guri",
    Age: "45"
}


    /*=== COMO O CÓDIGO VEM DO FRONT END ===*/
    // const promise = axios({
    //         method: "POST",
    //         url: `localhost:5000/user`,
    //         headers:{
    //             "Set-Cookie": "userName=usuario teste 2",
    //             "Set-Cookie: "userAge=18"
    //         }
    //     });




//Rota para adcionar os cookies
app.get('/setuser', (req, res) => {
    //res.cookie("userData", users);
    res.cookie("userData", users, {expire: 400000 + Date.now()});
    
    res.send('user data added to cookie');
});


app.get('/getuser', (req, res) => {
    //Mostrar todos os cookies
    res.send(req.cookies);
});

//Route para apagar cookie
app.get('/logout', (req, res) => {
    res.clearCookie('userData');
    res.send('user logout successfully');
});

app.listen(5500, (err) => {
    if (err)
        throw err;
    console.log('listening on port 5500');
});
const http = require('dotenv').config();
const port = process.env.PORT;
http.createServer((req, res)=>{
    res.write("Cristhian");
    res.end();
})
.listen(8081);
console.log('Escuchando el puerto', 8080);
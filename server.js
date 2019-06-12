const express = require('express');
const app = express();


const port = process.env.PORT || 3000;
//midlewire
app.use(express.static(__dirname));
//
// Express HBS (sin modulo hbs)
app.set('view engine', 'hbs');

app.get('/',(req, res)=>{
                      //renderiza home
  }); 
  

//puerto

app.listen(port, ()=> {
  console.log('Escuchando el puerto:  ', port);
});
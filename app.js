const { Sequelize } = require('sequelize');
const  express = require('express');
app = express();
const productoRouter = require ('./routes/productosRoutes');
const port = 5000;















app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use('/', productoRouter);



app.set( "view engine", "hbs" );



const { Sequelize } = require('sequelize');

const connection  = require( '../database/mysqlCommerce' );
const Modelproducto = require( '../models/producto' )( connection );

const productoController = {
    list: (req, res) => {
        Modelproducto.findAll({

        })
        .then(producto => {
            res.render ('list.hbs', {producto})
        })
    },
    //CREATE

    create:(req,res) => {
        Modelproducto.findAll ({

        })
        .then(producto =>{
            res.render('create.hbs', {producto})
        })
    },

    //STORE O AGREGADO 
    store: async(req, res) =>{
        let productoCreate = await productoCreate({
        /* let sql = "INSERT INTO producto SET ?", */
            producto:req.body.productos_nombre,
            precio:req.body.producto_precio,
        })
        res.redirect('/producto',)
    } 
}

module.exports = productoController;





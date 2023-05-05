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
    }
}

module.exports = productoController;



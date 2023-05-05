const { DataTypes } = require('sequelize');

module.exports = function( connection ) {

    const Producto = connection.define( 'Productos', {

        idproductos: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productos_nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        producto_precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, 
    {
        freezeTableName: 'Producto',
        timestamps: false,
    });

    return Producto;

}
const express = require( "express" );
const router = express.Router();


const productoController = require( '../controllers/producto_controller' );


router.get ('/', productoController.list);





module.exports = router;
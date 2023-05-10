const express = require( "express" );
const router = express.Router();


const productoController = require( '../controllers/producto_controller' );


router.get ('/', productoController.list);


//RUTAS CREATE y STORE
router.get('/producto',productoController.create);
router.post ('/',productoController.store);



module.exports = router;
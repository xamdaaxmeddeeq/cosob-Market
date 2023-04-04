const express = require("express");
const { indexController , womencloteControler, 
        productDetailControler,checkouteControler,
        contactControler,kabodumarController,
        qurxiyayaalController, shandadoController}= require("../controller/index");

const router = express.Router();


router.get("/", indexController);
router.get("/dhardumar", womencloteControler)
router.get("/productdetail", productDetailControler)
router.get("/contact", contactControler)
router.get("/checkout", checkouteControler)
router.get("/kabahadumarka", kabodumarController)
router.get("/qurxiyayaal", qurxiyayaalController)
router.get("/shandado", shandadoController)


module.exports = router;



const productlist = require("../data/dhardumar")
const kabodumar = require("../data/kabo")
const qurxiyayaal = require("../data/qurxiyayaal")
const shandado = require("../data/shabdado")

exports.indexController = (req, res) => {
    res.render("index");
  };
  exports.contactControler =(req, res)=>{
    res.render("contact")
  }
  exports.checkouteControler =(req, res)=>{
    res.render("checkout")
  }
  // productDetail pages
  exports.productDetailControler =(req, res)=>{
    res.render("productDetail")
  }
  // pageka dharka dumarka
  exports.womencloteControler =(req, res)=>{
    res.render("dhardumar")
  }
  // pageka kabahah dumarka
  exports. kabodumarController =(req, res)=>{
    res.render("kabodumar",)
  }
  // pageka saacadaha, muraayadahah iyo waxyaabaha laysku qurxinaayo
    exports. qurxiyayaalController =(req, res)=>{
    res.render("qurxiyayaal", )
  }
    // pageka shandadaha
    exports. shandadoController =(req, res)=>{
      res.render("shandado", )
    }

    
  

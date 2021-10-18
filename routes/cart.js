const { response } = require('express');
var express = require('express');
var router = express.Router();

var products = require('../modal/ProductModal')
const Action = require ('../actions/CartAction')

/* lấy danh sách giỏ hàng */
router.post('/getCartList',async(req, res)=> {
    const dataCart = await products.find({email:req.body.email}).select('image name price originPrice quantity type key email')
    res.send({
        code:200,
        data:dataCart,
        message:"success"
    });
});

//thêm vào giỏ
router.post('/addToCart',async(req, res)=> {
    var addCart = products({
        image:req.body.image,
        name:req.body.name,
        price:req.body.price,
        originPrice:req.body.originPrice,
        quantity:req.body.quantity,
        type:req.body.type,
        key:req.body.key,
        email:req.body.email
    })
    const data = await Action.addToCart(addCart) 
    res.send({
        code:200,
        data:data,
        message:"Thêm thành công"
    })
  });

//xoá khỏi giỏ hàng
router.post('/removeCart',async(req, res)=>{
    const data = await Action.deleteCart({"key":req.body.key,"email":req.body.email})
    res.send({
      code:200,
      data:data,
      message:"success"
    })
  });

// thay đổi số lượng
router.post('/changQuantity',async(req, res)=> {
  //truyền quantity vào body
  let body=req.body
  let params ={"key":req.body.key, "email":req.body.email}
  const data = await Action.changeQuantity(params,body)
  res.send({
      code:200,
      data:null,
      message:"success"
  });
});
 
module.exports = router;

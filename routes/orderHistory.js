var express = require('express');
var router = express.Router();

const Action = require ('../actions/OrderHistoryAction')
var Order = require('../modal/OrderHistoryModal')

/* đặt hàng thành công */
router.post('/addOrder', async(req, res)=> {
  var body = Order({
    status:req.body.status,
    price:req.body.price,
    orders:req.body.orders,
    shippingInfo:req.body.shippingInfo,
    customerInfo:req.body.customerInfo,
    email:req.body.email,
    orderCode:req.body.orderCode
  })
  const data =await Action.addOrder(body)
  res.send({
    code:200,
    data:data,
    message:"succes"
  })
});

router.get('/getOrderList/:email',async(req, res)=> {
  const orderList = await Order.find({email:req.body.email}).select('status price orders shippingInfo customerInfo orderCode')
  res.send({
      code:200,
      data:orderList,
      message:"success"
  });
});
 
module.exports = router;

const MainModal = require('../modal/OrderHistoryModal')

module.exports ={
    //thêm đơn hàng
    addOrder:(item)=>{
        return new  MainModal(item).save();
    },
}
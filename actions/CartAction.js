const MainModal = require('../modal/ProductModal')

module.exports ={
    //thêm vào giỏ
    addToCart:(item)=>{
        return new  MainModal(item).save();
    },
    //xoá giỏ
    deleteCart:(params)=>{
        return MainModal.deleteOne({key:params.key,email:params.email})
    },

    //lấy danh sách giỏ hàng
    changeQuantity:(params,body)=>{
        return MainModal.updateOne({key:params.key,email:params.email},body)
    }
}
const MainModal = require('../modal/UserModal')

module.exports ={
    //đang kí
    addUser:(item)=>{
        return new  MainModal(item).save();
    },
  
    //thay đổi thoog tin
    updateInfo :(email,body)=>{
        return MainModal.updateOne({email:email},body)
    }
}
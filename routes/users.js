var express = require("express");
var router = express.Router();
var users = require("../modal/UserModal");
const Action = require("../actions/UserAction");
/* đăng kí */

router.post("/register", async (req, res) => {
  const datauser = await users.find({}).select("email");
  const check = datauser.some((item) => item.email == req.body.email);
  console.log(check);
  if (check == true) {
    res.send({
      code: 400,
      data: null,
      message: "Email này đã được đăng ký",
    });
  } else {
    var addUser = users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avata: "",
    });
    const data = await Action.addUser(addUser);
    res.send(
      JSON.stringify({
        code: 200,
        data: null,
        message: "Đăng ký thành công",
      })
    );
  }
});

// đăng nhập
router.post("/login/:email/:password", async (req, res) => {
  const datauser = await users.find({}).select("email password");
  const userfind = datauser.find(
    (item) =>
      item.email === req.body.email && item.password === req.body.password
  );
  if (!userfind)
    res.send({
      code: 400,
      data: null,
      message: "Thông tin người dùng không chính xác",
    });
  else {
    res.send({
      code: 200,
      data: userfind,
      message: "Đăng nhập thành công",
    });
  }
});

// đổi thong tin
router.put("/changeinfo/:email", async (req, res) => {
  try {
    let body = req.body;
    const data = await Action.updateInfo(req.params.email, body);
    res.send({
      code: 200,
      data: data,
      message: "thay đổi thành công",
    });
  } catch (error) {
    res.send(error);
    console.error(error);
  }
});

module.exports = router;

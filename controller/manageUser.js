var manageUser = require("../model/manageUser");
const Jwt = require("jsonwebtoken");
const jwtKey = "prerna";



const register = async (req, res) => {
   
        const emailMatch = await manageUser.findOne({ email: req.body.email });
        if (emailMatch) {
            res.send({ message:"email already exist"});
          } else 
            
         { await new manageUser({
            
            
        email:req.body.email,password:req.body.password}).save();
      res.send({ message: "Successfully Registered!" });}
   
  };

const login = async (req, resp) => {
  let user = await manageUser
    .findOne({ email: req.body.email })
    .select("-password");
  if (user) {
    let pass = await manageUser.findOne(req.body).select("-password");
    if (pass) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send({ message: "Something went wrong in Token Generation" });
        }
        resp.send({ user, auth: token });
      });
    } else resp.send({ message: "Invalid Password" });
  } else resp.send({ message: "Email doesn't exist" });
};


    
    

module.exports = {login,register};
const { SHA256 } = require("crypto-js");

function hashingPassword(password){
    return SHA256(password + "arrosak ghashange man germez pooshide")
}

module.exports = hashingPassword
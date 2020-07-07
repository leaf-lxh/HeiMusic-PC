const fs = require("fs")
const {app} = require("electron")

var configJson = JSON.parse(fs.readFileSync(`${app.getPath("home")}/.heimusic/config.json`))



exports.login_uin = configJson.login_uin
exports.cookie = configJson.cookie
exports.ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"
exports.downloadRootPath = configJson.downloadRootPath
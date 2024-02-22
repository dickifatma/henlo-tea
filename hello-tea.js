const cowsay = require  ('cowsay')

function helloTea() {
    console.log(cowsay.say({text: "Hello", f: "tea"}))
}

module.exports = helloTea
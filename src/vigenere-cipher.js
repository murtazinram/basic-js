const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    boolean;

    constructor(boolean = true) {
        this.boolean = boolean
    }

    encrypt(message, key) {
        return this.extracted(message, key, true);
    }

    decrypt(message, key) {
        return this.extracted(message, key, false)
    }

    extracted(message, key, mode) {
        if (message === undefined || key === undefined) throw new Error("message or key und")
        message = message.toUpperCase();
        key = key.toUpperCase();
        let str = [];
        let arr = message.split(' ')
        message = message.split(' ').join("")
        while (key.length < message.length) {
            key += key
        }
        key = (key.substring(0, message.length))
        for (let i = 0; i < message.length; i++) {
            let mesCode = message.charCodeAt(i);
            let keyCode = key.charCodeAt(i)
            if (mesCode >= 65 && mesCode <= 90) {
                if (mode) {
                    str.push(String.fromCharCode((mesCode + keyCode) % 26 + 65))
                } else {
                    str.push(String.fromCharCode((mesCode - keyCode + 26) % 26 + 65))
                }
            } else {
                str.push(String.fromCharCode(mesCode))
            }
        }
        let index = 0
        for (let i = 0; i < arr.length; i++) {
            str.splice(index, 0, ' ')
            index = index + arr[i].length + 1
        }
        str = str.join('').trim()
        return this.boolean ? str : str.split("").reverse().join("")
    }
}

module.exports = VigenereCipheringMachine;

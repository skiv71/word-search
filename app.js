var dict = ["cat", "dog", "sheep"]

function isInDict(search) {
    console.log(dict, search)
    var match = (str) => {
        let n
        for (let i = 0; i < dict.length; i++) {
            n = 0
            for (let j = 0; j < str.length; j++) {
                if (str[j] == dict[i][j] || str[j] == `*`)
                    n++
            }
            if (n == str.length && str.length == dict[i].length)
                return true
        }
        return false
    }
    return match(search)
}

console.log(isInDict(`cat`))
console.log(isInDict(`c*r`))
console.log(isInDict(`d*`))
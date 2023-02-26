let dict = ["cat", "dog", "sheep"]

function getTree() {
    let tree = {}
    let addBranch = (o, word) => {
        if (!word.length)
            return
        let = [s] = word
        let p = o.hasOwnProperty(s)
            ? o
            : o[s] = {}
        addBranch(p, word.slice(1))
    }
    dict
        .forEach((word) => addBranch(tree, word))
    return tree
}

let tree = getTree()

console.log(tree)

//console.log(isInDict(tree, `cat`))
//console.log(isInDict(tree, `c*r`))
//console.log(isInDict(tree, `d*`))


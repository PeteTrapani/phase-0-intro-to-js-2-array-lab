const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop("Bob")
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    appendCat = [...cats,name]
    return appendCat
}

function prependCat(name) {
    prependCat = [name,...cats]
    return prependCat
}

function removeLastCat() {
    removeLastCat = cats.slice(0,cats.length-1)
    return removeLastCat
}

function removeFirstCat() {
    removeFirstCat = cats.slice(1)
    return removeFirstCat
}
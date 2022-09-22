const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const newCats =cats.slice();
    newCats.push(name);
    return newCats;
}
function prependCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift(name);
    return copyOfCats;
}
function removeLastCat() {
    const a = cats.slice();
    a.pop();
    return a;
}
function removeFirstCat() {
    const b = cats.slice();
    b.shift();
    return b;
}
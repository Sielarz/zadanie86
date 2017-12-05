var a = prompt('podaj wartosc a'),
    b = prompt('podaj wartosc b'),
    value =  (a * a) - (2 * a * b) + (b * b);

console.log ('wynik dzialania:' + value);

if (value > 0) {
console.log ('wwartosc dodatnia');
}
else if (value < 0) {
console.log ('wartosc ujemna');
}
else {
console.log ('wartosc jest rowna 0');
}



let valores = [8, 1, 7, 4, 2, 9, 5]

/*console.log(`${valores[0]}`)


for (let pos = 0 ; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for ( let pos in valores ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

let pos = valores.indexOf(22)

if (pos == -1) {
    console.log(`Este valor não existe`)
}else {
    console.log(`O valor 7 está na posição ${pos}`)
}
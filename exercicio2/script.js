let numeroUm = prompt ("Digite um número qualquer")
let numeroDois = prompt ("Digite outro número qualquer")
typeof numeroUm // number
typeof numeroDois // number

console.log (`
O primeiro número é maior que segundo? ${numeroUm>numeroDois}
O primeiro número é igual ao segundo? ${numeroUm===numeroDois}
O primeiro número é divisível pelo segundo? ${(numeroUm%numeroDois)==0}
O segundo número é divisível pelo primeiro? ${(numeroDois%numeroUm)==0}
`)
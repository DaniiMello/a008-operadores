const operacaoA = 5>20 && 5<2;
const operacaoB = 5===5 || 5==="5";
const operacaoC = !(20>50);
const operacaoD = !(20>50 || 50>60);
console.log (`
   OperaçãoA ${operacaoA}
    OperaçãoB ${operacaoB}
    OperaçãoC ${operacaoC}
    OperaçãoD ${operacaoD}
    `)

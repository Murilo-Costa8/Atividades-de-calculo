let nome = (prompt("Digite seu nome:"));

let n1 = Number(prompt("Digite sua primeira nota"));
let n2 = Number(prompt("Digte sua segunda nota"));
let n3 = Number(prompt("Digite sua terceira nota"));

let media = (n1 + n2 + n3)/3

alert (`Olá ${nome}. Sua media ficou ${media.toFixed(1)}`);
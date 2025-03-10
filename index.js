// Definição das variáveis

let nome = "GuerreiroEu"; //herói desejado
let xp = 1000; // XP desejado
let nivel = "";

// nível do herói
if (xp < 1000) {
    nivel = "Aprendiz";
} else if (xp <= 2000) {
    nivel = "Junior";
} else if (xp <= 5000) {
    nivel = "PLeno";
} else if (xp <= 7000) {
    nivel = "Senior";
} else if (xp <= 8000) {
    nivel = "Mestre";
} else if (xp <= 9000) {
    nivel = "Lendário";
} else if (xp <= 10000) {
    nivel = "Épico";
} else {
    nivel = "Desconhecido";
}

// Saída msg
console.log("O Herói de nome " + nome + " está no nível de " + nivel);

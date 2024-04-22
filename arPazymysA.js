function evaluateGrade(commonPoints, finalExam = false) {
    if (finalExam && commonPoints >= 90 && commonPoints <= 100) {
        return true; // A+ pažymys tik jei baigiamasis egzaminas ir bendri taškai yra tarp 90 ir 100
    } else if (!finalExam && commonPoints >= 89 && commonPoints <= 100) {
        return true; // A+ pažymys jei bendri taškai yra tarp 89 ir 100, bet ne baigiamasis egzaminas
    } else {
        return false; // Kitu atveju grąžiname false
    }
}

// Pavyzdiniai naudojimo atvejai:
// console.log(evaluateGrade(95)); // true
// console.log(evaluateGrade(88)); // false
// console.log(evaluateGrade(92, true)); // true
// console.log(evaluateGrade(85, true)); // false

function getAGrade() {
    const commonPoints = parseInt(prompt("Įveskite bendrus taškus įvairiuose egzaminuose:"));
    const orFinal = prompt("Ar tai baigiamasis egzaminas? (Įveskite 'true' arba 'false')");

    const finalExam = orFinal.toLowerCase() === 'true';

    const orAGetPlus = evaluateGrade(commonPoints, finalExam);

    if (orAGetPlus) {
        const grade = prompt("Įveskite pažymį, kurį norite suteikti (pvz., A+):");
        console.log(`Studentas gautų pažymį ${grade}.`);
    } else {
        console.log("Studentas negautų A+ pažymio.");
    }
}

// Iškviečiame funkciją
getAGrade();

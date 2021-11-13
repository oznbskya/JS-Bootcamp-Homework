
// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function findPerfect(num1, num2) {

    let sumNum1 = 0
    let sumNum2 = 0

    for(let i = 2; i <= num1; i++) {
        if (num1 % i === 0) {
            sumNum1 += i
        }
    }

    for(let i = 2; i <= num2; i++) {
        if (num2 % i === 0) {
            sumNum2 += i
        }
    }

    if (sumNum1 === sumNum2) {
        console.log("Mükemmel Sayılar!")
    } else {
        console.log("Hayır değil!")
    }
}

findPerfect(220, 284)

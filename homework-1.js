
// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...numbers) {

    let isPrime

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] > 1) {
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j === 0) {
                    isPrime = false
                    break
                } else {
                    isPrime = true
                }
            }
            if (isPrime) {
                console.log(`${numbers[i]} is a PRIME number!`)
            } else {
                console.log(`${numbers[i]} is not prime number!`)
            }
        } else {
            console.log(`${numbers[i]} is not a PRIME number!`)
        } 
    }
}

findPrime(3, 1, 14, 0, 4, -5, 5, 2, 21, 11, -21)

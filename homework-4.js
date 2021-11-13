
// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function showPrime() {

    let isPrime 

    for (let i = 1; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
                break
            } else {
                isPrime = true               
            }           
        }
        if (isPrime) {
            console.log(`${i} asal sayıdır!`)
        }      
    }
}

showPrime()

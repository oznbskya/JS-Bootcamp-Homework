
// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function showPerfectNumbers() {

    let checker = 0

    for (let i = 1; i <= 1000; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                checker += j
            } 
        }
        if (checker === (i * 2)) {
            console.log(`${i} mükemmel bir sayıdır!`)
        }
        checker = 0       
    } 
}

showPerfectNumbers()

function isEven(number) {
    var modulas = number % 2;
    if(modulas == 0) {
        return console.log('even')
    }
    return console.log('odd')
    
}

const myNumber = 120;
const isMyNumberEven = isEven(myNumber)
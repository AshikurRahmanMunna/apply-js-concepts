function isLeapYear(year) {
    if(year % 4 == 0) {
        return true;
    }
    else{
        return false;
    }
    
}

const myYear = 2024;
const isMyYearLeapYear = isLeapYear(myYear)
console.log('Is my year leap year', isMyYearLeapYear);
module.exports = {

    fizzBuzz: function(num) {
        if( num % 15 === 0){
            return'fizz buzz';
        }else if( num %3 === 0){
            return 'fizz';
        }else if(num %5 === 0){
            return 'buzz';
        }else return num;
    },

    isLeapYear: function(year) {
        if (year % 400 == 0) {
            //console.log(`${year} is a centurial leap year.`);
            return true;
        } else if (year % 4 == 0 && year % 100 !== 0) {
            //console.log(`${year} is a pure leap year.`);
            return true;
        } else {
            //console.log(`${year} is a common year.`);
            return false;
        }
    },

    isPerfectSquare: function(number) {
        for (i = 0; i <= number; i++) {
            const perfectSquare = (i * i);
            if (perfectSquare == number) {
                return true;
            } else if (perfectSquare > number) {
                return false;
            }
        }
    }
}

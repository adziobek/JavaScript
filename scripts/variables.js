window.onload = function () {
    variableHoisting();
};

function variableHoisting() {
    console.log('Variable hoisting test:');
    console.log(bar);
    var bar = 11;
    console.log(bar);
}

//Number
var myAge = 24;
//String
var myName = 'Andrzej';
//Array
var myUncles = ['Tom', 'Peter', 'Lucas'];
//Object
var myDog = {name: 'Azor', breed: 'Pitbull'};
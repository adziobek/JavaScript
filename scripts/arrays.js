console.log('***arrays***');
//array of different type object
var random = ['Andrzej', 3, 5, 6];
console.log(random);
for (var i = 0; i < random.length; i++) {
    console.log(typeof random[i]);
}

var cities = 'Warszawa,Poznań,Olsztyn,Giżycko,Mikołajki';
var citiesArray = cities.split(',');
console.log(citiesArray);
console.log('joined cities: ' + citiesArray.join(';'));
console.log('joined cities: ' + citiesArray.toString());

citiesArray.push('Przasnysz');
citiesArray.unshift('Chorzele');
console.log(citiesArray);
citiesArray.pop();
citiesArray.shift();
console.log(citiesArray);

console.log('***arrays***');

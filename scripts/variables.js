window.onload = function () {
    variableHoisting();
};

function variableHoisting() {
    console.log('Variable hoisting test:');
    console.log(bar);
    var bar = 11;
    console.log(bar);
}

window.onload = function () {
    var myHeading = document.querySelector('h1');
    myHeading.textContent = "Hello world!";

//change attribute event
    var myImage = document.querySelector('img');

    myImage.onclick = function () {
        var mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/firefox-icon.png') {
            myImage.setAttribute('src', 'images/chrome-icon.png');
        } else {
            myImage.setAttribute('src', 'images/firefox-icon.png')
        }
    };
    document.querySelector('button').onclick = function () {
        setUserName();
    };
    initLocalStorageWithUserName();
};

//use web storage API
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

function initLocalStorageWithUserName() {
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
    }
}
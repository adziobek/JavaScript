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
};
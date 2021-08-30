let amogusPic = document.querySelector('img');
let currPic = 0; //number from zero to two
let srcName = amogusPic.getAttribute('src'); //just as a note for syntax
amogusPic.onclick = function() {
    switch(currPic) {
        case 0:
            amogusPic.setAttribute('src', 'images/amongus-green.png')
            amogusPic.setAttribute('alt', 'green imposter')
            currPic += 1;
            break;
        case 1:
            amogusPic.setAttribute('src', 'images/amongus-blue.png')
            amogusPic.setAttribute('alt', 'blue imposter')
            currPic += 1;
            break;
        default:
            amogusPic.setAttribute('src', 'images/amongus-red.png')
            amogusPic.setAttribute('alt', 'red imposter')
            currPic = 0;    
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function updateHeader(name) {
    if (!name) {
        myHeading.textContent = "Amogus Pics";
    } else {
        myHeading.textContent = "Amogus Pics for " + name;
    }
}
function setUserName() {
    let myName = prompt('Please enter your name.')
    localStorage.setItem('name', myName);
    updateHeader(myName);
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    updateHeader(storedName);
}
myButton.onclick = function() {
    setUserName();
}
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const h1 = document.querySelector('h1');
// console.log(h1)


//hover on <h2> to change the innertext by greating
const subHeaderTogreating = document.querySelector('h2');
console.log("hello",subHeaderTogreating.innerHTML);
function greating() {
    subHeaderTogreating.textContent = "Welcome to Js in Browser";
    subHeaderTogreating.style.color = 'rgb(231,120,190,0.78)'
    // subHeaderTogreating.classList.toggle('changeSubHeaderStyleOnHover')
    console.log("hello",subHeaderTogreating.innerHTML);
}
subHeaderTogreating.addEventListener('mouseover', () => {
    console.log("hello",subHeaderTogreating.innerHTML);
    subHeaderTogreating.classList.toggle('changebackgroundColor')
    // subHeaderTogreating.style.backgroundColor = 'lightgray'
    // subHeaderTogreating.classList.remove('changeSubHeaderStyleOnHover')
    greating()
    // setTimeout(() => {
    //     subHeaderTogreating.classList.toggle('changebackgroundColor')
    //     subHeaderTogreating.textContent = "Here some funny events onclicks and hovering mouse"
    //     subHeaderTogreating.style.color = 'rgb(231,80,0,0.6)'
    //     // subHeaderTogreating.classList.toggle('changeSubHeaderStyleOnHover')
    //     // subHeaderTogreating.classList.toggle('changeSubHeaderStyleOnHover1')
    // },5000)
    console.log("hello",subHeaderTogreating.innerHTML);
}, false)

// graping navbar elements
const navbaritems = document.querySelectorAll("li")
// console.log(navbaritems, typeof navbaritems)
navbaritems.forEach(element => {
    // console.log("li list",element)
    // console.log("anchor tage attributes",element.firstChild.attributes[0].value);
});
navbaritems.forEach(navBarItem => {
    navBarItem.addEventListener('click', () => {
        // creat a style class in css file by onClickStyle then include 
        // all styles we want on click
        // inside this event listener triger add and remove this class from sections
        // navBarItem.firstChild.style.color = 'red';
        const targetId = navBarItem.firstChild.attributes[0].value
        console.log(targetId)
        const target = document.querySelector(targetId)
        console.log(target)
        // target.style.color = 'red';
        target.classList.toggle('changeStyleOnClickNavItem')
    })
})
},{}]},{},[1]);

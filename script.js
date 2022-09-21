const h1 = document.querySelector('h1');

//Question 1
// If a user clicks on the h1 tag, the background should change colour, if they move their mouse out of the space the background should return to the original colour.
h1.addEventListener('mouseover',(e)=> {
    e.target.style.color = 'red'
    setTimeout(()=> {
        e.target.style.color = ''
    },1000)
})

//Question 2
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

// Question 3
//If someone types a letter whilst viewing the webpage a new paragraph should be created and that letter should be added to it.
const html = document.querySelector('html');
console.log(html)
html.addEventListener('keypress',(e)=> {
    console.log(e,"pressed")
})
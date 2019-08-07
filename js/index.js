// Your code goes here

//1. Mouseover

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', function(event){
    console.log(event);
    event.target.style.backgroundColor = "green";
});

//2. Keydown

const nav = document.querySelector('.nav');
nav.addEventListener('keydown', function(event){
    console.log(event);
    event.target.style.backgroundColor = "blue";
});

//3. Drag

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(navLink){
    navLink.addEventListener('drag', function(event){
        console.log(event);
        event.target.style.opacity = "";
    }, false)
});

//4. Resize

window.addEventListener('resize', function(event){
    document.querySelectorAll('img').forEach(function(img){
        img.style.opacity = '0.1';
    });
    event.stopPropagation();
});

//5. Click

const background = document.querySelector('.intro');
background.addEventListener('click', function(event){
    console.log(event);
    event.target.style.backgroundColor = "pink";
    event.stopPropagation();
});

//6. Dbclick

const buttons = document.querySelectorAll('div.btn');
buttons.forEach(function(button){
    button.addEventListener('dblclick', event => {
        console.log(event);
        event.target.style.backgroundColor = "orange";
    });
});

//7. Scroll

window.addEventListener('scroll', function(event){
    document.querySelectorAll('div.destination h4').forEach(function(h4){
        h4.style.color = "yellow";
    })
})

//8. Keyup
const text = document.querySelectorAll("div.text-content p");

window.addEventListener('keyup', event => {
    text.forEach(photo => photo.style.display = "none")
});

//9. Click

const footer = document.querySelector('footer');
footer.addEventListener('click', function(event){
    event.currentTarget.style.paddingRight = "200px";
})

const headerPhoto = document.querySelector('header img');
headerPhoto.addEventListener('click', function(event){
    event.currentTarget.style.display = "none";
})
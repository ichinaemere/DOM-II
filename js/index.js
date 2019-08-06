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

//3. Dragend

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(navLink){
    navLink.addEventListener('dragend', function(event){
        console.log(event);
        event.target.style.opacity = "";
    }, false)
});

//4. Resize

window.addEventListener('resize', function(event){
    document.querySelectorAll('img').forEach(function(img){
        img.style.opacity = '0.1';
    });
})

//5. Click

const background = document.querySelector('.home');
background.addEventListener('click', function(event){
    console.log(event);
    event.target.style.backgroundColor = "pink";
});

//
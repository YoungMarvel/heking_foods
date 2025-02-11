// contents for index source code file
const hamburger = document.getElementById("hamburger-menu");
const cancel = document.getElementById("cancel-menu");
const nav = document.getElementById("nav");
const orderNowBtn = document.getElementById("order-nowBtn");
const login = document.getElementById("btn1");
const signup = document.getElementById("btn2");

hamburger.addEventListener('click', () =>{
    nav.style.display = 'block';
    cancel.style.display = 'block';
    hamburger.style.display = 'none';
});

cancel.addEventListener('click', () =>{
    nav.style.display = 'none';
    cancel.style.display = 'none';
    hamburger.style.display = 'block';
});

function order(){
    window.location.href = "loginRegister.html";
}

signup.addEventListener('click', () => {
    window.location.href = "register.html";
});

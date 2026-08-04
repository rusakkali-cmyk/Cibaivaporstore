// =========================
// CIBAI VAPOR
// script.js
// =========================

// LOADER
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});



// NAVBAR EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});



// SCROLL REVEAL

const reveal = document.querySelectorAll("section");

function revealSection() {

    reveal.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

reveal.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(80px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", revealSection);

revealSection();



// PARALLAX HERO

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let y = window.pageYOffset;

    hero.style.backgroundPositionY = y * 0.5 + "px";

});



// PRODUCT HOVER

const cards = document.querySelectorAll(".product-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});



// ABOUT CARD

const about = document.querySelectorAll(".about-card");

about.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});



// BUTTON RIPPLE

document.querySelectorAll("a").forEach(button=>{

button.addEventListener("click",function(e){

let x=e.clientX-this.offsetLeft;
let y=e.clientY-this.offsetTop;

let ripple=document.createElement("span");

ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



// TITLE ANIMATION

const title = document.querySelector(".hero h1");

setInterval(()=>{

title.style.textShadow="0 0 25px gold";

setTimeout(()=>{

title.style.textShadow="none";

},700);

},2500);



// FLOATING LOGO

const logo=document.querySelector(".hero-logo");

let move=0;

setInterval(()=>{

move++;

logo.style.transform=`translateY(${Math.sin(move/8)*10}px)`;

},20);



// GALLERY ZOOM

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});



// CONSOLE

console.log("🔥 Welcome To CIBAI VAPOR");

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    const loader = document.querySelector("#loader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";
            loader.style.visibility="hidden";

        },1200);

    }

});



const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(0,0,0,.88)";
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

navbar.style.background="rgba(0,0,0,.35)";
navbar.style.boxShadow="none";

}

});



const reveal=document.querySelectorAll("section");

function showSection(){

reveal.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.classList.add("show");

}

});

}

window.addEventListener("scroll",showSection);

showSection();




const products=[

{

name:"OXVA XLIM PRO",

price:"Rp420.000",

image:"product1.png"

},

{

name:"CALIBURN G4",

price:"Rp390.000",

image:"product2.png"

},

{

name:"VAPORESSO XROS 5",

price:"Rp455.000",

image:"product3.png"

},

{

name:"RELX INFINITY",

price:"Rp350.000",

image:"product4.png"

},

{

name:"PREMIUM LIQUID",

price:"Rp120.000",

image:"product5.png"

},

{

name:"COIL & POD",

price:"Mulai Rp45.000",

image:"product6.png"

}

];



const list=document.getElementById("product-list");

if(list){

products.forEach(item=>{

list.innerHTML+=`

<div class="product-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<span>${item.price}</span>

<button>ORDER NOW</button>

</div>

`;

});

}



const heroLogo=document.querySelector(".hero-right img");

if(heroLogo){

let i=0;

setInterval(()=>{

i++;

heroLogo.style.transform=`translateY(${Math.sin(i/12)*12}px)`;

},20);

}



document.querySelectorAll("button,.gold-btn,.btn-order").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});




document.querySelectorAll(".gallery-item").forEach(item=>{

item.addEventListener("mousemove",()=>{

item.style.transform="scale(1.04)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

});

});



const topBtn=document.createElement("div");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="30px";

topBtn.style.bottom="100px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.background="#D4AF37";

topBtn.style.color="#111";

topBtn.style.display="flex";

topBtn.style.justifyContent="center";

topBtn.style.alignItems="center";

topBtn.style.cursor="pointer";

topBtn.style.fontWeight="bold";

topBtn.style.fontSize="22px";

topBtn.style.opacity="0";

topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";

}else{

topBtn.style.opacity="0";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// ===============================
// Console
// ===============================

console.log("%c🔥 CIBAI VAPOR","font-size:25px;color:gold;");

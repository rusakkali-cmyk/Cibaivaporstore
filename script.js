const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

// NAVBAR SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,.9)";

    }else{

        navbar.style.background = "rgba(0,0,0,.45)";

    }

});

// PRODUCT DATA

const products = [

{
name:"OXVA XLIM PRO",
price:"Rs 20,000",
img:"https://i.ibb.co/rfZRv0jc/image.png"
},

{
name:"OXVA XLIM ULTRA",
price:"Rs 22,000",
img:"https://i.ibb.co/xSmDCy0Z/image.png"
},

{
name:"PREMIUM CATRIDGE",
price:"Mulai Rs 5,000",
img:"https://i.ibb.co/hRNkvx0F/00057695-edcd-49ed-9b99-1dfbc5ae5a4c.png"
},

{
name:"PREMIUM LIQUID",
price:"Mulai Rs 6,000",
img:"https://i.ibb.co/HSn9ZB9/c78ee2c1-42fb-49eb-b505-966101f03099.png"
}

];

const productList = document.getElementById("product-list");

if(productList){

products.forEach(product=>{

productList.innerHTML += `

<div class="product-card">

<img src="${product.img}" alt="${product.name}">

<h3>${product.name}</h3>

<span>${product.price}</span>

<a class="gold-btn" href="https://wa.me/94774386303">

ORDER NOW

</a>

</div>

`;

});

}

// SCROLL ANIMATION

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// BACK TO TOP

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#D4AF37;
color:#111;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

console.log("🔥 CIBAI VAPOR READY");

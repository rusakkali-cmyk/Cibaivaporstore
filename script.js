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
name:"FOOM X SWITCH SERIES",
price:"Rs 20,000",
img:"https://i.ibb.co/pkn6hX6/image.png"
},

{
name:"FOOM X SIGNATURE SERIES",
price:"Rs 22,000",
img:"https://i.ibb.co/TM5Qpx6b/image.png"
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

const galleryGrid = document.querySelector(".gallery-grid");

if (galleryGrid) {

    fetch("gallery.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("gallery.json tidak ditemukan");
            }

            return response.json();
        })

        .then(data => {

            galleryGrid.innerHTML = "";

            data.gallery.forEach((item, index) => {

                const galleryItem = document.createElement("div");

                galleryItem.className = "gallery-item";

                galleryItem.innerHTML = `
                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        loading="lazy"
                    >

                    <div class="gallery-overlay">
                        <span>${item.title}</span>
                    </div>
                `;

                galleryItem.addEventListener("click", () => {
                    openGallery(item.image, item.title);
                });

                galleryGrid.appendChild(galleryItem);

            });

        })

        .catch(error => {

            console.error("Gallery Error:", error);

            galleryGrid.innerHTML = `
                <p class="gallery-error">
                    Gallery belum dapat dimuat.
                </p>
            `;

        });

}


function openGallery(image, title) {

    const viewer = document.createElement("div");

    viewer.className = "gallery-viewer";

    viewer.innerHTML = `
        <button class="gallery-close">×</button>

        <div class="gallery-viewer-content">

            <img src="${image}" alt="${title}">

            <h3>${title}</h3>

        </div>
    `;

    document.body.appendChild(viewer);

    document.body.style.overflow = "hidden";

    viewer.querySelector(".gallery-close").onclick = () => {

        viewer.remove();

        document.body.style.overflow = "";

    };

    viewer.addEventListener("click", (event) => {

        if (event.target === viewer) {

            viewer.remove();

            document.body.style.overflow = "";

        }

    });

}
const bgMusic = document.getElementById("bgMusic");

if (bgMusic) {

    bgMusic.volume = 0.35;

    let musicStarted = false;

    function startMusic() {

        if (musicStarted) return;

        bgMusic.play()
            .then(() => {
                musicStarted = true;
                console.log("🎵 Music started");
            })
            .catch(error => {
                console.log("Music gagal dimainkan:", error);
            });
    }

    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });
}
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);

});

console.log("🔥 CIBAI VAPOR READY");


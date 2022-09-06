window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})


/*  testimonials  */
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    
});

let input = Array.from(document.querySelectorAll(".contact-form form .input .min-input input"))
window.onkeyup = function (e) {
   input.forEach(el => {

           if (el == e.target) {
               if (el.value !== '') {
                  el.parentElement.classList.add("plachoolder");
              } else {
                   el.parentElement.classList.remove("plachoolder");
              }
           }
       
   })
}

var footer = document.getElementById('under-footer'),
    year = new Date().getFullYear();

footer.innerHTML = ` Copyright &copy; ${year} All Rights Reserved, created by : abaya6054@gmail.com `

let service = document.querySelector("header .nav-options .drop-down .hfc "),

    nodrop = document.querySelector("header .nav-options .drop-down");

window.onclick = function (e) {

    if (e.target !== service ) {
        nodrop.classList.remove("drop")
        
    } else {
        e.preventDefault();
        e.target.parentElement.classList.toggle("drop");
    }

}
let accueilb = document.querySelector("#accueilb");
let serviceb = document.querySelector("#serviceb");
let avisb = document.querySelector("#avisb");
let contactb = document.querySelector("#contactb");
let menu = document.querySelector("header .nav-options ");
let menuBtn = document.querySelector("header .hamberger");
let concelBtn = document.querySelector("header .close-nav ");


menuBtn.onclick = function () {
    menu.classList.add("active");
    menuBtn.classList.add("hide");  
}
concelBtn.onclick = function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");   
}
accueilb.onclick = function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

avisb.onclick = function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}
contactb.onclick = function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

let humbergerDropOne = document.createElement('div');
    humbergerDropOne.classList.add('humberger-drop');
   


        let menuu = document.createElement('ul');
        menuu.classList.add('drop-down-services');
        
humbergerDropOne.appendChild(menuu)
        function createMenuItem(name, href) {
            let li = document.createElement('li');

            li.classList.add("li")
            let a = document.createElement('a');
            li.appendChild(a)
            a.setAttribute("href", href)
            a.textContent = name;
            return li;
        }

menuu.appendChild(createMenuItem('plomberie', 'plomberie.html'));
menuu.appendChild(createMenuItem('peinture', 'peinture.html'));
menuu.appendChild(createMenuItem('maçonnerie', 'maçon.html'));
menuu.appendChild(createMenuItem('electricite', 'electricite.html'));
menuu.appendChild(createMenuItem('menuiserie', 'menuiserie.html'));
menuu.appendChild(createMenuItem('rénovation', 'renovation.html'));


let offset = document.querySelector(".nav-options .res-nav ");


if (window.innerWidth <= 991) {

    offset.insertBefore(humbergerDropOne, offset.childNodes[4]);
    humbergerDropOne.style.display = 'none';
    serviceb.onclick = function () {
        humbergerDropOne.classList.toggle("display-service");

    } 

} else {
    humbergerDropOne.remove()
}
window.onresize = function () {
    if (window.innerWidth <= 991) {

        offset.insertBefore(humbergerDropOne, offset.childNodes[4]);
        humbergerDropOne.style.display = 'none';
        serviceb.onclick = function () {
            humbergerDropOne.classList.toggle("display-service");

        }

    } else {
        humbergerDropOne.remove()
    }
}
/* AOS LIBRARY*/
AOS.init();


const textOption = document.querySelector('text-option');
AOS.init();

    
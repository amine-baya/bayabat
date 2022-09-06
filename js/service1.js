window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

var footer = document.getElementById('under-footer'),
    year = new Date().getFullYear();

footer.innerHTML = ` Copyright &copy; ${year} All Rights Reserved, created by : abaya6054@gmail.com `

let service = document.querySelector("header .nav-options .drop-down .hfc "),

    nodrop = document.querySelector("header .nav-options .drop-down");
window.onclick = function (e) {

    if (e.target !== service) {
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
let imgchoise = document.querySelector("#secondary-slider .splide__list ");

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};


document.onclick = (e) => {

    if (e.target.parentElement.parentElement == imgchoise) {

        let sibling = getSiblings(e.target.parentElement);

        sibling.forEach(el => {
            el.classList.remove("active")
        })
        e.target.parentElement.classList.add("active")

    }
}
let imgBox = document.querySelector("#imgBox");
function imgGallery(img) {
    imgBox.src = img;
};
let peint = document.querySelector(".options .betwin")
let yajoura = Array.from(document.querySelectorAll(" .options .yajoura div img"))
let yajouraplace = document.querySelector(".options .yajoura")
window.onscroll = (e) => {
    if (e.path[1].location.pathname ==  "/peinture.html") {
        if (peint.getBoundingClientRect().top - window.pageYOffset < 300) {
            peint.classList.add("active")
        }
    }
    if (e.path[1].location.pathname == "/ma%C3%A7on.html") {
        if (yajouraplace.getBoundingClientRect().top - window.pageYOffset < 100) {
            console.log(yajouraplace.getBoundingClientRect().top);
            console.log(window.pageYOffset);
            yajoura.forEach((el, ix) => {
                let second = ix / 2
                el.style.animationDelay = `${second}s `
                el.classList.add("active")
            })
            
        }
    }
}
/* aos library */


AOS.init();

let ISMIN = document.getElementById("ISMIN");
let dupuy = document.getElementById("dupuy");
let bac = document.getElementById("bac");

let text_ISMIN = document.getElementById("text_ISMIN");
let text_dupuy = document.getElementById("text_dupuy");
let text_bac = document.getElementById("text_bac");

let titre_ISMIN = document.getElementById("titre_ISMIN");
let titre_dupuy = document.getElementById("titre_dupuy");
let titre_bac = document.getElementById("titre_bac");

let titre2 = document.getElementById("titre2");
let titre3 = document.getElementById("titre3");
let titre4 = document.getElementById("titre4");
let parentNAV = document.getElementById("navigation");
let Navs = parentNAV.getElementsByClassName('choix');

function cache(titre){
    titre2.style.filter = "blur(5px)";
    titre3.style.filter = "blur(5px)";
    titre4.style.filter = "blur(5px)";

    for(let i =0; i<Navs.length; i++){
        Navs[i].style.filter="blur(5px)";
    }
    document.getElementById("parcours").style.background = "#1f3a46";
    document.getElementById("parcours").style.color = "antiquewhite";


    if(titre === titre_ISMIN){
        ISMIN.style.transform = "scale(1.3)";
        text_ISMIN.style.opacity = "1";
        titre_ISMIN.style.background = "deeppink";
    } else {
        titre_ISMIN.style.filter = "blur(5px)";
    }
    if(titre === titre_dupuy){
        dupuy.style.transform = "scale(1.3)";
        text_dupuy.style.opacity = "1";
        titre_dupuy.style.background = "deeppink";
    } else {
        titre_dupuy.style.filter = "blur(5px)";
    }
    if(titre === titre_bac){
        bac.style.transform = "scale(1.3)";
        text_bac.style.opacity = "1";
        titre_bac.style.background = "deeppink";
    } else {
        titre_bac.style.filter = "blur(5px)";
    }
    }

function cache_plus(titre){
    titre2.style.filter = "blur(0px)";
    titre3.style.filter = "blur(0px)";
    titre4.style.filter = "blur(0px)";

    for(let i =0; i<Navs.length; i++){
        Navs[i].style.filter="blur(0px)";
    }
    document.getElementById("parcours").style.background = "antiquewhite";
    document.getElementById("parcours").style.color = "#1f3a46";
    if(titre === ISMIN || titre === text_ISMIN){
        ISMIN.style.transform = "scale(1.0)";
        text_ISMIN.style.opacity = "0";
        titre_ISMIN.style.background = "#112c38";
    } else {
        titre_ISMIN.style.filter = "blur(0px)";
    }
    if(titre === dupuy || titre === text_dupuy){
        dupuy.style.transform = "scale(1.0)";
        text_dupuy.style.opacity = "0";
        titre_dupuy.style.background = "#112c38";
    } else {
        titre_dupuy.style.filter = "blur(0px)";
    }
    if(titre === bac || titre === text_bac){
        bac.style.transform = "scale(1.0)";
        text_bac.style.opacity = "0";
        titre_bac.style.background = "#112c38";
    } else {
        titre_bac.style.filter = "blur(0px)";
    }
}



/* pour la partie ISMIN .....*/
titre_ISMIN.onmouseover = function () {
    cache(this);
};
ISMIN.onmouseover = function(){
    if(getComputedStyle(text_ISMIN).opacity !== "0"){
        cache(titre_ISMIN);
    }
};
ISMIN.onmouseout = function () {
    cache_plus(this);
};
text_ISMIN.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie dupuy .....*/
titre_dupuy.onmouseover = function () {
    cache(this);
};
dupuy.onmouseover = function(){
    if(getComputedStyle(text_dupuy).opacity !== "0"){
        cache(titre_dupuy);
    }
};
dupuy.onmouseout = function () {
    cache_plus(this);
};
text_dupuy.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie bac .....*/
titre_bac.onmouseover = function () {
    cache(this);
};
bac.onmouseover = function(){
    if(getComputedStyle(text_bac).opacity !== "0"){
        cache(titre_bac);
    }
};
bac.onmouseout = function () {
    cache_plus(this);
};
text_bac.onmouseout = function () {
    cache_plus(this);
};

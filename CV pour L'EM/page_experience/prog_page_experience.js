let PI = document.getElementById("PI");
let eme = document.getElementById("3eme");
let BDS = document.getElementById("BDS");
let cours = document.getElementById("cours");
let _36h = document.getElementById("36h");
let TIPE = document.getElementById("TIPE");
let aveugles = document.getElementById("aveugles");
let rugby7 = document.getElementById("rugby7");

let text_PI = document.getElementById("text_PI");
let text_3eme = document.getElementById("text_3eme");
let text_BDS = document.getElementById("text_BDS");
let text_cours = document.getElementById("text_cours");
let text_36h = document.getElementById("text_36h");
let text_TIPE = document.getElementById("text_TIPE");
let text_aveugles = document.getElementById("text_aveugles");
let text_rugby7 = document.getElementById("text_rugby7");

let titre_PI = document.getElementById("titre_PI");
let titre_3eme = document.getElementById("titre_3eme");
let titre_BDS = document.getElementById("titre_BDS");
let titre_cours = document.getElementById("titre_cours");
let titre_36h = document.getElementById("titre_36h");
let titre_TIPE = document.getElementById("titre_TIPE");
let titre_aveugles = document.getElementById("titre_aveugles");
let titre_rugby7 = document.getElementById("titre_rugby7");

let titre2 = document.getElementById("titre2");
let titre3 = document.getElementById("titre3");
let parentNAV = document.getElementById("navigation");
let Navs = parentNAV.getElementsByClassName('choix');

function cache(titre){
    titre2.style.filter = "blur(5px)";
    titre3.style.filter = "blur(5px)";

    for(let i =0; i<Navs.length; i++){
        Navs[i].style.filter="blur(5px)";
    }
    document.getElementById("experience").style.background = "#1f3a46";
    document.getElementById("experience").style.color = "antiquewhite";


    if(titre === titre_PI){
        PI.style.transform = "scale(1.3)";
        text_PI.style.opacity = "1";
        titre_PI.style.background = "deeppink";
    } else {
        titre_PI.style.filter = "blur(5px)";
    }
    if(titre === titre_3eme){
        eme.style.transform = "scale(1.3)";
        text_3eme.style.opacity = "1";
        titre_3eme.style.background = "deeppink";
    } else {
        titre_3eme.style.filter = "blur(5px)";
    }
    if(titre === titre_BDS){
        BDS.style.transform = "scale(1.3)";
        text_BDS.style.opacity = "1";
        titre_BDS.style.background = "deeppink";
    } else {
        titre_BDS.style.filter = "blur(5px)";
    }
    if(titre === titre_cours){
        cours.style.transform = "scale(1.3)";
        text_cours.style.opacity = "1";
        titre_cours.style.background = "deeppink";
    } else {
        titre_cours.style.filter = "blur(5px)";
    }
    if(titre === titre_36h){
        _36h.style.transform = "scale(1.3)";
        text_36h.style.opacity = "1";
        titre_36h.style.background = "deeppink";
    } else {
        titre_36h.style.filter = "blur(5px)";
    }
    if(titre === titre_TIPE){
        TIPE.style.transform = "scale(1.3)";
        text_TIPE.style.opacity = "1";
        titre_TIPE.style.background = "deeppink";
    } else {
        titre_TIPE.style.filter = "blur(5px)";
    }
    if(titre === titre_aveugles){
        aveugles.style.transform = "scale(1.3)";
        text_aveugles.style.opacity = "1";
        titre_aveugles.style.background = "deeppink";
    } else {
        titre_aveugles.style.filter = "blur(5px)";
    }
    if(titre === titre_rugby7){
        rugby7.style.transform = "scale(1.3)";
        text_rugby7.style.opacity = "1";
        titre_rugby7.style.background = "deeppink";
    } else {
        titre_rugby7.style.filter = "blur(5px)";
    }
}

function cache_plus(titre){
    titre2.style.filter = "blur(0px)";
    titre3.style.filter = "blur(0px)";


    for(let i =0; i<Navs.length; i++){
        Navs[i].style.filter="blur(0px)";
    }
    document.getElementById("experience").style.background = "antiquewhite";
    document.getElementById("experience").style.color = "#1f3a46";

    if(titre === PI || titre === text_PI){
        PI.style.transform = "scale(1.0)";
        text_PI.style.opacity = "0";
        titre_PI.style.background = "#112c38";
    } else {
        titre_PI.style.filter = "blur(0px)";
    }
    if(titre === eme || titre === text_3eme){
        eme.style.transform = "scale(1.0)";
        text_3eme.style.opacity = "0";
        titre_3eme.style.background = "#112c38";
    } else {
        titre_3eme.style.filter = "blur(0px)";
    }
    if(titre === BDS || titre === text_BDS){
        BDS.style.transform = "scale(1.0)";
        text_BDS.style.opacity = "0";
        titre_BDS.style.background = "#112c38";
    } else {
        titre_BDS.style.filter = "blur(0px)";
    }
    if(titre === cours || titre === text_cours){
        cours.style.transform = "scale(1.0)";
        text_cours.style.opacity = "0";
        titre_cours.style.background = "#112c38";
    } else {
        titre_cours.style.filter = "blur(0px)";
    }
    if(titre === _36h || titre === text_36h){
        _36h.style.transform = "scale(1.0)";
        text_36h.style.opacity = "0";
        titre_36h.style.background = "#112c38";
    } else {
        titre_36h.style.filter = "blur(0px)";
    }
    if(titre === TIPE || titre === text_TIPE){
        TIPE.style.transform = "scale(1.0)";
        text_TIPE.style.opacity = "0";
        titre_TIPE.style.background = "#112c38";
    } else {
        titre_TIPE.style.filter = "blur(0px)";
    }
    if(titre === aveugles || titre === text_aveugles){
        aveugles.style.transform = "scale(1.0)";
        text_aveugles.style.opacity = "0";
        titre_aveugles.style.background = "#112c38";
    } else {
        titre_aveugles.style.filter = "blur(0px)";
    }
    if(titre === rugby7 || titre === text_rugby7){
        rugby7.style.transform = "scale(1.0)";
        text_rugby7.style.opacity = "0";
        titre_rugby7.style.background = "#112c38";
    } else {
        titre_rugby7.style.filter = "blur(0px)";
    }
}



/* pour la partie PI .....*/
titre_PI.onmouseover = function () {
    cache(this);
};
PI.onmouseover = function(){
    if(getComputedStyle(text_PI).opacity !== "0"){
        cache(titre_PI);
    }
};
PI.onmouseout = function () {
    cache_plus(this);
};
text_PI.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie 3eme .....*/
titre_3eme.onmouseover = function () {
    cache(this);
};
eme.onmouseover = function(){
    if(getComputedStyle(text_3eme).opacity !== "0"){
        cache(titre_3eme);
    }
};
eme.onmouseout = function () {
    cache_plus(this);
};
text_3eme.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie BDS .....*/
titre_BDS.onmouseover = function () {
    cache(this);
};
BDS.onmouseover = function(){
    if(getComputedStyle(text_BDS).opacity !== "0"){
        cache(titre_BDS);
    }
};
BDS.onmouseout = function () {
    cache_plus(this);
};
text_BDS.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie cours .....*/
titre_cours.onmouseover = function () {
    cache(this);
};
cours.onmouseover = function(){
    if(getComputedStyle(text_cours).opacity !== "0"){
        cache(titre_cours);
    }
};
cours.onmouseout = function () {
    cache_plus(this);
};
text_cours.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie anglais .....*/
titre_36h.onmouseover = function () {
    cache(this);
};
_36h.onmouseover = function(){
    if(getComputedStyle(text_36h).opacity !== "0"){
        cache(titre_36h);
    }
};
_36h.onmouseout = function () {
    cache_plus(this);
};
text_36h.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie espagnol .....*/
titre_TIPE.onmouseover = function () {
    cache(this);
};
TIPE.onmouseover = function(){
    if(getComputedStyle(text_TIPE).opacity !== "0"){
        cache(titre_TIPE);
    }
};
TIPE.onmouseout = function () {
    cache_plus(this);
};
text_TIPE.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie aveugles .....*/
titre_aveugles.onmouseover = function () {
    cache(this);
};
aveugles.onmouseover = function(){
    if(getComputedStyle(text_aveugles).opacity !== "0"){
        cache(titre_aveugles);
    }
};
aveugles.onmouseout = function () {
    cache_plus(this);
};
text_aveugles.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie rugby7 .....*/
titre_rugby7.onmouseover = function () {
    cache(this);
};
rugby7.onmouseover = function(){
    if(getComputedStyle(text_rugby7).opacity !== "0"){
        cache(titre_rugby7);
    }
};
rugby7.onmouseout = function () {
    cache_plus(this);
};
text_rugby7.onmouseout = function () {
    cache_plus(this);
};


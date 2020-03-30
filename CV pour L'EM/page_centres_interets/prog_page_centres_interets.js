let rugby = document.getElementById("rugby");
let ski = document.getElementById("ski");
let voile = document.getElementById("voile");
let rando = document.getElementById("rando");
let jeux = document.getElementById("jeux");
let voyage = document.getElementById("voyage");

let text_rugby = document.getElementById("text_rugby");
let text_ski = document.getElementById("text_ski");
let text_voile = document.getElementById("text_voile");
let text_rando = document.getElementById("text_rando");
let text_jeux = document.getElementById("text_jeux");
let text_voyage = document.getElementById("text_voyage");

let titre_rugby = document.getElementById("titre_rugby");
let titre_ski = document.getElementById("titre_ski");
let titre_voile = document.getElementById("titre_voile");
let titre_rando = document.getElementById("titre_rando");
let titre_jeux = document.getElementById("titre_jeux");
let titre_voyage = document.getElementById("titre_voyage");

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

    document.getElementById("centre").style.background = "#1f3a46";
    document.getElementById("centre").style.color = "antiquewhite";


    if(titre === titre_rugby){
        rugby.style.transform = "scale(1.3)";
        text_rugby.style.opacity = "1";
        titre_rugby.style.background = "deeppink";
    } else {
        titre_rugby.style.filter = "blur(5px)";
    }
    if(titre === titre_ski){
        ski.style.transform = "scale(1.3)";
        text_ski.style.opacity = "1";
        titre_ski.style.background = "deeppink";
    } else {
        titre_ski.style.filter = "blur(5px)";
    }
    if(titre === titre_voile){
        voile.style.transform = "scale(1.3)";
        text_voile.style.opacity = "1";
        titre_voile.style.background = "deeppink";
    } else {
        titre_voile.style.filter = "blur(5px)";
    }
    if(titre === titre_rando){
        rando.style.transform = "scale(1.3)";
        text_rando.style.opacity = "1";
        titre_rando.style.background = "deeppink";
    } else {
        titre_rando.style.filter = "blur(5px)";
    }
    if(titre === titre_jeux){
        jeux.style.transform = "scale(1.3)";
        text_jeux.style.opacity = "1";
        titre_jeux.style.background = "deeppink";
    } else {
        titre_jeux.style.filter = "blur(5px)";
    }
    if(titre === titre_voyage){
        voyage.style.transform = "scale(1.3)";
        text_voyage.style.opacity = "1";
        titre_voyage.style.background = "deeppink";
    } else {
        titre_voyage.style.filter = "blur(5px)";
    }

}

function cache_plus(titre){
    titre2.style.filter = "blur(0px)";
    titre3.style.filter = "blur(0px)";

    for(let i =0; i<Navs.length; i++){
        Navs[i].style.filter="blur(0px)";
    }
    document.getElementById("centre").style.color = "#1f3a46";
    document.getElementById("centre").style.background = "antiquewhite";

    if(titre === rugby || titre === text_rugby){
        rugby.style.transform = "scale(1.0)";
        text_rugby.style.opacity = "0";
        titre_rugby.style.background = "#112c38";
    } else {
        titre_rugby.style.filter = "blur(0px)";
    }
    if(titre === ski || titre === text_ski){
        ski.style.transform = "scale(1.0)";
        text_ski.style.opacity = "0";
        titre_ski.style.background = "#112c38";
    } else {
        titre_ski.style.filter = "blur(0px)";
    }
    if(titre === voile || titre === text_voile){
        voile.style.transform = "scale(1.0)";
        text_voile.style.opacity = "0";
        titre_voile.style.background = "#112c38";
    } else {
        titre_voile.style.filter = "blur(0px)";
    }
    if(titre === rando || titre === text_rando){
        rando.style.transform = "scale(1.0)";
        text_rando.style.opacity = "0";
        titre_rando.style.background = "#112c38";
    } else {
        titre_rando.style.filter = "blur(0px)";
    }
    if(titre === jeux || titre === text_jeux){
        jeux.style.transform = "scale(1.0)";
        text_jeux.style.opacity = "0";
        titre_jeux.style.background = "#112c38";
    } else {
        titre_jeux.style.filter = "blur(0px)";
    }
    if(titre === voyage || titre === text_voyage){
        voyage.style.transform = "scale(1.0)";
        text_voyage.style.opacity = "0";
        titre_voyage.style.background = "#112c38";
    } else {
        titre_voyage.style.filter = "blur(0px)";
    }
}



/* pour la partie rugby .....*/
titre_rugby.onmouseover = function () {
    cache(this);
};
rugby.onmouseover = function(){
    if(getComputedStyle(text_rugby).opacity !== "0"){
        cache(titre_rugby);
    }
};
rugby.onmouseout = function () {
    cache_plus(this);
};
text_rugby.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie ski .....*/
titre_ski.onmouseover = function () {
    cache(this);
};
ski.onmouseover = function(){
    if(getComputedStyle(text_ski).opacity !== "0"){
        cache(titre_ski);
    }
};
ski.onmouseout = function () {
    cache_plus(this);
};
text_ski.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie voile .....*/
titre_voile.onmouseover = function () {
    cache(this);
};
voile.onmouseover = function(){
    if(getComputedStyle(text_voile).opacity !== "0"){
        cache(titre_voile);
    }
};
voile.onmouseout = function () {
    cache_plus(this);
};
text_voile.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie rando .....*/
titre_rando.onmouseover = function () {
    cache(this);
};
rando.onmouseover = function(){
    if(getComputedStyle(text_rando).opacity !== "0"){
        cache(titre_rando);
    }
};
rando.onmouseout = function () {
    cache_plus(this);
};
text_rando.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie jeux .....*/
titre_jeux.onmouseover = function () {
    cache(this);
};
jeux.onmouseover = function(){
    if(getComputedStyle(text_jeux).opacity !== "0"){
        cache(titre_jeux);
    }
};
jeux.onmouseout = function () {
    cache_plus(this);
};
text_jeux.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie espagnol .....*/
titre_voyage.onmouseover = function () {
    cache(this);
};
voyage.onmouseover = function(){
    if(getComputedStyle(text_voyage).opacity !== "0"){
        cache(titre_voyage);
    }
};
voyage.onmouseout = function () {
    cache_plus(this);
};
text_voyage.onmouseout = function () {
    cache_plus(this);
};


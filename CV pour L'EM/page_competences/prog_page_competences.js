let word = document.getElementById("word");
let python = document.getElementById("python");
let cpp = document.getElementById("cpp");
let dev_web = document.getElementById("dev_web");
let LV1 = document.getElementById("LV1");
let LV2 = document.getElementById("LV2");
let info = document.getElementById("info");
let management = document.getElementById("management");
let micro = document.getElementById("micro");
let reseau = document.getElementById("reseau");


let text_word = document.getElementById("text_word");
let text_python = document.getElementById("text_python");
let text_cpp = document.getElementById("text_cpp");
let text_dev_web = document.getElementById("text_dev_web");
let text_LV1 = document.getElementById("text_LV1");
let text_LV2 = document.getElementById("text_LV2");
let text_info = document.getElementById("text_info");
let text_management = document.getElementById("text_management");
let text_reseau = document.getElementById("text_reseau");
let text_micro = document.getElementById("text_micro");


let titre_word = document.getElementById("titre_word");
let titre_python = document.getElementById("titre_python");
let titre_cpp = document.getElementById("titre_cpp");
let titre_dev_web = document.getElementById("titre_dev_web");
let titre_LV1 = document.getElementById("titre_LV1");
let titre_LV2 = document.getElementById("titre_LV2");
let titre_info = document.getElementById("titre_info");
let titre_management = document.getElementById("titre_management");
let titre_reseau = document.getElementById("titre_reseau");
let titre_micro = document.getElementById("titre_micro");



let titre2 = document.getElementById("titre2");
let titre3 = document.getElementById("titre3");
let titre4 = document.getElementById("titre4");
let titre5 = document.getElementById("titre5");
let parentNAV = document.getElementById("navigation");
let Navs = parentNAV.getElementsByClassName('choix');

function cache(titre){
    titre2.style.filter = "blur(5px)";
    titre3.style.filter = "blur(5px)";
    titre4.style.filter = "blur(5px)";
    titre5.style.filter = "blur(5px)";

    for(let i =0; i<Navs.length; i++){
        Navs[i].style.filter="blur(5px)";
    }
    document.getElementById("competences").style.background = "#1f3a46";
    document.getElementById("competences").style.color = "antiquewhite";


    if(titre === titre_word){
        word.style.transform = "scale(1.3)";
        text_word.style.opacity = "1";
        titre_word.style.background = "deeppink";
    } else {
        titre_word.style.filter = "blur(5px)";
    }
    if(titre === titre_python){
        python.style.transform = "scale(1.3)";
        text_python.style.opacity = "1";
        titre_python.style.background = "deeppink";
    } else {
        titre_python.style.filter = "blur(5px)";
    }
    if(titre === titre_cpp){
        cpp.style.transform = "scale(1.3)";
        text_cpp.style.opacity = "1";
        titre_cpp.style.background = "deeppink";
    } else {
        titre_cpp.style.filter = "blur(5px)";
    }
    if(titre === titre_dev_web){
        dev_web.style.transform = "scale(1.3)";
        text_dev_web.style.opacity = "1";
        titre_dev_web.style.background = "deeppink";
    } else {
        titre_dev_web.style.filter = "blur(5px)";
    }
    if(titre === titre_LV1){
        LV1.style.transform = "scale(1.3)";
        text_LV1.style.opacity = "1";
        titre_LV1.style.background = "deeppink";
    } else {
        titre_LV1.style.filter = "blur(5px)";
    }
    if(titre === titre_LV2){
        LV2.style.transform = "scale(1.3)";
        text_LV2.style.opacity = "1";
        titre_LV2.style.background = "deeppink";
    } else {
        titre_LV2.style.filter = "blur(5px)";
    }
    if(titre === titre_info){
        info.style.transform = "scale(1.3)";
        text_info.style.opacity = "1";
        titre_info.style.background = "deeppink";
    } else {
        titre_info.style.filter = "blur(5px)";
    }
    if(titre === titre_management){
        management.style.transform = "scale(1.3)";
        text_management.style.opacity = "1";
        titre_management.style.background = "deeppink";
    } else {
        titre_management.style.filter = "blur(5px)";
    }
    if(titre === titre_micro){
        micro.style.transform = "scale(1.3)";
        text_micro.style.opacity = "1";
        titre_micro.style.background = "deeppink";
    } else {
        titre_micro.style.filter = "blur(5px)";
    }
    if(titre === titre_reseau){
        reseau.style.transform = "scale(1.3)";
        text_reseau.style.opacity = "1";
        titre_reseau.style.background = "deeppink";
    } else {
        titre_reseau.style.filter = "blur(5px)";
    }
}

function cache_plus(titre){
    titre2.style.filter = "blur(0px)";
    titre3.style.filter = "blur(0px)";
    titre4.style.filter = "blur(0px)";
    titre5.style.filter = "blur(0px)";

    for(let i =0; i<Navs.length; i++){
        Navs[i].style.filter="blur(0px)";
    }
    document.getElementById("competences").style.background = "antiquewhite";
    document.getElementById("competences").style.color = "#1f3a46";
    if(titre === word || titre === text_word){
        word.style.transform = "scale(1.0)";
        text_word.style.opacity = "0";
        titre_word.style.background = "#112c38";
    } else {
        titre_word.style.filter = "blur(0px)";
    }
    if(titre === python || titre === text_python){
        python.style.transform = "scale(1.0)";
        text_python.style.opacity = "0";
        titre_python.style.background = "#112c38";
    } else {
        titre_python.style.filter = "blur(0px)";
    }
    if(titre === cpp || titre === text_cpp){
        cpp.style.transform = "scale(1.0)";
        text_cpp.style.opacity = "0";
        titre_cpp.style.background = "#112c38";
    } else {
        titre_cpp.style.filter = "blur(0px)";
    }
    if(titre === dev_web || titre === text_dev_web){
        dev_web.style.transform = "scale(1.0)";
        text_dev_web.style.opacity = "0";
        titre_dev_web.style.background = "#112c38";
    } else {
        titre_dev_web.style.filter = "blur(0px)";
    }
    if(titre === LV1 || titre === text_LV1){
        LV1.style.transform = "scale(1.0)";
        text_LV1.style.opacity = "0";
        titre_LV1.style.background = "#112c38";
    } else {
        titre_LV1.style.filter = "blur(0px)";
    }
    if(titre === LV2 || titre === text_LV2){
        LV2.style.transform = "scale(1.0)";
        text_LV2.style.opacity = "0";
        titre_LV2.style.background = "#112c38";
    } else {
        titre_LV2.style.filter = "blur(0px)";
    }
    if(titre === info || titre === text_info){
        info.style.transform = "scale(1.0)";
        text_info.style.opacity = "0";
        titre_info.style.background = "#112c38";
    } else {
        titre_info.style.filter = "blur(0px)";
    }
    if(titre === management || titre === text_management){
        management.style.transform = "scale(1.0)";
        text_management.style.opacity = "0";
        titre_management.style.background = "#112c38";
    } else {
        titre_management.style.filter = "blur(0px)";
    }
    if(titre === micro || titre === text_micro){
        micro.style.transform = "scale(1.0)";
        text_micro.style.opacity = "0";
        titre_micro.style.background = "#112c38";
    } else {
        titre_micro.style.filter = "blur(0px)";
    }
    if(titre === reseau || titre === text_reseau){
        reseau.style.transform = "scale(1.0)";
        text_reseau.style.opacity = "0";
        titre_reseau.style.background = "#112c38";
    } else {
        titre_reseau.style.filter = "blur(0px)";
    }
}



/* pour la partie Word .....*/
titre_word.onmouseover = function () {
    cache(this);
};
word.onmouseover = function(){
    if(getComputedStyle(text_word).opacity !== "0"){
        cache(titre_word);
    }
};
word.onmouseout = function () {
    cache_plus(this);
};
text_word.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie python .....*/
titre_python.onmouseover = function () {
    cache(this);
};
python.onmouseover = function(){
    if(getComputedStyle(text_python).opacity !== "0"){
        cache(titre_python);
    }
};
python.onmouseout = function () {
    cache_plus(this);
};
text_python.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie cpp .....*/
titre_cpp.onmouseover = function () {
    cache(this);
};
cpp.onmouseover = function(){
    if(getComputedStyle(text_cpp).opacity !== "0"){
        cache(titre_cpp);
    }
};
cpp.onmouseout = function () {
    cache_plus(this);
};
text_cpp.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie dev_web .....*/
titre_dev_web.onmouseover = function () {
    cache(this);
};
dev_web.onmouseover = function(){
    if(getComputedStyle(text_dev_web).opacity !== "0"){
        cache(titre_dev_web);
    }
};
dev_web.onmouseout = function () {
    cache_plus(this);
};
text_dev_web.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie anglais .....*/
titre_LV1.onmouseover = function () {
    cache(this);
};
LV1.onmouseover = function(){
    if(getComputedStyle(text_LV1).opacity !== "0"){
        cache(titre_LV1);
    }
};
LV1.onmouseout = function () {
    cache_plus(this);
};
text_LV1.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie espagnol .....*/
titre_LV2.onmouseover = function () {
    cache(this);
};
LV2.onmouseover = function(){
    if(getComputedStyle(text_LV2).opacity !== "0"){
        cache(titre_LV2);
    }
};
LV2.onmouseout = function () {
    cache_plus(this);
};
text_LV2.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie info .....*/
titre_info.onmouseover = function () {
    cache(this);
};
info.onmouseover = function(){
    if(getComputedStyle(text_info).opacity !== "0"){
        cache(titre_info);
    }
};
info.onmouseout = function () {
    cache_plus(this);
};
text_info.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie management .....*/
titre_management.onmouseover = function () {
    cache(this);
};
management.onmouseover = function(){
    if(getComputedStyle(text_management).opacity !== "0"){
        cache(titre_management);
    }
};
management.onmouseout = function () {
    cache_plus(this);
};
text_management.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie reseau .....*/
titre_reseau.onmouseover = function () {
    cache(this);
};
reseau.onmouseover = function(){
    if(getComputedStyle(text_reseau).opacity !== "0"){
        cache(titre_reseau);
    }
};
reseau.onmouseout = function () {
    cache_plus(this);
};
text_reseau.onmouseout = function () {
    cache_plus(this);
};

/* pour la partie micro .....*/
titre_micro.onmouseover = function () {
    cache(this);
};
micro.onmouseover = function(){
    if(getComputedStyle(text_micro).opacity !== "0"){
        cache(titre_micro);
    }
};
micro.onmouseout = function () {
    cache_plus(this);
};
text_micro.onmouseout = function () {
    cache_plus(this);
};
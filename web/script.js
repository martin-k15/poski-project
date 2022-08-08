// 1
let contentElement = this.document.querySelector(".content");
let numberofCards = contentElement.childElementCount;
console.log("Počet příspěvků: " + numberofCards);
console.log("Pozn.: Bere se v úvahu i informativní banner")

// 2 
let articles = [];
let articleElement1 = this.document.getElementById('article-1');
let articleElement2 = this.document.getElementById('article-2');
let articleElement3 = this.document.getElementById('article-3');
let articleElement4 = this.document.getElementById('article-4');
let articleElementSpecial = this.document.getElementById('article-special');

let averageHeight = 0;

articles.push(articleElement1, articleElement2, articleElement3, articleElement4, articleElementSpecial);
articles.forEach(article => {
    article.addEventListener('click', getArticleInfo); // event pro bod č. 4
    averageHeight += article.offsetHeight;
});

averageHeight = averageHeight / articles.length;

console.log("Průměrná výška příspěvků: " + averageHeight);


// 3
let headers = [];
articles.forEach(a => {
    headers.push(a.childNodes[3]);
});

let sumOfAllLengthCards = 0;

headers.forEach(header => {
    sumOfAllLengthCards += header.offsetWidth;
});

console.log("Součet délek nadpisů příspěvků: " + sumOfAllLengthCards);



// 4 
function getArticleInfo(e) {
    console.log("Název: " + e.target.childNodes[3].childNodes[1].innerHTML)
    console.log("Datum: " + Date());
    console.log("Délka (nadpisu): " + e.target.childNodes[3].offsetWidth)
};



/* Hamburger menu */
let ham = this.document.getElementById('box-hamburger')
console.log(ham)

menuIsHidden = true;

function showMenu() {
    if (menuIsHidden) {
        ham.style.display = "flex";
        ham.style.flexDirection = "column";
        slowAnimation()
        menuIsHidden = !menuIsHidden;
    } else {
        ham.style.display = "none";
        menuIsHidden = !menuIsHidden;
    }
};

function slowAnimation() {

    ham.animate([{ left: "-400px" }, { left: "0" }], {
        duration: 250
    });
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    console.log("Ham ")
    console.log(menuBtn)
    if (!menuOpen) {
        menuBtn.classList.add('open');
        console.log(menuBtn.classList)
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        console.log(menuBtn.classList)
        menuOpen = false;
    }
})
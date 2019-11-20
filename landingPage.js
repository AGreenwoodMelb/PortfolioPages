let recentTabBtn = document.querySelector(".recentTab");
let searchTabBtn = document.querySelector(".searchTab");


let previewTab = document.querySelector(".previewContainer");
let recentTab = document.querySelector(".recentContainer");
let searchTab = document.querySelector(".searchContainer");

let activeTabID = 1;

recentTabBtn.addEventListener("click", () => {
    if (activeTabID != 2) {
        activeTabID = 2;
        recentTab.classList.remove("hidden");
        recentTabBtn.style.backgroundColor = 'grey';
        searchTab.classList.add("hidden");
        searchTabBtn.style.backgroundColor = 'initial';
        previewTab.classList.add("hidden");
    } else {
        activeTabID = 1;
        previewTab.classList.remove("hidden")
        recentTab.classList.add("hidden");
        recentTabBtn.style.backgroundColor = 'initial';
    }
});

searchTabBtn.addEventListener("click", () => {
    if (activeTabID != 3) {
        activeTabID = 3;
        searchTab.classList.remove("hidden");
        searchTabBtn.style.backgroundColor = 'grey';
        recentTab.classList.add("hidden");
        recentTabBtn.style.backgroundColor = 'initial';
        previewTab.classList.add("hidden");
    } else {
        activeTabID = 1;
        previewTab.classList.remove("hidden")
        searchTab.classList.add("hidden");
        searchTabBtn.style.backgroundColor = 'initial';
    }
});

//Add to every Page
let togglePortNavBtn = document.querySelector(".toggle-portfolioNav-display");
let portfolioNav = document.querySelector(".portfolioNav");
let isPortfolioNavHidden = true;
let inforOpenBtn = document.querySelector(".openPageInfo-btn");
let infoCloseBtn = document.querySelector(".closePageInfo-btn");
let pageInfo = document.querySelector(".pageInfo");

togglePortNavBtn.addEventListener('click', () => {
    console.log("pew");
    isPortfolioNavHidden = !isPortfolioNavHidden;
    if (isPortfolioNavHidden) {
        portfolioNav.classList.add("portfolioNav-hidden");
        togglePortNavBtn.value = '?';
        togglePortNavBtn.style.color = 'white';
    } else {
        portfolioNav.classList.remove("portfolioNav-hidden");
        togglePortNavBtn.value = 'X';
        togglePortNavBtn.style.color = 'grey';
    }
});

infoCloseBtn.addEventListener('click', () => {
    pageInfo.classList.add('hidden');
});

inforOpenBtn.addEventListener('click', () => {
    pageInfo.classList.remove('hidden');
});





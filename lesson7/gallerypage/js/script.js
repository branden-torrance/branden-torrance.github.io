// JavaScript code to toggle "hide" for the dropdown menu

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//==================================================================================================
// Code for Date

const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);   // "now" is using the created variable... 
                                                                                            // ... for new Date on line #11

// instead of "full" for dateStyle, you can also use options of "long", "medium", or "short"

datefield.textContent = fulldate;

// .textContent will work just like .innerHTML.
    // However, .innerHTML will support embedded html code (such as <em></em>, <strong></strong>, etc.).
    // .textContent does not support embedded html code.


//==================================================================================================
// Code for bannerMessage toggle

const today = new Date();
const dayNumber = today.getDay();

const element = document.getElementById("bannerMessage");
if (dayNumber == 5) {                             // Day "5" is Friday
    element.classList.add("showme");
} 
else {
    element.classList.add("hideme")
}


//==================================================================================================
// Code for lazy-load on Weather Gallery page

const images = document.querySelectorAll("[data-src]")

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;

    img.onload = () => {img.removeAttribute("data-src");};
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
});

//==================================================================================================
// Code for Last Visited

let visitNow = new Date();
let visitLast = new Date(localStorage.getItem("lastVisit"));
const oneDay = 1000 * 60 * 60 * 24;
const timeDiff = visitLast.getTime() - visitNow.getTime();
const daysDiff = Math.round(timeDiff / oneDay);

if (daysDiff == 1) {
    document.getElementById('lastVisit').innerHTML = "1 day ago";
}
else if (daysDiff < 0) {
    document.getElementById('lastVisit').innerHTML = "0 days ago";
}
else {
    document.getElementById('lastVisit').innerHTML = daysDiff + " days ago";
}

localStorage.setItem("lastVisit", visitNow);
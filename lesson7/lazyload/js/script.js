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



// // This gets all the images with the data-src attribute
// const imagesToLoad = document.querySelectorAll("[data-src]");

// // Optional parameters set for the Intersection Observer
// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px -100px 0px"
// };

// const imgObserver = (image) => {
//     image.setAttribute('src', image.getAttribute("data-src"));
//     image.onload = () => {image.removeAttribute("data-src");
//     };
// };

// // Checks to see if Intersection Observer is supported
// if("IntersectionObserver" in window) {
//     const imgObserver = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//         });
//     }, imgOptions);

//     // loops through each img, checks status, and loads if necessary.
//     imagesToLoad.forEach((img) => {
//         imgObserver.observe(img);
//     });
// }
// else {
//     // This will simply load all images if Intersection Observer is not supported
// }
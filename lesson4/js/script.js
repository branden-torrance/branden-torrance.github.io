// JavaScript code to toggle "hide" for the dropdown menu

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//==================================================================================================
// JavaScript code for Date

const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);   // "now" is using the created variable... 
                                                                                            //... for new Date on line #11

// instead of "full" for dateStyle, you can also use options of "long", "medium", or "short"

datefield.textContent = fulldate;

// .textContent will work just like .innerHTML.
    // However, .innerHTML will support embedded html code (such as <em></em>, <strong></strong>, etc.).
    // .textContent does not support embedded html code.

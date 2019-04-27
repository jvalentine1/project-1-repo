//Logo Populate Variables
var logo = "Music That Follows You";
var logoCount = 0;

//Fades In Page Content
function fadeIn() {
    $(".fader-start").removeClass("fader-none");
    $(".fader-start").addClass("fader-go");
}

//sets interval for logoRender
function openPage() {
    setInterval(logoRender, 50);
}

//Populates application logo
function logoRender() {
    
    $("#logo").append(logo[logoCount]);
    logoCount++;
    if (logoCount === 22) {
        clearInterval(logoRender);
    }
}

//Calls logo render function and sets timeout for all page fadeins
openPage();
setTimeout(fadeIn, 500);
// https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     window.oRequestAnimationFrame ||
     window.msRequestAnimationFrame ||
     function(/* function */ callback, /* DOMElement */ element){
         window.setTimeout(callback, 1000 / 60);
     };
})();

window.onload = function init() {
    // called after the page is entirely loaded
    requestAnimFrame(mainLoop);
};

function mainLoop(timestamp) {
    document.body.innerHTML += '*';

    // call back itself every 60th of second
    requestAnimFrame(mainLoop);
}
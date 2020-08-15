// 60 times per second (16.6 ms = 1/60 s)
window.onload = function init() {
    // called after the page is entirely loaded
    requestAnimationFrame(mainLoop);
};

function mainLoop(timestamp) {
    document.body.innerHTML += '*';

    // call back itself every 60th of second
    requestAnimationFrame(mainLoop);
}

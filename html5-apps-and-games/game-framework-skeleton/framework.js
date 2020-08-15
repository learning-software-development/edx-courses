let GF = function () {

    // vars for counting frames/s, used by the measureFPS function
    let frameCount = 0;
    let lastTime;
    let fpsContainer;
    let fps;

    let measureFPS = function (newTime) {

        // test for the very first invocation
        if (lastTime === undefined) {
            lastTime = newTime;
            return
        }

        // calculate the delta between last & current frame
        let diffTime = newTime - lastTime;

        if (diffTime > 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = newTime;
        }

        // and display it in an element we appended to the
        // document in the start() function
        fpsContainer.innerHTML = 'FPS: ' + fps;
        frameCount++;
    }

    let mainLoop = function (time) {
        // compute FPS, called each frame, uses the high resolution time parameter
        // given by the browser that implements the requestAnimationFrame API
        measureFPS(time);

        // call the animation loop every 1/60th of second
        requestAnimationFrame(mainLoop);
    };

    let start = function () {
        // adds a div for displaying the fps value
        fpsContainer = document.createElement('div');
        document.body.appendChild(fpsContainer);

        requestAnimationFrame(mainLoop);
    };

    // Our GameFramework returns a public API visible from outside its scope
    // Here we only expose the start method, under the "start" property name.
    return {
        start: start
    };
}

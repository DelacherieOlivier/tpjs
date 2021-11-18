import { Grille } from './Grille.js';
/*
import { IPoint, Point } from './Point.js';
import { IView3D, View3D } from './View3D.js';
*/
function init() {
    const mapCanvas = document.getElementById("map");
    const viewCanvas = document.getElementById("view");
    window.addEventListener("keyup", (evt) => {
        switch (evt.key) {
            case "ArrowUp":
                console.log("up");
                break;
            case "ArrowDown":
                console.log("down");
                break;
            case "ArrowLeft":
                console.log("left");
                break;
            case "ArrowRight":
                console.log("right");
                break;
        }
        //evt.preventDefault()
    });
    window.addEventListener("keydown", (evt) => {
        switch (evt.key) {
            case "ArrowUp":
                console.log("up");
                break;
            case "ArrowDown":
                console.log("down");
                break;
            case "ArrowLeft":
                console.log("left");
                break;
            case "ArrowRight":
                console.log("right");
                break;
        }
        //evt.preventDefault()
    });
    const delay = Math.floor(1000 / 30);
    let lastTime = Date.now();
    function render() {
        const newTime = Date.now();
        const delay = newTime - lastTime;
        grille.dessine();
        /*point.deplace(delay)
        grille.lanceRayons( point.x, point.y, point.angle )
        point.dessine()
        view3D.dessine()
        */
        //console.log(delay)
        lastTime = newTime;
    }
    setInterval(render, delay);
    const blockStyles = { 1: "rgba(238,68,0,1.0)" };
    const grille = new Grille({
        canvas: mapCanvas,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        blockStyles,
        couleurFond: "#EEE",
        couleurGrille: "#333",
        nbRayons: viewCanvas.width,
        angleRayons: Math.PI * .5,
        //vue: view3D
    });
}
init();
//# sourceMappingURL=main.js.map
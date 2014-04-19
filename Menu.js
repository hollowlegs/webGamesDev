var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

init();

function init(){
    createBorders();
    createMenu();
}

function createBorders(){
    ctx.fillstyle = "Black";
    ctx.fillRect(0, 0, screen.width, screen.height / 10);
    ctx.fillRect(0, 400, screen.width, screen.height / 10);
}

function createMenu() {
    ctx.font = "30pt Arial";
    ctx.fillStyle = "Red";
    ctx.fillText("Dungeon Crawler", 100, 150);
}
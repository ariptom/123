var sr = window.webkitSpeechRecognition;
var recognition = new sr();
drawRect = "";
drawCircle = "";
width = 0;
height = 0;
x = 0;
y = 0;

function preload() { }
function setup() {
    canvas = createCanvas(900, 500);
}
function draw() {
    if (drawRect == "set") {
        rect(x,y,width,height);

    }
    if(drawCircle=="set"){
        circle(x,y,width);
    }
}
function start() {
    recognition.start();
    document.getElementById("status").innerHTML = "Microphone turned on";
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "speech recognised as : " + content;
    width=Math.floor(Math.random()*50);
    height=Math.floor(Math.random()*100);
    x=Math.floor(Math.random()*850);
    y=Math.floor(Math.random()*400);
    if (content == "rectangle") {
        drawRect = "set";
        drawCircle="";
    }
    if (content == "circle") {
        drawCircle = "set";
        drawRect="";
    }
}
function s1(x, a) {
    var num = 0;
    for(var i = 0; i < x.length; i++) {
        if(x.charAt(i) == a) {
            num++;
        }
    }
    console.log(num);
}
s1("dada1sdadsadasdada", "a");

function s4() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var Str = "";
    for(var i = 0; i < 40; i++) {
        rand = Math.floor(Math.random() * 26);
        Str+=chars[rand];
    }
    console.log(Str);
}
s4();

function gverdebi(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Gvari() {
    return Math.floor(Math.random() * 3);
}

function dzieba() {
    var satauri = document.getElementById("satauri").value;
    var fasi = document.getElementById("fasi").value;
    const conditions = ["!", "#", "@"];
    const gvarebi = ["ნიკა თავაძე", "ნინო გუდაძე", "ვანო ნარიმანიძე", "ლიკა ნიორაძე"];
    const test = conditions.some(el => satauri.includes(el));
    console.log(test);
    if(test) {
        satauri = satauri.replace('!', '');
        satauri = satauri.replace('#', '');
        satauri = satauri.replace('@', '');
    }
    document.getElementById("satauri").value = satauri;
    var gverdebi = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    document.getElementById("gverdebi").value = gverdebi;
    var newGvari = Math.floor(Math.random() * 4);
    document.getElementById("avtori").value = gvarebi[newGvari];
    if(fasi.length == 2 && Number.isInteger(parseInt(fasi))) {
        document.getElementById("fasi").value = "ორნიშნაა";
    }
    else {
        document.getElementById("fasi").value = "არააორნიშნა";
    }
    var tiraji = Math.floor((gverdebi * 20) / 100);
    document.getElementById("tiraji").value = tiraji;
    prompt("dada?");
 
}

setInterval(clock, 1000)

function clock(){
    console.log("Test");
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
   
}

function drawTable(){
    var b = 4
    var a = b;

    // var N = inputs[0].value;
    // var M = inputs[1].value;
    var tb = "<table>";
        for(let i=0; i<3; i++){
            tb += "<tr>";
                for(let j=0; j<5; j++){  
                    if(a%2==1){  
                        tb += "<td style='background:yellow'>";
                        tb += a;
                        a += b;
                        tb += "</td>";
                    }else{
                        tb += "<td style='background:green'>";
                        tb += a;
                        a += b;
                        tb += "</td>";
                    }
                    // console.log(a);
                }
            tb += "</tr>";
        }
    tb += "</table>";
    document.getElementById("das").innerHTML = tb;
}

function key_down(e){
    console.log(e);
    console.log("Down - "+e.keyCode);
}

function get_random_digit(){
    return Math.floor(Math.random()*10);
}

function show_random_digits(){
    generate_digits();
    var start = setInterval(generate_digits, 4000);
}


function generate_digits(){
    var abc = document.getElementById('abc');
    var content = "";
    for(let i=0; i<7; i++){
       content +=  get_random_digit();
    }
    abc.innerHTML = content;
}

var buttons = document.getElementsByTagName("button");
var square = document.getElementById("square");
var colours = ["brown", "black", "green", "blue"];
const ball_speed = 1000, timer_speed = 1000, refresh_time = 100000, max_point = 50;
document.getElementById("timer").innerText = 5;
// console.log(buttons);

/*
buttons[0].addEventListener("click", function(){
    this.setAttribute("disabled", "disabled");
    // console.log("TEST");
    add_ball = setInterval(function(){
        var ball = document.createElement("div");
        // console.log(ball);
        ball.classList.add("ball");
        ball.style.backgroundColor = colours[Math.floor(Math.random()*colours.length)];
        ball.style.top = Math.random()*420+"px";
        ball.style.left = Math.random()*620+"px";
        ball.innerText = Math.floor(Math.random()*max_point);
        square.appendChild(ball);
        ball.addEventListener("click", function(){
            // console.log(this.parentElement);
            this.parentElement.removeChild(this);
            var points = parseInt(buttons[1].innerText);
            points += parseInt(this.innerText);
            buttons[1].innerText = points;
        });
    }, ball_speed);

    timer = setInterval(function(){
        var timer_span = document.getElementById("timer");
        var t = parseInt(timer_span.innerText);
        t -= 1;
        timer_span.innerText = t;
        if(t==0){
            clearInterval(timer);
            clearInterval(add_ball);
            for(let i=0; i<square.children.length; i++){
                var old_element = square.children[i];
                var new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);     
            }
            setTimeout(function(){
                location.reload();
            }, refresh_time)
        }
    }, timer_speed);
})
*/
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="controls">
            <button>Add Ball</button>
            <button>0</button>
            <button>Timer:<span id="timer"></span></button>
        </div>
        <div class="square" id="square"></div>
    </div>
    <script src="app.js"></script>
</body>
</html>
*/




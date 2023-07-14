document.addEventListener('keydown', function(e) {
    var el = document.getElementById("moving");
    if(e.code == 'ArrowLeft') {
        el.style.width = "150px"
        el.style.backgroundColor = 'Red';
        
    }
    if(e.code == 'ArrowRight') {
        el.style.width = "100%";
        el.style.backgroundColor = 'Lightgreen';
        
    }
    if(e.code == 'ArrowDown') {
        el.style.height = "300px";
        
    }
    if(e.code == 'ArrowUp') {
        el.style.height = "80px";
        
    }
    if(e.keyCode === 65) {
        Move(3);
    }
    if(e.keyCode === 87) {
        Move(1);
    }
    if(e.keyCode === 83) {
        Move(2);
    }
    if(e.keyCode === 68) {
        Move(4);
    }
});
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
      }
  }
  var stopa = false;
  var inter;
  function Timer() {
    console.log(stopa);
    if(stopa == true) {
        stopa = false;
       console.log(1);
       clearInterval(inter);
       document.getElementById("timera").innerHTML = "";
       return;
    }
    if(stopa == false) {
        var minute = document.getElementById("timm").value;
        console.log(12);
    var sec = 60;
    inter = setInterval(function() {
      document.getElementById("timera").innerHTML = minute +  "min:" + sec + "sec";
      sec--;
  
      if (sec == 00) {
        minute--;
        sec = 59;
  
        if (minute == 0) {
          minute = 5;
        }
      }
    }, 1000);
    stopa = true;
    }
    
  }
  var clock;
  var stoppa = false;
  function ClockWork() {
    if(stoppa == true) {
        stoppa = false;
        clearInterval(clock);
        document.getElementById("clock").innerHTML = "";
        return;
    }
    if(stoppa == false) {
    var sec = 0;
    var min = 0;
    clock = setInterval(function() {
        document.getElementById("clock").innerHTML = min + "min:" + sec + "sec";
        sec++;
        if(sec == 60) {
            min++;
            sec = 0;
            
        }
    }, 1000);
    stoppa = true;
  }
}
  
  var h = 0;
  var v = 0;


function Move(e) {
    var d = document.getElementById("moving");
    if(e === 1) {
        v-=10;
        d.style.transform = "translate3d(" + h + "px," + v + "px,0)";
    }
    if(e === 2) {
        v+=10;
        d.style.transform = "translate3d(" + h + "px," + v + "px,0)";
    }
    if(e === 3) {
        h-=10;
        d.style.transform = "translate3d(" + h + "px," + v + "px,0)";
    }
    if(e === 4) {
        h+=10;
        d.style.transform = "translate3d(" + h + "px," + v + "px,0)";
    }
    if(e === 5) {
        v-=10;
        h-=10;
        d.style.transform = "translate3d(" + h + "px," + v + "px,0)";
    }
    if(e === 6) {
        v-=10;
        h+=10;
        d.style.transform = "translate3d(" + h + "px," + v + "px,0)";
    }
    if(e === 7) {
        v+=10;
        h-=10;
        d.style.transform = "translate3d(" + h + "px," + v + "px,0)";
    }
    if(e === 8) {
        v+=10;
        h+=10;
        d.style.transform = "translate3d(" + h + "px," + v + "px,0)";
    }


}



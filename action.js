function kv(e) {
    if(e == 1) {
    document.getElementById("kvira").value = "ორშაბათი";
    }
    else if(e == 2) {
        document.getElementById("kvira").value = "სამშაბათი";
    }
    else if(e == 3) {
        document.getElementById("kvira").value = "ოთხშაბათი";
    }
    else if(e == 4) {
        document.getElementById("kvira").value = "ხუთშაბათი";
    }
    else if(e == 5) {
        document.getElementById("kvira").value = "პარასკევი";
    }
    else if(e == 6) {
        document.getElementById("kvira").value = "შაბათი";
    }
    else if(e == 7) {
        document.getElementById("kvira").value = "კვირა";
    }

}
function xarisxi() {
    var num = parseInt(document.getElementById("calc").value);
    var numm = num * num;
    document.getElementById("calc").value = numm;
}
function fesvi() {
    var num = parseInt(document.getElementById("calc").value);
    var numm = Math.sqrt(num);
    document.getElementById("calc").value = numm;
}
function gamotvla() {
    ricxvi = document.getElementById("ricxvi").value;
    procenti = document.getElementById("procenti").value;
    pas = (ricxvi * procenti) / 100;
    document.getElementById("gamotvla").value = pas;
}
function washla() {
    var str = document.getElementById("calc").value;
    var newStr = str.slice(0, -1);
    document.getElementById("calc").value = newStr;
}
function randomizer() {
    document.getElementById("ocdaati").innerHTML = "";
    for(var i = 0; i < 30; i++) {
        var span = document.createElement("span");
        var numb = Math.floor(Math.random() *(30-0 + 1));
        span.innerHTML = numb;
        document.getElementById("ocdaati").appendChild(span);
    }
}
function randomizera() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);

    document.getElementById("ocdaatii").innerHTML = "";
    for(var i = 0; i < 30; i++) {
        var span = document.createElement("span");
         numba = Math.floor(Math.random() * (max - min + 1) + min);
        
        span.innerHTML = numba;
        console.log(numba);
        document.getElementById("ocdaatii").appendChild(span);
    }
    console.log(min);
    console.log(max);
}

function ImageGenerator() {
    var col = document.getElementById("col").value;
    var row = document.getElementById("row").value;
    var num = document.getElementById("number").value;
    if(num > 10) {
        alert("Number of images must be 10 or lower");
        return;
    }
    var table = document.getElementById("randTable");
    var tabley = "";
    for(var i = 0; i < row; i++) {
        tabley += '<tr>';
        for(var j = 0; j < col; j++) {
            tabley += '<td>';
            var random = Math.floor(Math.random() * num) + 1;
            tabley += '<img src=' + random + '.jpg>'
            tabley+= '</td>';
        }
        tabley += '</tr>';
        
    }
    table.innerHTML = tabley;
}
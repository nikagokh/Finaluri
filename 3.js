function Str() {
    var str = document.getElementById("fourty").value;
    var num = parseInt(str);
    var massive = ['abadeli', 'delao', 'ralamazi', 'dgeao'];
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var count = 0;
    var doub = '';
    console.log(str.length);
    
    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'a') {
            count++;
        }
    }
   console.log(count);
   var stringa = '';
   //6-7-8
   for(var j = 0; j < 20; j++) {

   for(var i = 0; i <num ; i++) {
    doub += letters[Math.floor(Math.random() * 26)];
   }
   doub += ' ';
   stringa += doub
}
   console.log(doub);
   //9-10
   var l = 0;
   for(var i = 0; i < 4; i++) {
    if(str.includes(massive[i])) {
        var st = massive[i];
        str.replace(st, '****');
        l++;
    }
   }
   if(l === 0) {
    console.log("ar moidzebna");
   }
   console.log(str);
   //11 
   var uniq = "";
   for (var i = 0; i < str.length; i++) {
    if(uniq.includes(str[i]) === false) {
        uniq+= str[i];
    }
   }
   console.log(uniq);
   for(var i = 0; i < 10; i++) {
   console.log(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
   }

}
function Mathematics(x, l) {
    var kvir = ['orshabati', 'samshabati', 'otxshabati', 'xutshabati', 'paraskevi', 'shabati', 'kvira'];
    console.log(Math.ceil(x));
    console.log(Math.floor(x));
    console.log(Math.round(x));
    if(l === true) {
        console.log(Math.floor(x));
    }
    else {
        console.log(Math.ceil(x));
    }
    console.log(Math.round(Math.random()));
    console.log(Math.floor(Math.random() * (50 - 5 + 1) + 5));
    var num = Math.floor(Math.random() * 7);
    console.log(kvir[num]);
    var div = document.querySelector("#fotoy");
    console.log(div);
   
    console.log(Math.floor(Math.random() * 31 + 1));

}
Mathematics(10.5, true);

function Pirveli(x,y) {
    console.log(x + y);
}
Pirveli(4,5);
function Cxrili(x) {
    var cxrili = document.querySelector(".tabley");
    var tb = "";
    for(var i = 0; i < 2; i++) {
        tb+='<tr>';
        for(var j = 0; j < 2; j++) {
            tb+='<td>';
            tb+='da';
            tb+='</td>';
        }
        tb+='</tr>';
    }
    cxrili.innerHTML = tb;
    cxrili.style.height = '50px';
    cxrili.height = 50;
    cxrili.bgColor = 'green';
    cxrili.style.border = "thick solid #0000FF";

    for(var i = 1; i <=10; i++) {
        console.log(i);
    }
}
function Emeni() {
    var m = document.getElementById("emi").value;
    var n = document.getElementById("eni").value;
    if(m > n) {
        var a = m;
        m = n;
        n = a;
    }
    for(var i = m; i <= n; i++) {
        console.log(i);
    }
    var cxrili = document.querySelector(".tabley");
    var tb = "";
    for(var i = 0; i < m; i++) {
        tb+='<tr>';
        for(var j = 0; j < n; j++) {
            tb+='<td>';
            tb+=`r${i+1}c${j+1}`
            tb+='</td>';
        }
        tb+='</tr>';
    }
    cxrili.innerHTML = tb;
}

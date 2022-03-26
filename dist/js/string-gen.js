var ckk = document.getElementById("1");
var res = document.getElementById("111");
var result = 0;
var time = 0;
ckk.onclick = function () {
    month = document.getElementById("month").value;
    day = document.getElementById("day").value;
    time = Math.round(new Date("2020/" + month + "/" + day).getTime() / 1000);
}
function stringGen(numm){
    res.innerHTML += "2020/" + (new Date(time * 1000).getMonth() + 1) + "/" + new Date(time * 1000).getDate() + ":" + numm + "区" + foodArray[numm] + "<br>";
    result = result * 10 + numm;
    time += 86400;
}
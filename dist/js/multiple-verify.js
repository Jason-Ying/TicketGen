var clk = document.getElementById("btn");
clk.onclick = function () {
    var ock = document.getElementById("policy");
    var ip = returnCitySN["cip"];
    var name = document.getElementById("name").value;
    var acc;
    for (i = 0; i < 101; i++) {
        if (sha1(name) == nameArray[i]) {
            acc = i;
            break;
        }
    }
    if (ock.checked == false) {
        alert("请先勾选复选框！");
        location.reload(true);
    }
    else if (acc == 100 || nameArray[acc] == undefined || (sha1(ip) != ipArray1[acc] && sha1(ip) != ipArray2[acc] && sha1(ip) != ipArray3[acc])) {
        alert("ip地址错误或账号不存在，请联系站点管理员重新登记。");
        location.reload(true);
    }
    else if (expireArray[acc] < Math.round(new Date().getTime() / 1000)) {
        if (examinArray[acc] == 0 || examinArray[acc] == 4) alert("账号已到期，暂未提交续期申请。");
        if (examinArray[acc] == 1) alert("账号已到期，续期申请待审核，请耐心等待。");
        if (examinArray[acc] == 2) alert("账号已到期，续期申请审核中，请耐心等待。");
        if (examinArray[acc] == 3) alert("账号已到期，续期申请未通过，请一周后再交审。");
        location.reload(true);
    }
    else if (acc > 999999 || month < 1 || month > 12 || day < 1 || day > 31) {
        alert("请输入正确信息！");
        location.reload(true);
    }
    else {
        window.open("http://ticketgen.gitee.io/multiple-print#" + acc + "&" + name + "&" + time.toString(16) + "&" + result.toString(16), "_blank");
    }
}
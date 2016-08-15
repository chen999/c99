/**
 * Created by fe on 2016/8/14.
 */
var Hour=document.getElementById('hour');
var Minute=document.getElementById('minute');
var Second=document.getElementById('second');
function fun(){
    var nowTime=new Date();
    var hour,minute,second;
    hour=nowTime.getHours();
    minute=nowTime.getMinutes();
    second=nowTime.getSeconds();
    var secondAngle=second*6;
    var minuteAngle=minute*6+second/60;
    var hourAngle=hour*30+minute/12;
    Hour.style.transform="rotate("+hourAngle+"deg)";
    Minute.style.transform="rotate("+minuteAngle+"deg)";
    Second.style.transform="rotate("+secondAngle+"deg)";
}
fun();
window.setInterval(fun,1000);

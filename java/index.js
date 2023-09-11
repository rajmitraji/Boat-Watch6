function timer() {
    document.getElementById('heart').style.visibility = 'hidden';
    document.getElementById('heart-rate').style.visibility = 'hidden';
    document.getElementById('time').style.visibility = 'visible';
    setInterval(function () {

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        var d = new Date();
        var x = document.getElementById("demo");
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
    }, 0);
}
function heartRate() {
    document.getElementById('time').style.visibility='hidden';
    document.getElementById('heart').style.visibility='visible';
    document.getElementById('heart-rate').style.visibility='visible';
}
function black() {
    document.getElementById('watch-sec').src='/image/smBlack.png'
}
function blue() {
    document.getElementById('watch-sec').src='/image/smBlue.png'
}
function purple() {
    document.getElementById('watch-sec').src='/image/smPurple.png'
}
function pink() {
    document.getElementById('watch-sec').src='/image/smPink.png'
}
function red() {
    document.getElementById('watch-sec').src='/image/smRed.png'
}
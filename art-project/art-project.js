
var canvas = document.querySelector('canvas');
var ctx=canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 400;
    
function drawStar(cx,cy,spikes,outerRadius,innerRadius, strokeWidth){
    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;
    var grd = ctx.createRadialGradient(50, 50, 5, 90, 60, 100);
    grd.addColorStop(0,'white');
    grd.addColorStop(1,'#0d1318');
    if(strokeWidth === undefined) {
        strokeWidth = 1;
    }
    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        ctx.lineTo(x,y)
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        ctx.lineTo(x,y)
        rot+=step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=strokeWidth;
    ctx.strokeStyle='#4B79A1';
    ctx.stroke();
    // ctx.rotate(Math.PI / 180);
    ctx.fillStyle='white';
    ctx.fill();
}

function multiplyStars () {
    setTimeout(function () {
        var newImage = document.getElementById('before');
        newImage.src = 'style/skyscraper2.png'; 
        newImage.style.visibility = "visible";
        newImage.style.opacity = '2';
        for (var i = 0; i < 100; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        drawStar(x, y, 6, 7, 2, 2);
    }
    }, 7000);
}

multiplyStars();
    
function playSound() {
    document.getElementById('sound').play();    
    }

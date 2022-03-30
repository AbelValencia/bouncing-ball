
var ball = document.getElementById('ball');
var velocity = 5;
var positionX = 0;
var positionY = 0;
var reverse = false;

function moveBall() {
  var Xmin = 0;
  var Xmax = 400;
  
  if(reverse == false){
    positionX = positionX + velocity;
    ball.style.left = positionX + 'px';}else{
        positionX = positionX - velocity*2.9;
        ball.style.left = positionX + 'px';
    }

    if (positionX > Xmax ){
        reverse = !reverse
      }
    if (positionX < Xmin){
        reverse = !reverse
      }
}
setInterval(moveBall, 20);



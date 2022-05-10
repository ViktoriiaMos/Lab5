var sw = document.getElementById((9 % 10)+1);
var sx = document.querySelector(".text2");


//кліки
sw.onclick = function() {
   changecolor()
};

sx.onclick = function() {
   changecolor2()
};


//зміна кольору при кліку першого елементу
function changecolor() {   

   if(sw.style.color == "red")
       sw.style.color = "black";
   else
       sw.style.color = "red";
   }
  

//зміна класу  при кліку другого елементу

function changecolor2() {

   if(sx.className == "text2")
     
      sx.className = "text3";
   else
      sx.className = "text2";
   }

// зум картинки
function zoomin() {
    var tag = document.getElementById("brs");
    var currWidth = tag.clientWidth;
    tag.style.width = (currWidth + 100) + "px";
 }
  function zoomout() {
    var tag = document.getElementById("brs");
    var currWidth = tag.clientWidth;
    tag.style.width = (currWidth - 100) + "px";
 }
 
 
 function del() {
    element = document.querySelector('.image-block');
    element.style.visibility = 'hidden';
 }
 
 function add() {
    element = document.querySelector('.image-block');
    element.style.visibility = 'visible';
 }
 
let span = document.querySelector(".up");

window.onscroll = function(){
  if(this.scrollY >= 1000 ){
    span.classList.add("show");
  }else{
    span.classList.remove("show");
  }
}


span.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
};

let myJop = "Travel The World...";

let index = 1;
function writeText(){
  document.querySelector("#main").textContent = myJop.slice(0,index);

  index++
  if(index > myJop.length){
    index = 1;
  }
} 
setInterval(function(){
  writeText()
  
}, 300);
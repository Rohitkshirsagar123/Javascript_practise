
const circle =document.querySelectorAll(".circle");
console.log(circle)

const button =document.querySelectorAll("button");
const prev = button[0]

const next = button[1]

var clicks = 0;
prev.disabled=true;
prev.style.backgroundImage = "none"; 
prev.onclick = ()=>{
    console.log("clicked previous")
    clicks-=1;
    // circle[clicks].style.backgroundColor="red";    ----------------------
    circle[clicks+1].style.border="3px solid white";
    circle[clicks+1].style.backgroundColor="white";
    console.log(clicks)

    if(clicks==0){
        // circle[clicks-1].style.backgroundColor="white";
        // clicks=0;
       console.log(prev)
       prev.disabled=true;
       prev.style.backgroundImage = "none"; 
    }
    next.disabled=false;
    // prev.style.backgroundImage = "none"; 
    next.style.backgroundImage="linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)";
}



circle[clicks].style.border="3px solid rgb(189, 66, 166)";
circle[clicks].style.backgroundColor="aqua";
next.onclick = ()=>{
     clicks+=1;
    console.log("clicked next",clicks)
    if(clicks==3){
        // circle[clicks-1].style.backgroundColor="white";
        // clicks=0;
       console.log(next)
       next.disabled=true;
       next.style.backgroundImage = "none";
      
    }
    prev.disabled=false;
    prev.style.backgroundImage="linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)";



    circle[clicks].style.border="3px solid rgb(189, 66, 166)";
    circle[clicks].style.backgroundColor="aqua";

    // circle[clicks-1].style.backgroundColor="white"; -------------------

}
for(i of circle){
    console.log(i)
}
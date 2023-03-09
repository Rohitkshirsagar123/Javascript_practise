console.log("preloader start....")

const loading_1= document.querySelector(".loading");
console.log(loading_1)

window.onload=function(){
    setInterval(() => {
        loading_1.style.display="none";
    
}, 1500);
    
console.log("hello")
}
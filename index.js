const btn= document.querySelector(".button-20")
// console.log(btn)
let cnt=0
btn.onclick= function(){
    cnt=cnt+1;
    console.log("new clicked");
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    btn.textContent="Light Mode";

   
    // btn.style.color="red";
    // btn.style.backgroundColor="yellow";
    if (cnt == 2){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        btn.textContent="Dark Mode";
        cnt = 0
    
    }
//    console.log("#############",cnt)
    
}




const allbtn = document.querySelectorAll(".newbutton");
// console.log(allbtn[0])
// allbtn[0].addEventListener("click",function(){
//     console.log("clicked 1st button")
// })
// let click= 
for(let btn of allbtn ){
btn.addEventListener("click",function(){
    console.log(this)
    console.log(this.textContent);

})}



// asynchronus function 


// settimeout 
// console.log("script start")

// let a= setTimeout(()=>{
//     console.log("Executed.....")
// },1000)
// console.log("settimeout id is",a)
// clearTimeout(a)
// console.log("script end")


// setinterval 
// console.log("script start")

// setInterval(() => {
//     console.log(Math.random())
// }, 1000);

// console.log("script end")



const stop_btn=document.querySelector(".stop_btn");
const body=document.body;
console.log(body)
console.log(stop_btn)


const interval_id = setInterval(() => {
    const red=Math.floor(Math.random()*126)
    const green=Math.floor(Math.random()*126)
    const blue=Math.floor(Math.random()*126)
    const rgb = `rgb(${red},${blue},${green})`
    console.log(red,blue,green)
    body.style.backgroundColor= rgb
}, 1000);

stop_btn.addEventListener('click',()=>{
    // body.style.backgroundColor= "";
    console.log(interval_id)
    clearInterval(interval_id)
    stop_btn.textContent=body.style.backgroundColor;
})
console.log("Script start....")

// const bucket= ['coffee','chips','vegetables','salt','rice']

// const fried_promise=new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("resolved")
//     }
//     else{
//         reject("reject")
//     }
// })

// // console.log(fried_promise)
// fried_promise.then((value)=>{
//     console.log("promise is",value)
// })
// .catch((value)=>{
//     console.log("promise error",value)
// })

const xhr = new XMLHttpRequest()
const URL ="https://jsonplaceholder.typicode.com/posts"
console.log(xhr)

xhr.open("GET",URL);

xhr.onreadystatechange = ()=>{
    if(xhr.readyState=== 4){
    const data =xhr.response
    data_object = JSON.parse(data)
    console.log(data_object)

    }
}


xhr.send();
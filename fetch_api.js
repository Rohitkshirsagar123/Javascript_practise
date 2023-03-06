console.log("script start......")
const URL ="https://jsonplaceholder.typicode.com/posts"

// const a= fetch(URL)
// console.log(a)
// this is fetch
fetch(URL).then((response)=>{
    // console.log(response.json())
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})
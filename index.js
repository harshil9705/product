let products = JSON.parse(localStorage.getItem("products")) || []

let output = (data) =>{
    document.querySelector("#ui").innerHTML=""
    data.map((ele)=>{
        let img = document.createElement("img")
        img.src=ele.img
        
        let title = document.createElement("h1")
        title.innerHTML=ele.title
        
        let price = document.createElement("h2")
        price.innerHTML=ele.price
        
        let category = document.createElement("h3")
        category.innerHTML=ele.category

        let div = document.createElement("div")
        div.append(img,title,price,category)

        document.querySelector("#ui").append(div)
    })
}

database = (e) =>{
    e.preventDefault()

    let pdata = {
        img:document.querySelector("#img").value,
        title:document.querySelector("#title").value,
        price:document.querySelector("#price").value,
        category:document.querySelector("#category").value
    }
    products.push(pdata)
    localStorage.setItem("products",JSON.stringify(products))
    output(products)
}
output(products)

document.querySelector("form").addEventListener("submit",database)

let htol = () =>{
    products.sort((a,b) => (b.price - a.price))
    output(products)
}

let ltoh = () => {
    products.sort((a,b) => (a.price - b.price))
    output(products)
}

document.querySelector("#htol").addEventListener("click",htol)
document.querySelector("#ltoh").addEventListener("click",ltoh)

let handlecategory =(cat) =>{
    // let data = products.filter((item) => item.category == cat)
    // output(data)
    let temp = []
    products.map((ele)=>{
        if(ele.category == cat){
            temp.push(ele)
        }
    })
    output(temp)

}

document.querySelector("#man").addEventListener("click",()=>handlecategory("man"))
document.querySelector("#woman").addEventListener("click",()=>handlecategory("woman"))
document.querySelector("#kids").addEventListener("click",()=>handlecategory("kids"))

// let cat = ["man","woman","kids"]

// for(let i = 0;i<cat.length;i++){
//     let btn = document.createElement("button")
//     btn.innerHTML=cat[i]
//     btn.setAttribute("id",cat[i])
//     document.querySelector(".btns").append(btn)
// }

// for(let i = 0;i<cat.length;i++){
//     document.getElementById(cat[i]).addEventListener("click",()=>handlecategory(cat[i]))
// }

let search= ()=>{
    let value =document.querySelector("#value").value
    let data = products.filter((key) =>key.title.includes(value.toLowerCase()))
    output(data)
}

document.querySelector("#search").addEventListener("click",search)

document.querySelector("#value").addEventListener("keypress", (e) =>{
    if(e.key = "Enter"){
        search()
    }
})
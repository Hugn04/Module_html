var sidebar = document.querySelector(".sidebar")
var toggleBtn = document.querySelector(".toggle-btn")
var listItems = document.querySelectorAll(".list-item")
var list = document.querySelector(".list")

var a = document.querySelector(".fa-house")

function getParent(element, selector){
    do{
        
        if(element.parentElement.matches(selector)){
            return element.parentElement
        }
        element = element.parentElement
    }while(element.parentElement)
}
list.addEventListener("click", function(e){
    if(e.target != list){
        for(var item of listItems){
            item.classList.remove("active")
        }
        var targetElement = getParent(e.target, ".list-item")
        targetElement.classList.add("active")
    }
})
toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("active")
})



const btnPrevious = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const listImage = document.querySelector(".list-img")
const imgs = document.querySelectorAll(".list-img img")
const indexImages = document.querySelector(".index-images")
var current = 0
var autoNext = setInterval(handleChangeImage,3000)
function handleChangeImage(type=1){
    current += 1 * type
    if(current > 4){
        current = 0
    }
    if(current < 0){
        current = 4
    }
    setImg(current)
}
function setImg(index){
    clearInterval(autoNext)
    document.querySelector(".index-item.active").classList.remove("active")
    document.querySelector(`[index-item="${index}"]`).classList.add("active")
    var width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(${width * -1 * index}px)`
    autoNext = setInterval(handleChangeImage,2000)
}

btnNext.addEventListener("click", function(){
    handleChangeImage(1)
})
btnPrevious.addEventListener("click", function(){
    handleChangeImage(-1)
})
indexImages.onclick = function(e){
    var index  = e.target.getAttribute("index-item")
    index = Number(index)
    if(index){
        current = index
        setImg(index)
    }
    
}


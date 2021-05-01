var grid = document.getElementsByClassName("grid")
var pages = document.getElementsByClassName("pages")[0]
var detailPage = document.getElementsByClassName("detailPage")[0]
var scrollPosition = 0
Array.from(grid).forEach((item)=>{
  item.addEventListener("click", (e)=>{
    var pos = e.clientX
    sliding(pos)
    // POST



  })
})

  var user = {name: "laishi", age: 32}
  var options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user) 
  };
//    fetch('/api', options)
console.log(user)
console.log(options)

detailPage.addEventListener("click", ()=>{
    pages.style.transform = "translateX(0%)"
})

function sliding(pos){
   var transformStyleY = detailPage.style.transform
  console.log(transformStyleY)
  if(pos > window.innerWidth/2){
    detailPage.style.transform = "translate(100% ," + scrollPosition + ")"
    pages.style.transform = "translateX(-100%)"

  }else{
    detailPage.style.transform = "translate(-100% ," + scrollPosition + ")"
    pages.style.transform = "translateX(100%)"

  }

}

window.addEventListener('scroll', function(e) {
  var transformStyleX = detailPage.style.transform.split(",")[0].split("(")[1]

  scrollPosition = window.scrollY + "px";
    detailPage.style.transform = "translate(" + transformStyleX + "," + scrollPosition + ")"
    
    // detailPage.style.transform = "translate(" + transformStyleX + "," + scrollPosition + ")"
  console.log(transformStyleX)
});



// document.addEventListener('wheel', zoom);

// function zoom(event) {
//   event.preventDefault();


//   console.log(event.deltaY )
// }















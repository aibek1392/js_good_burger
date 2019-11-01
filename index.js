document.addEventListener("DOMContentLoaded", () => {
  //Implement Your Code Here

let burgerMenu = document.getElementById("burger-menu")

fetch("http://localhost:3000/burgers")
.then(r => r.json())
.then(burgers => {
  // debugger
  console.log(burgers);
  burgers.forEach(burger => {
    burgerMenu.innerHTML += `<div class="burger">
    <h3 class="burger_title">${burger.name}</h3>
      <img src="${burger.image}">
      <p class="burger_description">
      ${burger.description}
      </p>
      <button data-id="${burger.id}" class="button">Add to Order</button>
  </div>`
})

let orderList = document.getElementById("order-list")
burgerMenu.addEventListener("click", event => {
  event.preventDefault()
  // debugger
  if(event.target.tagName === "BUTTON"){
    let burgerId = event.target.dataset.id
    let burgerName = event.target.parentElement.querySelector(".burger_title").innerText
    orderList.innerHTML += `<li data-id ="${burgerId}">${burgerName} </li>`
    

  }
})
})

let createBurgerForm = document.getElementById("custom-burger")
createBurgerForm.addEventListener('submit', event => {
  event.preventDefault()
// debugger
let newNameOfBurger = event.target.name.value
let newDescriptionOfBurger = event.target.description.value
let newImageBurger = event.target.url.value

fetch("http://localhost:3000/burgers", {
  method: "POST",
  headers: {
    "content-type":"application/json",
    "accept":"application/json"
  },
  body: JSON.stringify({
    name: newNameOfBurger,
    description: newDescriptionOfBurger,
    image: newImageBurger
  })
})
.then(r => r.json())
.then(burger => {
  burgerMenu.innerHTML += `<div class="burger">
    <h3 class="burger_title">${burger.name}</h3>
      <img src="${burger.image}">
      <p class="burger_description">
      ${burger.description}
      </p>
      <button data-id="${burger.id}" class="button">Add to Order</button>
  </div>`    

})





})
































})

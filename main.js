document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  let input = document.querySelector("#reset-field input")
  input.value = ""

})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  let cajita = document.querySelector("#validate-field input") 
  let medirText = cajita.value.length //el valor del texto en el input
  let paragraph = document.querySelector("#validate-field .flash-message")
  console.log(paragraph)
  if(medirText >= 6){ //OK
  	paragraph.classList.remove("invalid")
  	paragraph.classList.add("valid")
  	paragraph.textContent = "Field Valid" 
  } else {
  	paragraph.classList.remove("valid")
  	paragraph.classList.add("invalid")
  	paragraph.textContent = "Input not long enough"
  }
})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
  let sum = document.querySelectorAll(".cars-list input")
  // let firstCheckbox = document.querySelector("#first")
  // console.log(firstCheckbox.checked)
  const checkboxArray = [...sum] 
  let total = 0
  for(let i = 0; i < checkboxArray.length; i++){
  	if(checkboxArray[i].checked === true){
  		let val = checkboxArray[i].value
  		total += parseInt(val)
  	}
  }
  let boxPrice = document.querySelector(".summary .sum-total")
  boxPrice.textContent = total 
})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4
  let selectedModel = document.querySelector("#select-to-show-more .selection")

  let selection = selectedModel[selectedModel.selectedIndex]
  let dataset = Object.assign({}, selection.dataset)
  console.log(dataset)

  document.querySelector("#select-to-show-more .model").innerHTML = selectedModel.value
  document.querySelector("#select-to-show-more .msrp").innerHTML = dataset.msrp
  document.querySelector("#select-to-show-more .mpg").innerHTML = dataset.mpg
  document.querySelector("#select-to-show-more .edmunds").innerHTML = dataset.edmunds
  document.querySelector("#select-to-show-more .img-box").innerHTML = `<img src="images/${dataset.img}">`

})


document.querySelector("#add-guest input").addEventListener("keypress", function(evt){
	// console.log(evt)
	if(evt.keyCode === 13){ // Enter
		if(evt.target.value.length > 0){
			var node = document.createElement("li")                // Create a <li> node
			var textnode = document.createTextNode(evt.target.value)        // Create a text node
			node.classList.add("guest")
			node.appendChild(textnode); 
			console.log(node)
			document.querySelector("#add-guest .guest-list").appendChild(node)
			evt.target.value = ""
		}
	}
})
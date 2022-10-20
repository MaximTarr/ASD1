let pageDiv = document.querySelector(".page")
let componentsDiv = document.querySelector(".components")

let components = JSON.parse(localStorage.getItem("components")) || []





for(let i = 0; i < components.length; i++){
	componentsDiv.innerHTML += `
		<button class="component_item" onclick="drawComponent(${i})">${components[i].title}</button>
		<br><br>
	`
}



let drawComponent = component => {
	pageDiv.innerHTML += `<style>${components[component].style}</style>`
	pageDiv.innerHTML += components[component].code
}
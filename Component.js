class Component{
	constructor(title, code, style){
		this.title = title
		this.code = code
		this.style = style
	}

	save(){
		let components = JSON.parse(localStorage.getItem("components")) || []
		components.push({
			title: this.title,
			code: this.code,
			style: this.style
		})
		localStorage.setItem("components", JSON.stringify(components))
		alert("Component saved!")
	}
}














// <button class="red_button">
//   Нажми на меня
// </button>

// .red_button{
//   background-color: red;
//   border: none;
//   border-radius: 8px;
//   padding: 4px 8px;
//   color: "white";
// }
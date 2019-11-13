var items = document.getElementById("items");
var input = document.getElementById("imput");
var inputbutton = document.getElementById("imputbutton");
inputbutton.disabled = true;

var n_items = 0;

input.oninput = function(event){
	text = document.getElementById("imput").value;
	if(text.length==0)inputbutton.disabled=true;
	else inputbutton.disabled=false;
};


input.onkeypress = function(event){
	if (event.keyCode == 13){
		addItem();
		inputbutton.disabled=true;
	}
}

function updateTitle(){
	title.innerHTML = "My shopping list (" + n_items + (n_items==1? " item":" items") + ")";
}

function addItem(){
	inputbutton.disabled=true;
	newItem = document.createElement("li");
	name = document.getElementById("imput").value;
	if(name!==""){
		document.getElementById("imput").value ="";
		newItem.innerHTML = "<span id='" + n_items + "'>• " + name + "</div";
		button = document.createElement("button");
		button.innerHTML = "Delete";
		button.id = "delete";
		newItem.appendChild(button);
		items.appendChild(newItem);
		n_items++;
		button.onclick = function() {
			var div = this.parentElement;
			div.remove();
			n_items--;
			updateTitle();
		}
		title = document.getElementById("title")
		title.innerHTML = "My shopping list (" + n_items + (n_items==1? " item":" items") + ")";
		updateTitle();
	}
}

var items = document.getElementById("items");

var n_items = 0;

document.getElementById("imput").onkeypress = function(event){
	if (event.keyCode == 13){
		addItem();
	}
};

function updateTitle(){
	title.innerHTML = "My shopping list (" + n_items + (n_items==1? " item":" items") + ")";
}

function addItem(){
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

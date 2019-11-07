var items = document.getElementById("items");

var n_items = 0;

function addItem(name){
	newItem = document.createElement("li");
	newItem.innerHTML = "<div id='" + n_items + "'>" + name + "</div";
	button = document.createElement("button");
	button.innerHTML = "Delete";
	newItem.appendChild(button);
	button = addEventListener('click', () => {
		item = document.getElementById(id);
		item.remove();
	});
	var id = n_items + "_id";
	items.appendChild(newItem);
	n_items++;
}

//Find checkboxes
var checkboxlist = document.getElementById('checkboxes');
var checkboxes = checkboxlist.querySelectorAll("input[type='checkbox']");

//Find all merch items
var itemlist = document.getElementById("items");
var items = itemlist.querySelectorAll("li");

//Add eventlistener to "all" checkbox
checkboxes[0].addEventListener("change", showAll);

//Add eventlisteners all checkboxes excluding "all"
for (var i = 1; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener("change", hide);
}

//remove "hide" class from all items
function showAll() {
	
	if (this.checked == true) {

		for(var i = 0; i < items.length; i++) {
			items[i].classList.remove("hide");
		}

		for (var i = 1; i < checkboxes.length; i++) {
			checkboxes[i].checked = false;
		}
	} else {
		this.checked = true;
	}
}

//Add "hide" classes to other items
function hide() {
	
	if (this.checked == true) {

		//get classname from checkbox value
		var value = this.value;

		//remove hide classes from all items
		for(var i = 0; i < items.length; i++) {
			items[i].classList.remove("hide");
		}
		
		//
		for(var i = 0; i < items.length; i++) {
			if (items[i].className != value) {
				items[i].className = (items[i].className  + " hide");
			}
		}

		//uncheck all other checkboxes
		for (var i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].value != value) {
				checkboxes[i].checked = false;
			}
		}
	} else {
		this.checked = true;
	}
}
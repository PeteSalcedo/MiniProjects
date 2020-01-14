const itemToAdd = document.getElementById("itemToAdd");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("list");

class Item {
    constructor (itemName){
        console.log(itemName)
        this.name = itemName;
        
        this.create();
    }
    create() {
        let listItem = document.createElement("div");
        listItem.classList.add("list_item")

        let input = document.createElement("input");
        input.type = "text";
        input.classList.add("item-name");
        input.value = this.name;
        input.disabled = true;

        let actions = document.createElement("div");
        actions.classList.add("item_actions")
        
        let updateButton = document.createElement("button");
        updateButton.classList.add("update")
        updateButton.innerText = "Update"

        let removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        removeButton.innerText = "Remove"


        actions.appendChild(updateButton);
        actions.appendChild(removeButton)
        listItem.appendChild(input);
        listItem.appendChild(actions);

        itemList.appendChild(listItem)
    }

}

addButton.addEventListener("click", () => newItem());

function newItem(){
    if(itemToAdd.value != "") {
        new Item(itemToAdd.value);
        itemToAdd.value = "";
    }
}
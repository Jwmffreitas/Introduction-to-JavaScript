var ul = document.getElementById("list");
var li;
var itemID;
var item;

enviar = function(){
    if(document.getElementById('topfive').value != ""{
        item = document.getElementById().value;
        itemID = ul.childElementCount;
        li = p1(itemID);
        li.appendChild(createRemove(itemID));
        ul.appendChild(li);
    }
}

p1 = function(itemValue, itemID) {
    let li = document.createElement("li");
    li.setAttribute("index", itemID);
    li.appendChild(document.createTextNode(itemValue));
}

createRemove = function(itemID){
    let btn = document.createElement("button");
    btn.setAttribute("onclick", removeTask("++"));
    btn.innerHTML = "X";
    return btn; 
}

removeTask = function(){

}
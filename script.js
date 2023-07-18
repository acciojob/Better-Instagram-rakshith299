const parentEle = document.getElementById("parent");

//console.log(parentEle.children.length);
let dragStartId = "";
let dragDroppedId = "";


for(let i = 0; i < parentEle.children.length; i++){
    let eachDiv = parentEle.children[i];

    eachDiv.addEventListener("dragenter", function(event){
        let id = event.target.id;
        if(dragStartId === ""){
            dragStartId = event.target.id;
        }
        console.log(dragStartId, "dragstartedId");
        console.log("item has entered");
    })

    eachDiv.addEventListener("dragleave", function(event){
        console.log("item has left");
    })

    eachDiv.addEventListener("dragover", function(event){
        event.preventDefault();
        console.log("item has hovered");
    })

    eachDiv.addEventListener("drop", function(event){
        event.preventDefault();
        dragDroppedId = eachDiv.id;
        console.log("item has droped");



        console.log(dragStartId, "for drop purpose");
        console.log(dragDroppedId, "for for drop purpose");

        //changing features 

        let dropEle = document.getElementById(`${dragDroppedId}`);
        let dragEle = document.getElementById(`${dragStartId}`);

        let temp = dropEle.id;
        let temp2 = dropEle.innerText;

        dropEle.id = dragEle.id;
        dragEle.id = temp;

        dropEle.innerText = dragEle.innerText;
        dragEle.innerText = temp2;


    })
}
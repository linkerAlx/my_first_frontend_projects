const inputbox =document.getElementById("input-box");
const listcontainer =document.getElementById("list-container");

function addTask(){
    if (inputbox.value === ''){
        alert("you must write something!");
    }

else{
    let li = document.createElement("li");
    li.textContent = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
}
 inputbox.value ="";
 savedata();
};

listcontainer.addEventListener("click", function(e) {
    // If the clicked element is an <li>
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class of the clicked <li> element
        e.target.classList.toggle("checked");
        savedata()
    } 
    // If the clicked element is a <span>
    else if (e.target.tagName === "SPAN") {
        // Remove the parent <li> element of the clicked <span>
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();








const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
console.log(listContainer)
document.getElementById("add-btn").addEventListener("click",addTask);
addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        addTask()
    }
})

function addTask(){
    if(inputBox.value==""){
        alert("You must write something!!");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
    }
inputBox.value="";
saveData()
}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName.ToUpperCase()==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName.ToUpperCase()==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()

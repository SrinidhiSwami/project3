
function checkScroll(){
    const num=document.querySelectorAll(".task-added").length;
    if(num>6){
        document.querySelector(".containerBox").style.overflowY="scroll";
    }
    else
    {
        document.querySelector(".containerBox").style.overflowY="hidden";
    }
}
    
function addTask(){
    const t1=document.getElementById("taskIp").value.trim();
    if(t1 === "") return;
    const li=document.createElement("li");
    li.className="task-added";
    li.innerHTML=`
    <p class="t">${t1}</p>
    <div class="task-buttons">
        <button class="done">Done</button>
        <button class="delete">Delete</button>
    </div>
    `;
    document.querySelector(".taskList").appendChild(li);
    taskIp.value = "";
    document.getElementById("eg1").style.display="none";
    checkScroll();
}
document.getElementById("add").addEventListener("click",addTask);
document.getElementById("taskIp").addEventListener("keydown",function(event){
    if(event.key=="Enter")
    {
        addTask();
    }
});
document.querySelector(".taskList").addEventListener('click', function(event) {
    if (event.target.classList.contains('done')) {
        const taskText = event.target.closest('.task-added').querySelector('.t');
        taskText.classList.toggle('done');
    }    
    if (event.target.classList.contains('delete')) {
        const li = event.target.closest('.task-added');
        li.remove();
    }
});

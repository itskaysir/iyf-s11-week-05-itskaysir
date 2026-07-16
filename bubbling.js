const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add a new task
addBtn.addEventListener("click", function () {

    if(taskInput.value.trim() === ""){
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task">${taskInput.value}</span>
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
});


// ONE event listener on the parent <ul>
taskList.addEventListener("click", function(event){

    // Delete task
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }

    // Mark task completed
    if(event.target.classList.contains("task")){
        event.target.classList.toggle("completed");
    }

});
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const remaining = document.getElementById("remaining");
const clearCompleted = document.getElementById("clear-completed");

const filterButtons = document.querySelectorAll("[data-filter]");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const text = input.value.trim();

    if(text===""){
        alert("Task cannot be empty");
        return;
    }

    const li=document.createElement("li");

    li.innerHTML=`
        <span class="task">${text}</span>
        <button class="delete">Delete</button>
    `;

    list.appendChild(li);

    input.value="";

    updateCount();

});

list.addEventListener("click",function(e){

    if(e.target.classList.contains("task")){
        e.target.classList.toggle("completed");
        updateCount();
    }

    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        updateCount();
    }

});

function updateCount(){

    const tasks=document.querySelectorAll(".task");

    const completed=document.querySelectorAll(".completed");

    remaining.textContent=
    `${tasks.length-completed.length} items left`;

}

clearCompleted.addEventListener("click",function(){

    document.querySelectorAll(".completed").forEach(task=>{

        task.parentElement.remove();

    });

    updateCount();

});

filterButtons.forEach(button=>{

    button.addEventListener("click",function(){

        const filter=this.dataset.filter;

        document.querySelectorAll("#todo-list li").forEach(li=>{

            const completed=
            li.querySelector(".task").classList.contains("completed");

            if(filter==="all"){

                li.style.display="flex";

            }

            else if(filter==="active"){

                li.style.display=
                completed ? "none":"flex";

            }

            else{

                li.style.display=
                completed ? "flex":"none";

            }

        });

    });

});

list.addEventListener("dblclick",function(e){

    if(e.target.classList.contains("task")){

        const old=e.target.textContent;

        const input=document.createElement("input");

        input.value=old;

        e.target.replaceWith(input);

        input.focus();

        input.addEventListener("keydown",function(event){

            if(event.key==="Enter"){

                const span=document.createElement("span");

                span.className="task";

                span.textContent=input.value;

                input.replaceWith(span);

            }

            if(event.key==="Escape"){

                const span=document.createElement("span");

                span.className="task";

                span.textContent=old;

                input.replaceWith(span);

            }

        });

    }

});

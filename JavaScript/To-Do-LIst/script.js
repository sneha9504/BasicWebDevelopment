document.addEventListener("DOMContentLoaded",() => {

let todos = [];
const task_list = document.getElementById('task-list');
const sub_btn = document.getElementById("sub_btn");


sub_btn.addEventListener("click", (event) => {
    event.preventDefault();
    let user_value = document.getElementById('task_input').value;
    let task_obj = {};

    if (user_value.trim() !== "") {
        task_obj = {
            id: Date.now(),
            task: user_value,
            is_completed: false
        };

        todos.push(task_obj);
        document.getElementById('task_input').value = "";
    }

    renderTask();
});

const renderTask = () => {
    task_list.innerHTML = "";
    //  console.log(todos.length);
    if (todos.length === 0) {
        task_list.textContent = "Your list is empty";
    } else {
        todos.slice().reverse().forEach((task) => {
            const li = document.createElement("li");
            li.className = "task-item";

            const span = document.createElement("span");
            span.className = "li_span";
            span.textContent = task.task;

            const buttons = document.createElement("div");
            buttons.className = "task-buttons";

            const revert = document.createElement("button");
            revert.className = 'revert_btn';
            revert.textContent = "✅";
            revert.addEventListener("click", () => {
                const target = todos.find(t => t.id === task.id);
                if (target) {target.is_completed = !target.is_completed;
                renderTask();}
            });
            
             if (task.is_completed) {
                span.style.textDecoration = "line-through";
                span.style.opacity = "0.6";
                revert.textContent = "🔄";
            } else {
                span.style.textDecoration = "none";
                span.style.opacity = "1";
                revert.textContent = "✅";
            }


            const dlt = document.createElement("button");
            dlt.className = 'dlt_btn';
            dlt.textContent = "❌";
            dlt.addEventListener("click", () => {
                let check = confirm("Do you want to deleted ?")
                if (check) {
                    todos = todos.filter(t => t.id !== task.id);
                    renderTask();
                }

            });

           
            buttons.appendChild(revert);
            buttons.appendChild(dlt);

            li.appendChild(span);
            li.appendChild(buttons);
            task_list.appendChild(li);
        });
    }
};

});


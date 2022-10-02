window.addEventListener('load', () => {
	const taskForm = document.querySelector("#task-form");
	const taskInput = document.querySelector("#task-input");
	const tasks = document.querySelector("#tasks");
    const taskCounter = document.querySelector("#task-counter");

	taskForm.addEventListener('submit', (e) => {
		e.preventDefault();

        const newTask = taskInput.value;

        if(newTask != ''){
            const task = document.createElement("div");
            task.classList.add('task');
    
            const taskValue = document.createElement('input');
            taskValue.type = 'text';
            taskValue.value = newTask;
            taskValue.setAttribute('readonly', 'readonly');
            taskValue.autocomplete = 'of';
            task.appendChild(taskValue);
    
            const taskBtn = document.createElement("div");
            taskBtn.classList.add('task-btn');
            const edtiBtn = document.createElement("button");
            edtiBtn.innerText = 'Editar';
            edtiBtn.classList.add('edit');
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = 'Eliminar'
            deleteBtn.classList.add('delete');
            taskBtn.appendChild(edtiBtn);
            taskBtn.appendChild(deleteBtn);
            task.appendChild(taskBtn)
    
            tasks.prepend(task);

            taskCounter.innerText = `Tareas: ${tasks.childElementCount}`;

            taskInput.value = ''
            edtiBtn.addEventListener('click', (e) => {
                if (edtiBtn.innerText.toLowerCase() == "editar") {
                    edtiBtn.innerText = "Guardar";
                    taskValue.removeAttribute("readonly");
                    taskValue.focus();
                } else {
                    edtiBtn.innerText = "Editar";
                    taskValue.setAttribute("readonly", "readonly");
                }
            });
            
            deleteBtn.addEventListener('click', (e) => {
                tasks.removeChild(task);
                taskCounter.innerText = `Tareas: ${tasks.childElementCount}`;
            });
        }





	});
});
// function addTask(){
//        const newTask = document.createElement('li')
//        const taskList = document.getElementById('taskList')
//        taskList.appendChild(newTask)
//        newTask.textContent = document.getElementById('inputTask').value
//        document.getElementById('inputTask').value = ""
//        deleteTask(newTask)

// }

function addTask() {
    const input = document.getElementById('inputTask');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const taskList = document.getElementById('taskList');
    taskList.appendChild(newTask);

    input.value = "";

    deleteTask(newTask);
}

//Press Enter to Add Task
document.getElementById('inputTask').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});



function deleteTask(newTask) {
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)

    deleteBtn.onclick = function() {
        newTask.remove()
    }
     
}

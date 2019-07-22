        window.addEventListener("DOMContentLoaded", init);
        window.addEventListener("storage", loadTasksFromStorage);

        function loadTasksFromStorage(){
            document.getElementById("olTaskList").innerHTML = '';
            for(var i=0; i<localStorage.length; i++){
                var taskId = localStorage.key(i);
                var taskName = localStorage.getItem(taskId);
                addTaskToList(taskId, taskName);
            }
        }
        function init(){
            var btnAdd = document.getElementById("btnAdd");
            btnAdd.addEventListener("click", onBtnAddClick);

            var btnRemoveCompleted = document.getElementById("btnRemoveCompleted")
            btnRemoveCompleted.addEventListener("click", onBtnRemoveCompletedClick);

            loadTasksFromStorage();

        }
        function onBtnAddClick(){
            var txtTask = document.getElementById("txtTask");
            var taskName = txtTask.value;

            var taskId = Date.now().toString();
            localStorage.setItem(taskId, taskName);
            addTaskToList(taskId, taskName);
            alert("New Task Added@@@@");
        }
        function addTaskToList(taskId, taskName){
            var newTask = document.createElement("li");
            newTask.setAttribute("taskId", taskId);
            newTask.innerHTML = taskName;
            newTask.addEventListener("click", onTaskItemClick);
            document.getElementById("olTaskList").appendChild(newTask);
        }
        function onTaskItemClick(){
            this.classList.toggle("completed");
        }
        function onBtnRemoveCompletedClick(){
            var olTaskList = document.getElementById("olTaskList");
            for(var i=olTaskList.children.length-1; i>=0; i--){
                var taskItem = olTaskList.children[i];
                if (taskItem.classList.contains("completed")){
                    var taskIdtoRemove = taskItem.getAttribute("taskId");
                    localStorage.removeItem(taskIdtoRemove);
                    taskItem.remove();
                }
            }
        }
        /*
        newId = Date.now().toString()

        1. Save the task in the storage
        2. When page is loaded, load the tasks from the storage in this list (olTaskList)
        */

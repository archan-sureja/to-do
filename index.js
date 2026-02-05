function addNewTask(event) {
    event.preventDefault()
    let title = event.target.title.value
    let description = event.target.description.value
    let task_id = `task-${getUniqueID()}`
    let template = `<div id="${task_id}" class="task" draggable="true" ondragstart="handleDragStart(event)">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>`
    let pending_tasks = document.getElementById("pending")
    let task = {
        id: task_id,
        template: template,
        status: "pending"
    }
    storeTask(task)
    pending_tasks.insertAdjacentHTML("beforeend", template)
}

function handleDragStart(event) {
    event.dataTransfer.setData("text", event.target.id)

}

function getUniqueID() {
    let id = localStorage.getItem("unique_id")
    if (!id) {
        id = "0"
    }
    id = parseInt(id, 10)
    localStorage.setItem("unique_id", id + 1)
    return id
}

function handleDragOver(event) {
    event.preventDefault()
}

function handleDrop(event) {
    event.preventDefault()
    let task_id = event.dataTransfer.getData("text")
    updateTaskStatus(task_id,event.target.id)
    event.target.appendChild(document.getElementById(task_id))

}
function handleOnLoad() {
    let task_list = JSON.parse(localStorage.getItem("task_list"))
    if (!task_list) {
        task_list = {}
        return
    }
    for(let key in task_list){
        let col = document.getElementById(task_list[key].status)
        col.insertAdjacentHTML("beforeend",task_list[key].template)
    }
}

function updateTaskStatus(task_id,status){
    let task_list = JSON.parse(localStorage.getItem("task_list"))
    task_list[task_id].status = status
    localStorage.setItem("task_list",JSON.stringify(task_list))
}
function storeTask(task) {
    let task_list = localStorage.getItem("task_list")
    if (!task_list) { task_list = "{}" }
    task_list = JSON.parse(task_list)
    task_list[task.id] = task
    localStorage.setItem("task_list", JSON.stringify(task_list))
}

function removeAllTasks(){
}
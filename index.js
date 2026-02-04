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
    pending_tasks.insertAdjacentHTML("beforeend", template)
}

function handleDragStart(event){
    event.dataTransfer.setData("text",event.target.id)

}

function getUniqueID(){
    let id = localStorage.getItem("unique_id")
    if(!id){
        id = "0"
    }
    id = parseInt(id,10)
    localStorage.setItem("unique_id",id+1)
    return id
}

function handleDragOver(event){
    event.preventDefault()
}

function handleDrop(event){
    event.preventDefault()
    let task_id = event.dataTransfer.getData("text")
    event.target.appendChild(document.getElementById(task_id))

}
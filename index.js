function addNewTask(event) {
    event.preventDefault()
    let title = event.target.title.value
    let description = event.target.description.value
    let template = `<div class="task" draggable="true">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>`
    let pending_tasks = document.getElementById("pending")
    pending_tasks.insertAdjacentHTML("beforeend", template)
}

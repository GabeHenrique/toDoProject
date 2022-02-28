//função que adiciona tarefa
function addTask() {
    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value
    if(taskTitle) {
        //clona template
        const template = document.querySelector('.template')
        const newTask = template.cloneNode(true)

        // adiciona título
        newTask.querySelector('.task-title').textContent = taskTitle

        //remover a classe necessária
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        // adiciona tarefa na lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask)

        // remove tarefa
        const removeButton = newTask.querySelector('.remove-button')
        removeButton.addEventListener('click', function() {
            this.parentNode.remove(true)
        })
        // deixa a tarefa como done ou não
        const doneButton = newTask.querySelector('.done-button')
        doneButton.addEventListener('click', function () {
            this.parentNode.classList.toggle('done')
        })

        // limpar texto
        document.querySelector('#task-title').value = ''
    }
}

let buttonAddTask = document.querySelector('#add-button')

buttonAddTask.addEventListener('click', function (e) {
    e.preventDefault()
    addTask()
})
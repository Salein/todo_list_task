const taskForm = document.getElementById("taskForm")
const valueTask = document.getElementById("valueTask")
const taskPending = document.getElementById("taskPending")
const taskComplete = document.getElementById("taskComplete")
const pending = []

taskForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const task = valueTask.value.trim()
  
  const newTask = document.createElement("li")
  newTask.innerText = task

  taskPending.appendChild(newTask)

  valueTask.value = ""

})

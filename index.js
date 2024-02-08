const tasks = document.getElementById("tasks")
const inputTask = document.getElementById("inputTask")
const arrSort = []

function addTask() {
  let li = document.createElement("li")
  li.innerHTML = inputTask.value
  tasks.appendChild(li)
  arrSort.push(li)
  inputTask.value = ""
  let span = document.createElement("span")
  span.innerHTML = "X"
  li.appendChild(span)
}

function sortTasks() {
  arrSort.sort((a, b) => {
    if (a.classList.contains("checked") && !b.classList.contains("checked")) {
      return 1
    } else if (
      !a.classList.contains("checked") &&
      b.classList.contains("checked")
    ) {
      return -1
    } else {
      return a.innerText.localeCompare(b.innerText)
    }
  })
  tasks.innerHTML = ""
  arrSort.forEach((task) => tasks.appendChild(task))
}

tasks.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked")
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove()
  }
})
